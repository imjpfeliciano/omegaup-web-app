"use client";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

interface UnsolvedProblemsTabProps {
  username: string;
}

const UnsolvedProblemsTab: React.FC<UnsolvedProblemsTabProps> = ({
  username,
}) => {
  const {
    data: responseData,
    error,
    isLoading,
  } = useSWR(`/api/profile/problems/unsolved?username=${username}`, fetcher);

  if (error) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  const {
    data: { problems },
  } = responseData;
  console.log({ problems });
  return (
    <div className="grid grid-cols-2 flex-col items-center justify-center gap-4 overflow-y-scroll">
      {problems.map((problem: any) => (
        <div
          key={problem.alias}
          className="grid-cols-1 p-2 bg-slate-100 rounded"
        >
          <p>{problem.title}</p>
        </div>
      ))}
    </div>
  );
};

export default UnsolvedProblemsTab;
