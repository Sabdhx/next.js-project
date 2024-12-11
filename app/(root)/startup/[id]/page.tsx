import { STARTUP_BY_ID_QUERY } from "@/lib/query";
import { dateFuntionality } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
export const experimental_ppr = true;
import MarkdownIt from "markdown-it";
import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/View";

async function page({ params }: { params: { id: string } }) {
  const { id } = params;
  const fetch = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  if (!fetch || !fetch[0]) return notFound();

  const md = new MarkdownIt(); // Ensure correct initialization of MarkdownIt
  const constant = md.render(fetch[0].pitch || "");
  
  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <p className="tag">{dateFuntionality(fetch[0]._createdAt)}</p>
        <h1 className="heading">{fetch[0].title}</h1>
        <p className="sub-heading !max-w-5xl">{fetch[0].description}</p>
      </section>
      <section className="section_container">
        <img
          src={fetch[0].image}
          alt="thumbnail"
          className="w-full h-auto rounded-xl"
        />
        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <Link
              href={`/user/${fetch[0].author?._id}`}
              className="flex gap-2 items-center mb-3"
            >
              <Image
                src={fetch[0].author.image}
                alt="avatar"
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg"
              />
              <div>
                <p className="text-20-medium">{fetch[0].author.name}</p>
                <p className="text-16-medium !text-black-300">
                  @{fetch[0]?.author?.name}
                </p>
              </div>
            </Link>
            <p className="category-tag">{fetch[0].category}</p>
          </div>
          <h3 className="text-30-bold">Pitch Details</h3>
          {constant ? (
            <article
              className="prose max-w-4xl font-work-sans break-all"
              dangerouslySetInnerHTML={{ __html: constant }}
            />
          ) : (
            <p> there not pitch</p>
          )}
        </div>
        <hr className="divider" />


        <Suspense fallback={<Skeleton className="view_skeleton"/>}>
        <View id={id}/>
       </Suspense>
      </section>
    </>
  );
}

export default page;
