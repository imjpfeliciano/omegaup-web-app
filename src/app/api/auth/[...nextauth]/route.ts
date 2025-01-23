import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const { OMEGAUP_API_TOKEN: token, NEXTAUTH_URL: LoginEndpoint, NEXTAUTH_SECRET } = process.env;



const options: NextAuthOptions = {
    secret: NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            
            name: 'Credentials',
            credentials: {
            usernameOrEmail: { label: 'Username', type: 'text', placeholder: 'jsmith' },
            password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                const searchParams = new URLSearchParams(credentials);
                // For the moment we are not using the csrfToken
                searchParams.delete('csrfToken');
                console.log({ searchParams });
                
                const omegaupLoginUrl = `${LoginEndpoint}/${searchParams.toString()}`;

                console.log({ omegaupLoginUrl });

                const res = await fetch(omegaupLoginUrl, {
                    headers: {
                        Authorization: `token ${token}`,
                    }
                })

                const user = await res.json();

                if (user) {
                    return user;
                }

                return null;
            }
        }),
    ]
}
    


const handler = NextAuth(options);

export { handler as GET, handler as POST };