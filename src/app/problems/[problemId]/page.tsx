import ProblemDetailsPage from "@/components/Problem/ProblemDetailsPage";

const Page = async ({ params }: { params: Promise<{ problemId: string }> }) => {
  const { problemId } = await params;

  if (!problemId) {
    return <div>Problem ID is required</div>;
  }
  console.log({ problemId });
  return <ProblemDetailsPage problemId={problemId} />;
};

export default Page;
