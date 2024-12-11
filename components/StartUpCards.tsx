import { dateFuntionality } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
<<<<<<< HEAD
import { Author, Startup } from "@/sanity/types";
import { author } from "@/sanity/schemaTypes/author";

export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };

function StartUpCards({ post }: { post: StartupTypeCard }) {
  const { _createdAt, view, author, _id, description, image, catagory, title } =
    post;

  return (
    <div>
      <li className="startup-card group">
        <div className="flex-between">
          <p className="startup-card-date">{dateFuntionality(_createdAt)}</p>
          <div className="flex gap-1.5">
            <EyeIcon className="size-6 text-primary" />
            <span className="text-16-medium">{view}</span>
          </div>
        </div>
        <div className="flex-between mt-5 gap-5">
          <div className="flex-1">
            <Link href={`/user/${author?._id}`}>
              <p className="text-16-medium">{author?.name}</p>
            </Link>
          </div>
        </div>

        <div className="mt-5 flex-between">
          <p className="text-26-semibold line-clamp-1">{title}</p>
          <Link href={`/user/${author?._id}`}>
            <Image
              src={`https://placehold.co/48x48`}
              alt="placeholder"
              width={48}
              height={48}
              className="rounded-full"
            />
          </Link>
        </div>

        <Link href={`/startup/${_id}`}>
          <p className="startup-card_desc">{description}</p>
          <img src={image} alt="placeholder" className="startup-card_img" />
        </Link>
        <div className="flex-between gap-3 mt-5">
          <Link href={`/?query=${catagory?.toLowerCase()}`}>
            <p className="text-16-medium">{catagory}</p>
          </Link>
          <Button className="startup-card_btn" asChild>
            <Link href={`startup/${_id}`}>details</Link>
          </Button>
        </div>
      </li>
    </div>
  );
}

=======

interface Post {
  createdAt: Date;
  view: number;
  author: { _id: number; name: string };
  _id: number;
  description: string;
  image: string;
  catagory: string;
  title: string;
}

function StartUpCards({ post }: { post: Post }) {
  const { createdAt, view, author, _id, description, image, catagory, title } =
    post;

  return (
    <div>
      <li className="startup-card group ">
        <div className="flex-between">
          <p className="startup-card-date">{dateFuntionality(createdAt)}</p>
          <div className="flex gap-1.5">
            <EyeIcon className="size-6 text-primary" />
            <span className="text-16-medium">{view}</span>
          </div>
        </div>
        <div className="flex-between mt-5 gap-5">
          <div className="flex-1">
            <Link href={`/user/${author._id}`}>
              <p className="text-16-medium">{author.name}</p>
            </Link>
          </div>
        </div>

        <div className="mt-5 flex-between">
          <p className="text-26-semibold line-clamp-1">{title}</p>
          <Link href={`/user/${author._id}`}>
          <Image
            src={`https://placehold.co/48x48`}
            alt="placegolder"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
        </div>
       

        <Link href={`/startup/${_id}`} >
        <p className="startup-card_desc">
        {description}
        </p>
        <img src={image} alt="placeholder" className="startup-card_img" />
       </Link>

       <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${catagory.toLowerCase()}`}>
         <p className="text-16-mediuj">
         {catagory}
          </p>
        </Link>

        <Button className="startup-card_btn" asChild>
          <Link href={`startup/${_id}`}>
           details
          </Link>
           </Button>
       </div>
      </li>
    </div>
  );
}

>>>>>>> a461a885a55db84d853d94360b8b2c355672cbd9
export default StartUpCards;
