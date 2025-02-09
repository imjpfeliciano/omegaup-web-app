"use client";
import Card from "@/components/UI/Card";
import { getCsrfToken } from "next-auth/react";
import { useEffect, useState } from "react";

// interface ProviderBase {
//   id: string;
//   name: string;
// }

export default function Page() {
  // const [providers, setProviders] = useState<Record<string, ProviderBase>>({});
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    // get the csrf token from the provider
    async function loadProviders() {
      // const authProviders = await getProviders();
      // if (authProviders) setProviders(authProviders);

      const csrf = await getCsrfToken();
      setCsrfToken(csrf);
    }
    loadProviders();
  }, []);

  return (
    <div className="max-w-lg mx-auto">


      <Card>
        {/* Email / password login form */}
        <form
          className="flex flex-col gap-4 p-16 rounded-lg self-center"
          method="post"
          action="/api/auth/callback/credentials"
        >
          <input type="hidden" name="csrfToken" value={csrfToken} />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email">
                <span className="font-semibold text-slate-700">Email or user account</span>
                <input
                  className="border shadow-md w-full p-2 text-slate-500 focus:outline-none"
                  name="usernameOrEmail"
                  id="usernameOrEmail"
                />
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">
                <span className="font-semibold text-slate-700">Password</span>
                <input
                  className="border shadow-md w-full p-2 text-slate-500 focus:outline-none"
                  name="password"
                  id="password"
                  type="password"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Login with OmegaUp Credentials"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          />
        </form>

        {/*  (Google, etc.) form - Not supported yet*/}
        {/* {providers &&
        Object.values(providers).map((provider) => (
          <div key={provider.name} className="self-center">
            <button
              onClick={() => signIn(provider.id, { callbackUrl: "/profil" })}
              className={clsx("px-3 py-1 shadow-md", {
                "bg-green-300": provider.name == "Google",
              })}
            >
              <span>Connectez-vous avec {provider.name}</span>
            </button>
          </div>
        ))} */}
      </Card>
    </div>
  );
}
