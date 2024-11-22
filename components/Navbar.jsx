import { auth, signIn, signOut } from "@/auth";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const session = await auth();
  console.log(session)
  return (
    <div className="px-5 py-3 bg-white shadow-sm font-work-sans text-black">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <img src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        <div className="flex item-center gap-5">
          {session && session?.user ? (
            <>
            <Link href={"/startup/create"}>create</Link>
            <form action={async()=>{
              "use server"
              await signOut({options:{redirectTo :"/"}});
            }}>
              <button type="submit">logout</button>
            </form>
            <Link href={`/user/${session?.id}`}>
            <span>{session?.user?.name}</span>
            </Link>
            </>
          ) : (
            <>
              <form action={async ()=>{
                  "use server";
                 await signIn({provider:'github'});
              }}>
                <button type="onsubmit">login</button>
              </form>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
