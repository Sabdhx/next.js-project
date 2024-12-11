import { defineQuery } from "next-sanity";

export const Startup_query = defineQuery(`
  *[_type == "startup" && defined(slug.current) && ($search == "" || title match $search || catagory match $search || author->name match $search)]
  | order(_createdAt desc) {
    _id,
    title,
    slug,
    _createdAt,
    author->{
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
`);

export const STARTUP_BY_ID_QUERY  = defineQuery(`
  *[_type == "startup" && defined(slug.current)]
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
      views,
      description,
      catagory,
      image,
      pitch
  }

  `);


  export const STARTUP_VIEWS_QUERY = defineQuery(`*[_type == 'startup' && id == $id][0]
    _id , views
    `)

    export const AUTHOR_QUERY = defineQuery(`*[_type == "author" && id == $id][0] {
      _id,
      id,
      username,
      name,
      email,
      image,
      bio
    }`);
    