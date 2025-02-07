import { auth } from "@/auth";

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
