"use client";

import { Editor } from "@monaco-editor/react";
import { useState } from "react";

const languagesLabelMapping = {
  "c11-gcc": "C - GCC",
  "c11-clang": "C - Clang",
  "cpp11-gcc": "C++ 11 - GCC",
  "cpp11-clang": "C++ 11 - Clang",
  "cpp17-gcc": "C++ 17 - GCC",
  "cpp17-clang": "C++ 17 - Clang",
  "cpp20-gcc": "C++ 20 - GCC",
  "cpp20-clang": "C++ 20 - Clang",
  java: "Java",
  kt: "Kotlin",
  py2: "Python 2",
  py3: "Python 3",
  rb: "Ruby",
  cs: "C#",
  pas: "Pascal",
  hs: "Haskell",
  lua: "Lua",
  go: "Go",
  rs: "Rust",
  js: "JavaScript",
};

const languagesLanguageMapping = {
  "c11-gcc": "c",
  "c11-clang": "c",
  "cpp11-gcc": "cpp",
  "cpp11-clang": "cpp",
  "cpp17-gcc": "cpp",
  "cpp17-clang": "cpp",
  "cpp20-gcc": "cpp",
  "cpp20-clang": "cpp",
  // TODO: Validate this mapping
  java: "java",
  kt: "kotlin",
  py2: "python",
  py3: "python",
  rb: "ruby",
  cs: "csharp",
  pas: "pascal",
  hs: "haskell",
  lua: "lua",
  go: "go",
  rs: "rust",
  js: "javascript",
};

const TextEditor = ({
  supportedLanguages,
}: {
  supportedLanguages: string[];
}) => {
  const [language, setLanguage] = useState(supportedLanguages[0]);

  return (
    <div className="h-full flex flex-col">
      <div className="flex w-full mx-auto p-2">
        <div className="flex flex-row justify-end gap-2">
          <button>Run</button>
          <button>Submit</button>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {supportedLanguages.map((language) => (
              <option key={language} value={language}>
                {
                  languagesLabelMapping[
                    language as keyof typeof languagesLabelMapping
                  ]
                }
              </option>
            ))}
          </select>
        </div>
      </div>
      <Editor
        height="50vh"
        defaultLanguage={
          languagesLanguageMapping[
            language as keyof typeof languagesLanguageMapping
          ]
        }
        defaultValue="// Write your code here"
        theme="vs-light"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          wordWrap: "on",
          automaticLayout: true,
          tabSize: 2,
          scrollBeyondLastLine: false,
        }}
      />
      <div className="h-1/2 bg-white mt-2">Test cases will be here</div>
    </div>
  );
};

export default TextEditor;
