import React from 'react'
import { BiMicrophone } from 'react-icons/bi'
import SearchBar from './SearchBar'
import { FiMenu } from 'react-icons/fi'
import { BsMenuAppFill } from 'react-icons/bs'

export default function Header({active, setActive}) {
  return (
    <div className='flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center lg:justify-between px-8 pb-4 md:pb-0 bg-yellow-200'>
      {/* left */}
      <div className='flex items-center gap-4'>
        {
          active ?
            <FiMenu onClick={() => setActive(!active)}/>
          :
            <BsMenuAppFill onClick={() => setActive(!active)}/>
        }
        <img src="https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png" alt='logo' className='object-contain h-14'/>
      </div>
      {/* end left */}

      {/* center */}
      <div className='flex items-center flex-none md:flex-1 w-auto md:w-full justify-start md:justify-center gap-4'>
        <SearchBar/>
        <div>
          <BiMicrophone/>
        </div>
      </div>
      {/* center end */}

      {/* right */}
      <div className='flex items-center gap-4'>

      </div>
      {/* right end */}
    </div>
  )
}
