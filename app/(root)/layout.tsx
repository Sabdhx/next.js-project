import React from 'react'
import Navbar from "../../components/Navbar"

function layout({children} : Readonly <{children : React.ReactNode }>) {
  return (
    <>
    <Navbar/>
    <main className='font-work-sans'>{children}</main>
    </>
  )
}

export default layout