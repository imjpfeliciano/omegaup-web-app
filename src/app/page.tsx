// TODO:
// - If user is not logged in, then display landing page
// - If user is logged in, then display problemset
'use client';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  console.log({ session })

  if (!session) {
    router.push('/api/auth/signin');
  }

  return (
    <div>
      <h1>Problemset</h1>
    </div>
  );

}
