import { signOut } from "next-auth/react";

const SignOutButton = () => (

    <button
        className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-left"
        onClick={() => signOut()}
    >
        Signout
    </button>

)

export default SignOutButton;