"use client";
import useSWR from "swr";
const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

interface SolvedProblemsTabProps {
  username: string;
}

const SolvedProblemsTab: React.FC<SolvedProblemsTabProps> = ({ username }) => {
  const {
    data: responseData,
    error,
    isLoading,
  } = useSWR(`/api/profile/problems/solved?username=${username}`, fetcher);

  if (error) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  const { data: { problems } = { problems: [] } } = responseData as {
    data: { problems: OmegaupProblem[] };
  };

  return (
    <div className="grid grid-cols-2 flex-col items-center justify-center gap-4 overflow-y-scroll">
      {problems.map((problem: OmegaupProblem) => (
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

export default SolvedProblemsTab;
