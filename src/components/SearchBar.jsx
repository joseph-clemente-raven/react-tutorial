import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import History from './History'

export default function SearchBar() {

    const [isFocused, setIsFocused] = useState(false)

    return (
        <div className={`border-gray-300 border rounded-full flex items-center  ${isFocused ? 'w-[600px]' : 'w-[300px] md:w-[400px] lg:w-[550px]'} h-[42px] relative`}>
            { isFocused && 
                <div className='h-full pl-4 flex justify-center items-center border-none rounded-l-full'>
                    <BiSearch size={20}/>
                </div>
            }
            
            <input onFocus={() => setIsFocused(true)}  onBlur={() => setIsFocused(false)} type='text' placeholder='Search' className='outline-none border-none px-6 py-2 w-full'/>
            <div className='h-full w-[64px] flex justify-center items-center bg-gray-100 border-none rounded-r-full'>
                <BiSearch size={20}/>
            </div>
            {isFocused && <History/>}
        </div>
    )
}
