import { defineQuery } from "next-sanity";

export const Startup_query=defineQuery(`
    *[_type == "startup" && defined(slug.current)] | order(_createdAt desc)
  {
    _id,
      title,
      
  slug,
      createdAt,
      author
      ->{
        _id,
        name,
        image,
        bio
      },
      view,
      description,
      catagory,
      image
  }

    `)