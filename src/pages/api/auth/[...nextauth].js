import { getByEmail, verifyPassword } from "@/services/users";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
session: {
    jwt: true
},
providers: 
    [
        CredentialsProvider({
            async authorize({ email, password }) {
                const user = getByEmail(email);
                if (!user) {
                    throw new Error("User not Found");
                }
                const isValid = await verifyPassword(user.password, password);
                if (!isValid) {
                    throw new Error("Incorrect Password");
                }

                return { email };
            }
        }),
    ],
    // callbacks: {
    //     jwt(params) {
    //         if (params.user?.id) {
    //             params.token.id = params.user.id;
    //             params.token.firstname = params.user.firstname;
    //             params.token.lastname = params.user.lastname;
    //         }

    //         return params.token;
    //     },

    //     session({ session, token }) {
    //         if (session.user) {
    //             session.user.id = token.id;
    //             session.user.firstname = token.firstname;
    //             session.user.lastname = token.lastname;
    //         }

    //         return session;
    //     }
    // },
}
export default NextAuth(authOptions)