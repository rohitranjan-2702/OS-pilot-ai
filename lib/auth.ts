import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./prisma";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";


export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,

      //   async profile(profile) {
      //     console.log(profile);
      //     try {
      //       const isNewUser = await prisma.user.findUnique({
      //         where: {
      //           email: profile?.email,
      //         },
      //       });

      //       console.log(isNewUser);

      //       if (isNewUser?.email) {
      //         return isNewUser;
      //       } else {
      //         const newSub = await prisma.user.create({
      //           data: {
      //             email: profile?.email,
      //           },
      //         });
      //         console.log(newSub);
      //         return {
      //           id: profile.id,
      //           name: profile.displayName,
      //           email: profile.emails?.[0].value || "",
      //           image: profile.photos?.[0].value || "",
      //         };
      //       }
      //     } catch (error) {
      //       console.log(error);
      //       return {
      //         err: error,
      //         id: profile.id,
      //         name: profile.displayName,
      //         email: profile.emails?.[0].value || "",
      //         image: profile.photos?.[0].value || "",
      //       };
      //     }
      //   },
      //   httpOptions: {
      //     timeout: 30000,
      //   }
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      httpOptions: {
        timeout: 20000,
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          // id: user.id,
          name: user.name,
          ...user,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          name: token.name,
          role: token.role,
        },
      };
    },
  },
};

