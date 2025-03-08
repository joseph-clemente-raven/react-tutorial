import React, { Suspense } from 'react'
import { Routes } from 'react-router-dom'
import { routeConfig } from './constant/routes'

export default function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routeConfig}
      </Routes>
    </Suspense>
  )
}
