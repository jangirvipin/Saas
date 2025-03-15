import {NextAuthOptions, Profile} from "next-auth";
import GithubProvider from "next-auth/providers/github";
import prisma from "@/lib/db";
import {JWT} from "next-auth/jwt";

interface ExtendedProfile extends Profile {
    id: string | number;
    login: string;
    name?: string;
    avatar_url?: string;
    email?: string;
}

interface ExtendedToken extends JWT {
    id?: string;
    username?: string;
    name?: string;
}

interface GithubProfile {
    id: number;
    login: string;
    name?: string;
    email?: string;
    avatar_url?: string;
}


export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,

    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID || "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET || "",

            profile(profile: any) {

                return {
                    id: profile.id.toString(),
                    username: profile.login,
                    email: profile.email,
                    image: profile.avatar_url,
                    name: profile.name,
                };
            },
        }),
    ],
    pages: {
        signIn: "/signin",
    },

    callbacks: {
        async signIn({ user, account, profile }) {
            const githubProfile = profile as ExtendedProfile;
            if (!githubProfile || !githubProfile.login) {
                return false;
            }

            const userExists = await prisma.user.findUnique({
                where: {
                    username: githubProfile.login
                }
            });

            if (userExists) {
                return true;
            } else {
                await prisma.user.create({
                    data: {
                        username: githubProfile.login,
                        githubId: githubProfile.id.toString()
                    }
                });
                return true;
            }
        },

        async jwt({ token, user, profile }) {

            const githubProfile = profile as ExtendedProfile | undefined;
            const extendedToken = token as ExtendedToken;

            if (user && githubProfile) {
                extendedToken.id = user.id;
                extendedToken.username = githubProfile.login;
                extendedToken.name = githubProfile.name;
            }
            return extendedToken;
        },

        async session({ session, token }:{session: any, token: any}) {

            const extendedToken = token as ExtendedToken;

            if (session.user ) {
                session.user.id = extendedToken.id;
                session.user.username = extendedToken.username;
                session.user.name = extendedToken.name;
            }
            return session;
        },
        async redirect({ url, baseUrl }) {
            return "/open";
        }
    },
};