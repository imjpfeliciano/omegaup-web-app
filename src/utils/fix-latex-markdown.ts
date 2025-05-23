export function fixLatexMarkdown(markdown: string): string {
  // Replace \le not followed by 'q' with \leq
  let fixed = markdown.replace(/\\le(?!q)/g, "\\leq");
  // Replace \ge not followed by 'q' with \geq
  fixed = fixed.replace(/\\ge(?!q)/g, "\\geq");
  // Add a space before \leq and \geq if not already preceded by space, $ or start of line
  fixed = fixed.replace(/([^\s$])\\leq/g, "$1 \\leq");
  fixed = fixed.replace(/([^\s$])\\geq/g, "$1 \\geq");
  // Add more replacements as needed
  return fixed;
}
