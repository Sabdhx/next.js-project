import { dateFuntionality } from '@/lib/utils'
import React from 'react'

function StartUpCards({post:[]}) {
  return (
    <div>
        <li className='startup-card group'>
            <div className='flex-between'>
                <p className='startup-card-date'>
                    {dateFuntionality(post.createdAt)}
                </p>
            </div>
        </li>
    </div>
  )
}

export default StartUpCards