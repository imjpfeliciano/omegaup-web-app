"use client";

import "katex/dist/katex.min.css";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { convertBlocksToTables } from "../../utils/convert-blocks-to-tables";
import { fixLatexMarkdown } from "../../utils/fix-latex-markdown";

export const ProblemDetails = ({
  title,
  id,
  statement,
}: {
  statement: Record<string, any>;
  title: string;
  id: string;
}) => {
  const { markdown } = statement;

  // First, convert special blocks to tables, then fix LaTeX
  const tabled = convertBlocksToTables(markdown);
  const fixed = fixLatexMarkdown(tabled);

  return (
    <div className="prose max-w-none p-4">
      <div className="h-full overflow-auto bg-white border border-gray-200 rounded-md p-4 shadow-md">
        <div className="flex flex-row gap-2 justify-center">
          <h1 className="text-lg font-bold">
            {id} - {title}
          </h1>
        </div>
        <ReactMarkdown
          remarkPlugins={[remarkMath, remarkGfm]}
          rehypePlugins={[rehypeKatex]}
          components={{
            h1: ({ node, ...props }) => (
              <h1 className="text-lg font-bold mb-4" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="text-md font-semibold mb-3" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="text-sm font-semibold mb-2" {...props} />
            ),
            p: ({ node, ...props }) => <p className="mb-2" {...props} />,
          }}
        >
          {fixed}
        </ReactMarkdown>
      </div>
    </div>
  );
};
