import React from 'react'
import { FaHistory } from 'react-icons/fa'

export default function History() {
  return (
    <div className='absolute top-11 flex flex-row items-center bg-white rounded-lg shadow-lg w-full'>
        <FaHistory/>
        Marilag
        <p className='text-red-400'>Remove</p>
    </div>
  )
}
