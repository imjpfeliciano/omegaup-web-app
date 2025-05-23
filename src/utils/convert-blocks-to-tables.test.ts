import { convertBlocksToTables } from "./convert-blocks-to-tables";

describe("convertBlocksToTables", () => {
  it("converts a single block to an HTML table", () => {
    const input = `
Some text before.

||input
3
5 2
4 1
1 2
||output
Gane
Perdi
Gane
||description
En el primer caso puedo agarrar 2, luego sin importtar lo que agarre en mi turno puedo agarra la ultima piedra.
||end

Some text after.
`;
    const output = convertBlocksToTables(input);
    expect(output).toContain("<table");
    expect(output).toContain("<th>input</th>");
    expect(output).toContain("<td><pre>3 5 2 4 1 1 2</pre></td>");
    expect(output).toContain("<th>output</th>");
    expect(output).toContain("<td><pre>Gane Perdi Gane</pre></td>");
    expect(output).toContain("<th>description</th>");
    expect(output).toContain("Some text before.");
    expect(output).toContain("Some text after.");
  });

  it("does not convert blocks that do not start with ||input", () => {
    const input = `
||foo bar
||baz qux
||end
`;
    const output = convertBlocksToTables(input);
    expect(output).toContain("||foo bar");
    expect(output).toContain("||baz qux");
    expect(output).toContain("||end");
    expect(output).not.toContain("<table");
  });

  it("handles multiple blocks", () => {
    const input = `
||input 1 ||output win ||end
Some text.
||input 2 ||output lose ||end
`;
    const output = convertBlocksToTables(input);
    const tableCount = (output.match(/<table/g) || []).length;
    expect(tableCount).toBe(2);
  });

  it("returns the original string if no blocks are found", () => {
    const input = "Just some text.";
    expect(convertBlocksToTables(input)).toBe(input);
  });
});
