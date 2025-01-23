// TODO:
// - If user is not logged in, then display landing page
// - If user is logged in, then display problemset
'use client';
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  console.log({ session })

  return (
    <div>
      <h1>Problemset</h1>
    </div>
  );

}
