"use client";
import clsx from "clsx";
import { getCsrfToken, getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

interface ProviderBase {
  id: string;
  name: string;
}

export default function Page() {
  const [providers, setProviders] = useState<Record<string, ProviderBase>>({});
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    // get the csrf token from the provider
    async function loadProviders() {
      const authProviders = await getProviders();
      if (authProviders) setProviders(authProviders);

      const csrf = await getCsrfToken();
      setCsrfToken(csrf);
    }
    loadProviders();
  }, []);

  return (
    <div className="flex flex-col lg:gap-4">
      {/* Email / password login form */}
      <form
        className="flex flex-col bg-amber-50 p-16 rounded-lg gap-4 self-center"
        method="post"
        action="/api/auth/callback/credentials"
      >
        <input type="hidden" name="csrfToken" value={csrfToken} />
        <div className="flex flex-col lg:max-w-[75%]">
          <div className="flex flex-col">
            <label htmlFor="email">
              Email
              <input
                className="border shadow-md"
                name="usernameOrEmail"
                id="usernameOrEmail"
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">
              Password
              <input
                className="border shadow-md"
                name="password"
                id="password"
                type="password"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Login"
          className="bg-red-500 cursor-pointer px-3 py-1 rounded-lg font-semibold text-white"
        />
      </form>

      {/*  (Google, etc.) form */}
      {providers &&
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
        ))}
    </div>
  );
}
