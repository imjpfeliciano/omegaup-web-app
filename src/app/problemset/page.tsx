export const dynamic = "force-dynamic";
import useSWR from "swr";

// eslint-disable-next-line
// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

// const { BASE_URL } = process.env;

const Problems = () => {
  const { data, error } = useSWR("/api/problems", fetcher);

  if (error) {
    return <div>Error</div>;
  }

  if (!data) {
    return <div>Loading</div>;
  }

  const { problems } = data;

  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      <h1>Problems</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Identificador</th>
            <th>Titulo</th>
            <th>Dificultad</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem: OmegaupProblem) => (
            <tr key={problem.problem_id}>
              <td>{problem.problem_id}</td>
              <td>{problem.title}</td>
              <td>{problem.difficulty || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Problems;
