declare module "react-mathjax" {
  import { ReactNode } from "react";

  interface MathJaxContextProps {
    config: {
      tex: {
        inlineMath: string[][];
        displayMath: string[][];
      };
    };
    children: ReactNode;
  }

  interface MathJaxProps {
    children: ReactNode;
  }

  export const MathJaxContext: React.FC<MathJaxContextProps>;
  export const MathJax: React.FC<MathJaxProps>;
}
