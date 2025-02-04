import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";

const Navigation = async () => {
  const session = await auth();

  return (
    <nav className="bg-blue-500 w-full">
      <div className="flex flex-row justify-between text-white max-w-screen-2xl mx-auto py-2">
        <h4 className="font-bold underline bg-gray-100 text-black p-2 rounded-full">
          Alpha-Omega
        </h4>

        <ul className="flex flex-row gap-2">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/problemset">Problemas</Link>
          </li>
        </ul>
        {session?.user ? (
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button
              className="hover:border px-2 py-1 rounded focus:outline-none"
              type="submit"
            >
              Sign Out
            </button>
          </form>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn();
            }}
          >
            <button
              className="hover:border px-2 py-1 rounded focus:outline-none"
              type="submit"
            >
              Signin
            </button>
          </form>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
