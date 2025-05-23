"use client";
import Link from "next/link";
import useSWR from "swr";
// eslint-disable-next-line
// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Problems = () => {
  const { data, error, isLoading } = useSWR("/api/problems", fetcher);

  if (error) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4">
        <div className="h-10 w-full bg-gray-200 rounded-md"></div>
        <div className="h-10 w-full bg-gray-200 rounded-md"></div>
        <div className="h-10 w-full bg-gray-200 rounded-md"></div>
        <div className="h-10 w-full bg-gray-200 rounded-md"></div>
      </div>
    );
  }

  const {
    data: { results, total },
  } = data;

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th>Identificador</th>
          <th className="text-left">Titulo</th>
          <th>Dificultad</th>
        </tr>
      </thead>
      <tbody>
        {results.map((problem: OmegaupProblem) => (
          <tr key={problem.problem_id}>
            <td className="text-center">
              <Link href={`/problems/${problem.alias}`}>
                {problem.problem_id}
              </Link>
            </td>
            <td>{problem.title}</td>
            <td className="text-center">{problem.difficulty || "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Problems;
