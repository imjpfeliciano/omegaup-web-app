import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const { OMEGAUP_API_TOKEN } = process.env;

const providers = [
  Credentials({
    credentials: {
      password: { label: "Password", type: "password" },
      usernameOrEmail: { label: "Username", type: "text" },
    },
    // eslint-disable-next-line
    // @ts-ignore
    async authorize(credentials) {
      const profileEndpoint = `https://omegaup.com/api/user/profile/?username=${credentials.usernameOrEmail}`;
      // console.log({ credentials, profileEndpoint });

      const res = await fetch(profileEndpoint, {
        headers: {
          Authorization: `token ${OMEGAUP_API_TOKEN}`,
        },
      });

      const data = await res.json();

      if (res.ok && data.status === "ok") {
        return {
          username: credentials.usernameOrEmail,
          name: data.name,
          email: data.email,
          image: data.gravatar_92,
          rankinfo: data.rankinfo,
          id: data.id,
        };
      }

      return null;
    },
  }),
];

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: process.env.NODE_ENV !== "production" ? true : false,
  providers,
  callbacks: {
    async signIn({ credentials }) {
      // console.log({ user, account, profile, credentials });
      const queryParams = new URLSearchParams({
        usernameOrEmail: credentials?.usernameOrEmail as string,
        password: credentials?.password as string,
      }).toString();
      const loginEndpoint = `https://omegaup.com/api/user/login/?${queryParams}`;

      const res = await fetch(loginEndpoint, {
        headers: {
          Authorization: `token ${OMEGAUP_API_TOKEN}`,
        },
      });

      const data = await res.json();

      if (res.ok && data.status === "ok") {
        return true;
      }

      return false;
    },
    async session({ session, token }) {
      if (token) {
        // console.log("Auth token", token);
        session.user = {
          ...session.user,
          username: token.username as string,
          rankinfo: token.rankinfo as ProfileRankInfo,
        };
      }

      return session;
    },
    async jwt({ token, user }) {
      // console.log({ token, user });
      if (user) {
        token.username = user.username;
        token.rankinfo = user.rankinfo;
      }
      return token;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
});
