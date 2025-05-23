"use client";

import { ProblemDetails } from "@/components/Problem/ProblemDetails";
import TextEditor from "@/components/TextEditor";
import { useProblemDetails } from "@/hooks/useProblemDetails";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

const Page = ({ params }: { params: { problemId: string } }) => {
  const { problemId } = params;
  const { data: problemData, isLoading, error } = useProblemDetails(problemId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading problem details</div>;
  }

  console.log({ problemData });
  return (
    <div className="h-screen">
      <PanelGroup direction="horizontal">
        <Panel defaultSize={50} minSize={20} collapsible>
          <div className="h-full overflow-auto">
            <ProblemDetails
              statement={problemData?.statement || {}}
              title={problemData?.title || ""}
              id={problemData?.problem_id || ""}
            />
          </div>
        </Panel>
        <PanelResizeHandle className="w-2 bg-gray-200 hover:bg-gray-300 transition-colors" />
        <Panel defaultSize={50} minSize={30}>
          <div className="h-full">
            <TextEditor supportedLanguages={problemData?.languages || []} />
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default Page;
