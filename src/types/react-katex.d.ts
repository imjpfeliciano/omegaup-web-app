declare module "react-katex" {
  import * as React from "react";
  export interface BlockMathProps {
    children: string;
  }
  export interface InlineMathProps {
    children: string;
  }
  export const BlockMath: React.FC<BlockMathProps>;
  export const InlineMath: React.FC<InlineMathProps>;
}
