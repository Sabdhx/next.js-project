import SearchInput from "@/components/searchInput";
import StartUpCards from "@/components/StartUpCards";
import { Startup_query } from "@/lib/query";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

async function Page({ searchParams }: { searchParams: { query?: string } }) {
  const posts =await client.fetch(Startup_query)
console.log(posts)

  const query =  searchParams.query || "";

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup <br />
          Connect with Enterprenuer
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtauls
          Competitions
        </p>
        <SearchInput query={query} />
      </section>
      <section className="section-container">
        <p className="text-30-semibold">
          {query ? "search Result for " + query : "All statups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            <>
              {posts.map((post, index: Number) => (
                <div className="">
               <StartUpCards post={post} />
                </div>
              ))}
            </>
          ) : (
            <>
              <p className="no-results ">No Startups found</p>
            </>
          )}
        </ul>
      </section>
    </>
  );
}
export default Page;
