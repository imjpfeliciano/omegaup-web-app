import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const { OMEGAUP_API_TOKEN: token, NEXTAUTH_URL: LoginEndpoint, NEXTAUTH_SECRET } = process.env;

const options: NextAuthOptions = {
    // secret: NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
            username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
            password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                return {
                    id: '1',
                    name: 'J Smith',
                    email: credentials?.username,
                }
                // const searchParams = new URLSearchParams(credentials);
                // console.log({ searchParams });
                // const res = await fetch(`${LoginEndpoint}/${searchParams}`, {
                //     headers: {
                //         Authorization: `Token ${token}`,
                //     }
                // })

                // const user = await res.json();

                // if (user) {
                //     return user;
                // }

                // return null;
            }
        }),
    ]
}
    


const handler = NextAuth(options);

export { handler as GET, handler as POST };