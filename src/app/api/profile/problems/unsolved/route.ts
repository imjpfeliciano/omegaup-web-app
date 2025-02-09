const { OMEGAUP_API_URL, OMEGAUP_API_TOKEN } = process.env;

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams.toString();

  const res = await fetch(
    `${OMEGAUP_API_URL}/user/listUnsolvedProblems/?${params}`,
    {
      headers: {
        Authorization: `token ${OMEGAUP_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();

  return Response.json({ data });
}
