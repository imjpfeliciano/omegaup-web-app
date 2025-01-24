const { OMEGAUP_API_URL, OMEGAUP_API_TOKEN } = process.env;

export async function GET() {
    const res = await fetch(`${OMEGAUP_API_URL}/problem/list`, {
        headers: {
            Authorization: `token ${OMEGAUP_API_TOKEN}`
        }
    })

    const data = await res.json();

    return Response.json({ data})
}