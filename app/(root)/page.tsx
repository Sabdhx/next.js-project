import SearchInput from "@/components/searchInput";
import StartUpCards from "@/components/StartUpCards";
import Image from "next/image";

async function Page({ searchParams }: { searchParams: { query?: string } }) {
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

  const query = searchParams.query || "";
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
