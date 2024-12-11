import React from 'react'
import Ping from './Ping'
import { STARTUP_VIEWS_QUERY } from '@/lib/query'
import { client } from '@/sanity/lib/client'
import { writeClient } from '@/lib/write-client'
import { unstable_after as after } from 'next/server'

async function View({id}:{id:string}) {
    console.log(id)
   const {views : totalViews} = await client.withConfig({useCdn:false}).fetch( STARTUP_VIEWS_QUERY,{id})

  after(async()=>
    await writeClient
  .patch(id)
  .set({views : totalViews+1})
  .commit()
  ) 

   
  return (
    <div className='view-container'>
        <div className='absolute -top-2 -right-2'>

        <Ping/>
        </div>
      <p className='view-text'>
        <span className='font-black'>{totalViews} view</span>
      </p>
    </div>

  )
}

export default View