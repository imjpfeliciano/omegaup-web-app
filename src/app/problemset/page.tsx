const { BASE_URL } = process.env;

const Problems = async () => {
    const problemsResponse = await fetch(`${BASE_URL}/api/problems`);
    const { data } = await problemsResponse.json();
    const { results: problems } = data;

    if (!problems) {
        return <div>Error</div>
    }
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
                            <td>{problem.difficulty || '-'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Problems