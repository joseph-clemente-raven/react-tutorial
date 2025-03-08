import React from 'react'
import CatCard from './CatCard'

const categories = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G'
]

export default function Category() {
  return (
    <div className='w-full flex flex-col bg-red-500 p-4'>
      <div className='flex flex-wrap w-full gap-4'>
        {
          categories.map(item => {
            return <CatCard item={item}/>
          })
        }
      </div>
    </div>
  )
}
