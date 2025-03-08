import React from 'react'
import { FaHome, FaPowerOff } from 'react-icons/fa'
import { FaGear, FaPerson } from 'react-icons/fa6'

export default function Sidebar({active}) {
  return (
    <div className={`flex flex-col px-6 gap-4 py-4 w-full h-full bg-gray-400 ${active ? 'max-w-[300px]': 'max-w-[60px]'}`}>
      <div>
        {
          active ?
          <p>Home</p>
          :
          <FaHome/>
        }
      </div>
      <div>
      {
          active ?
          <p>Person</p>
          :
          <FaPerson/>
        }
      </div>
      <div>
      {
          active ?
          <p>Settings</p>
          :
          <FaGear/>
        }
      </div>
      <hr/>
      <div>
      {
          active ?
          <p>Logout</p>
          :
          <FaPowerOff/>
        }
      </div>
    </div>
  )
}
