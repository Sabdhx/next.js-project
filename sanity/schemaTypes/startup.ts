import { defineField, defineType } from "sanity";

import { UserIcon } from "lucide-react";

export const startup = defineType({
  name: "startup",
  title: "Startup",
  type: "document",

  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
        name: "slug",
        type: "slug",
        options:{
            source:"title"
          }
      }),
      defineField({
        name: "author",
        type: "reference",
        to : {type:"author"}
      }),
      defineField({
        name: "view",
        type: "number",
      }),
      defineField({
        name: "description",
        type: "text",
      }),
      defineField({
        name: "catagory",
        type: "string",
        validation: (Rule)=>Rule.min(0).max(20).required().error("plzz enter a catargory")
      }),
      defineField({
        name: "image",
        type: "url",
        validation:(Role)=>Role.required()
        
      }),
      defineField({
        name: "pitch",
        type: "markdown",
      
        
      }),
      
  ],
  preview:{
    select:{
        title:"name"
    }
  }
});
