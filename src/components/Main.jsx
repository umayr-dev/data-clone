import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'

import about from '../pages/about'

function Main() {
  return (
    <main>
        <Routes>
            <Route path='/' element={<home/>}/>
        </Routes>
    </main>
  )
}

export default Main