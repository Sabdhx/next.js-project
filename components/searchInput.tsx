import React from "react";
import  Form  from "next/form";  // Correct import for the `Form` component from `next/form`
import Link from "next/link";  // Correct import for the `Link` component

// Assuming ResetQuery will handle resetting the form.
import ResetQuery from "./ResetQuery";
import { Search } from "lucide-react";
import { Button } from "./ui/button";

function SearchInput({ query }: { query?: string }) {
  return (
    <Form action="/"  className="search-form" scroll={false}>
      <input
        name="query" // Name to bind the input field for form submission
        defaultValue={query}
        className="search-input"
        placeholder="Search Startup"
      />
      <div className="flex gap-2">
        {query && <ResetQuery />}
        <Button type="submit" className="search-btn text-white">
         <Search className="size-5"/>
        </Button>
      </div>
    </Form>
  );
}

export default SearchInput;
