import TextEditor from "@/components/TextEditor";

const Page = async ({ params }: { params: Promise<{ problemId: string }> }) => {
  const { problemId } = await params;

  return (
    <div className="grid grid-cols-3 h-full">
      <div className="col-span-1 border h-max">
        details will be here {problemId}
      </div>
      <div className="col-span-2 h-screen w-full">
        <TextEditor />
      </div>
    </div>
  );
};

export default Page;
