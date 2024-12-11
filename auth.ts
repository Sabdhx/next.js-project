import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { client } from "./sanity/lib/client";
import { writeClient } from "./lib/write-client";
import { AUTHOR_QUERY } from "./lib/query";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID ,
      clientSecret: process.env.GITHUB_SECRET ,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        const existingData = await client.withConfig({useCdn:false}).fetch(AUTHOR_QUERY, { id: profile?.id });
        if(!existingData){
          await writeClient.create({
            _type:"author",
            id:profile?.id,
            name:user?.name,
            username:profile?.login,
            email:user?.email,
            image:user?.image,
            bio:profile?.bio || ""
          });
        }
        return true;
      } catch (error) {
        console.error('Error in signIn callback:', error);
        return false; // Reject the sign-in attempt
      }
    },
    async jwt({token, account, profile}) {
      try {
        if (account && profile) {
          const user = await client.withConfig({useCdn:false}).fetch(AUTHOR_QUERY, {id:profile?.id});
          if (user) {
            token.id = user?._id;
          }
        }
        return token;
      } catch (error) {
        console.error('Error in jwt callback:', error);
        return token; // Continue with the original token in case of error
      }
    },
    async session({session, token}) {
      try {
        Object.assign(session, {id: token.id});
        return session;
      } catch (error) {
        console.error('Error in session callback:', error);
        return session; // Return the session as-is in case of error
      }
    }
  },
});
