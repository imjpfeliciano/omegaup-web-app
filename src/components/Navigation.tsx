import { auth, signIn } from "@/auth";
import Link from "next/link";
import DropdownButton from "./UI/DropdownButton";

const NavItems = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Problemas",
    url: "/problemset",
  },
  {
    name: "Contests",
    url: "/contests",
  },
];

const Navigation = async () => {
  const session = await auth();

  return (
    <nav className="bg-blue-500 w-full">
      <div className="flex flex-row justify-between text-white max-w-screen-2xl mx-auto py-2">
        <h4 className="font-bold underline bg-gray-100 text-black p-2 rounded-full">
          Alpha-Omega
        </h4>

        <ul className="flex flex-row gap-2">
          {NavItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.url}
                className="hover:border p-2 rounded focus:outline-none"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {session?.user ? (
          // <form
          //   action={async () => {
          //     "use server";
          //     await signOut();
          //   }}
          // >
          //   <button
          //     className="hover:border px-2 py-1 rounded focus:outline-none"
          //     type="submit"
          //   >
          //     {session.user.username}
          //   </button>
          // </form>
          <DropdownButton label={session.user.username} profileImageUrl={session.user.image} />
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
