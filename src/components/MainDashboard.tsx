import { auth } from "@/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Main Dashboard",
  description: "Main Dashboard",
}

const MainDashboard = async () => {
  const session = await auth();
  const { user } = session;
  return (
    <div>
      <h1>Main Dashboard</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default MainDashboard;
