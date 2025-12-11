const MARKDOWN_NEW_LINE = "\n";

export function convertBlocksToTables(markdown: string): string {
  // Regex to match blocks starting with ||input and ending with ||end, including newlines
  return markdown.replace(/^\s*\|\|input[\s\S]*?\|\|end\s*$/gm, (block) => {
    // Find all columns and their values
    const columnRegex = /\|\|([^\s]+)\n([\s\S]*?)(?=\n\|\||\n\|\|end|$)/g;
    const columns: { name: string; cellContent: string }[] = [];
    let match;
    while ((match = columnRegex.exec(block)) !== null) {
      const name = match[1].trim();
      // Remove any trailing ||end or blank lines from the value
      const cellContent = match[2]
        .replace(/\n\|\|end[\s\S]*$/g, "") // Remove trailing ||end and anything after
        .split("\n")
        .map((line: string) => line.trim())
        .filter(Boolean)
        .join(MARKDOWN_NEW_LINE)
        .trim();

      if (cellContent.length > 0) {
        columns.push({ name, cellContent });
      }
    }
    if (columns.length === 0) return block;

    console.log({ columns });
    // Build markdown table
    const headerRow = `| ${columns.map((col) => col.name).join(" | ")} |`;
    const separatorRow = `|${columns.map(() => " --- ").join("|")}|`;
    const valueRow = `| ${columns.map((col) => col.cellContent).join(" | ")} |`;

    const table = `\n${headerRow}\n${separatorRow}\n${valueRow}\n`;
    console.log({ table });

    return table;
  });
}
