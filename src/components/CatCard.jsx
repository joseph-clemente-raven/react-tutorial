import React from 'react'

export default function CatCard({item}) {
  return (
    <div className='border px-10 py-1 rounded-full'>
        <p>{item}</p>
    </div>
  )
}
