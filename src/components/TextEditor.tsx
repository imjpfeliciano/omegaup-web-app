'use client';
import { Editor } from "@monaco-editor/react";

const TextEditor = () => {
    return (
        <div className="h-full flex flex-col">
            <div className="flex w-full mx-auto">
                controls
            </div>
            <Editor defaultLanguage="javascript" className="" />
            <div className="h-1/2 bg-white mt-2">
                Test cases will be here
            </div>
        </div>
    )
}

export default TextEditor