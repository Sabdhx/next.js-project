import SearchInput from "@/components/searchInput";
import StartUpCards, { type StartupTypeCard } from "@/components/StartUpCards";
import { Startup_query } from "@/lib/query";
import { client } from "@/sanity/lib/client";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

async function Page({ searchParams }: { searchParams: { query?: string } }) {
 
 
   const {data:posts} = await sanityFetch({query:Startup_query});
    console.log(posts);


  const query = searchParams.query || "";

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup <br />
          Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchInput query={query} />
      </section>
      <section className="section-container">
        <p className="text-30-semibold">
          {query ? "Search Result for " + query : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts?.map((post: StartupTypeCard, index: number) => (
              <div key={post._id} className="">
                <StartUpCards post={post} />
              </div>
            ))
          ) : (
            <p className="no-results">No Startups found</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}

export default Page;
