"use client";

import { useProblemDetails } from "@/hooks/useProblemDetails";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import TextEditor from "../TextEditor";
import { ProblemDetails } from "./ProblemDetails";

const ProblemDetailsPage = ({ problemId }: { problemId: string }) => {
  const { data: problemData, isLoading, error } = useProblemDetails(problemId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading problem details</div>;
  }
  return (
    <div className="h-screen">
      <PanelGroup direction="horizontal">
        <Panel defaultSize={50} minSize={20} collapsible>
          <div className="h-full overflow-auto">
            <ProblemDetails
              statement={
                (problemData?.statement as Record<string, unknown>) || {}
              }
              title={(problemData?.title as string) || ""}
              id={(problemData?.problem_id as string) || ""}
            />
          </div>
        </Panel>
        <PanelResizeHandle className="w-2 bg-gray-200 hover:bg-gray-300 transition-colors" />
        <Panel defaultSize={50} minSize={30}>
          <div className="h-full">
            <TextEditor
              supportedLanguages={
                (problemData?.languages as unknown as string[]) || []
              }
            />
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default ProblemDetailsPage;
