import { auth } from "@/auth";
import SearchInput from "@/components/searchInput";
import StartUpCards, { type StartupTypeCard } from "@/components/StartUpCards";
import { Startup_query } from "@/lib/query";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

async function Page({ searchParams }: { searchParams: { query?: string } }) {
<<<<<<< HEAD
  const query =  searchParams?.query || "";

  // console.log("Search Query:", query);

  const session = await auth();

  const { data: posts } = await sanityFetch({
    query: Startup_query,
    params: { search: query },
  });
 
  console.log("this is the session id "+session?.id)

  console.log("Posts Data:", posts);
=======
  const posts = [
    {
      createdAt: new Date(),
      view: 33,
      author: { _id: 1 , name:"Ali Abdullah" },
      _id: 1,
      description: "this is the first",
      image: "https://th.bing.com/th/id/OIP.caMRc0eUe95wbXtWsvyuaQHaFj?rs=1&pid=ImgDetMain",
      catagory: "halwai",
      title: "the first post",
    },
  ];
>>>>>>> a461a885a55db84d853d94360b8b2c355672cbd9

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
<<<<<<< HEAD
            posts.map((post: StartupTypeCard) => (
              <div key={post._id}>
                <StartUpCards post={post} />
              </div>
            ))
=======
            <>
              {posts.map((post, index: Number) => (
                <div className="">
               <StartUpCards post={post} />
                </div>
              ))}
            </>
>>>>>>> a461a885a55db84d853d94360b8b2c355672cbd9
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
