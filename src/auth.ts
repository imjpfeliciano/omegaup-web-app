import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const { OMEGAUP_API_TOKEN } = process.env;

const providers = [
  Credentials({
    credentials: {
      password: { label: "Password", type: "password" },
      usernameOrEmail: { label: "Username", type: "text" },
    },
    async authorize(credentials) {
        console.log({ credentials })
      return {
        id: "1",
        name: "Fill Murray",
        email: "fill@murray.com",
        image: "https://source.boringavatars.com/marble/120",
      };
    },
  }),
];

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: process.env.NODE_ENV !== "production" ? true : false,
  providers,
  callbacks: {
    async signIn({ user, account, profile, credentials }) {
        console.log({ user, account, profile, credentials })
        const queryParams = new URLSearchParams({
          usernameOrEmail: credentials.usernameOrEmail,
          password: credentials.password,
      }).toString();
        const loginEndpoint = `https://omegaup.com/api/user/login/?${queryParams}`;



        const res = await fetch(loginEndpoint, {
          headers: {
            Authorization: `token ${OMEGAUP_API_TOKEN}`,
          },
        });

        const data = await res.json();

        console.log({ data });
        if (res.ok && data.status === "ok") {
            return true;
        }

        return false;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
});
