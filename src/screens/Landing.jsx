import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Category from '../components/Category';
import Card from '../components/Card';

export default function Landing() {

  const [active, setActive] = useState(false)

  return (
    <div className='w-full flex flex-col min-h-screen'>
        <Header active={active} setActive={setActive}/>
        <div className='flex flex-row bg-green-500 w-full flex-1 h-full'>
            <Sidebar active={active}/>
            <div className='flex flex-col flex-1 overflow-x-auto'>
              <div className='flex flex-col'>
                <Category/>
              </div>
              <Card/>
            </div>
        </div>
    </div>
  )
};
