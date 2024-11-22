"use client"

import Link from "next/link";


function ResetQuery() {
    const reset=()=>{
     const form = document.querySelector('.search-form') as HTMLFormElement;
     if(form) form.reset();
    }
  return (
 
    <button
      onClick={reset}
      type="reset"
      className="search-btn text-white flex items-center justify-center"
    >
      <Link href="/" className="flex items-center">
        X
      </Link>
    </button>
  
  )
}

export default ResetQuery