import { auth } from "@/auth";
import LandingPage from "@/components/LandingPage";
import MainDashboard from "@/components/MainDashboard";

export default async function Homepage() {
  const session = await auth();

  return (
    <main className="flex overflow-hidden flex-col justify-between items-center p-24 min-h-screen">
      <div className="z-10 justify-between items-center w-full max-w-5xl lg:flex">
        {session?.user ? <MainDashboard /> : <LandingPage />}
      </div>
    </main>
  );
}
