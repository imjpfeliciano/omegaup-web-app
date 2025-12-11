import ProblemDetailsPage from "@/components/Problem/ProblemDetailsPage";
import { PanelGroup } from "react-resizable-panels";

const Page = async ({ params }: { params: Promise<{ problemId: string }> }) => {
  const { problemId } = await params;

  if (!problemId) {
    return <div>Problem ID is required</div>;
  }
  console.log({ problemId });
  return (
    <div className="h-screen">
      <PanelGroup direction="horizontal">
        <ProblemDetailsPage problemId={problemId} />
      </PanelGroup>
    </div>
  );
};

export default Page;
