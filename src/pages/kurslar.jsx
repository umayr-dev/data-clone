import React from 'react'
import { AllCourses } from '../data'

function Kurslar() {
  return (
    <main className='main'>
      <h1>Barcha Kurslar</h1>
      <div className="all-courses">
        {
          AllCourses.map((item) =>{
            <div key={item.id} className="all-card">
              <img src={item.img} alt="" />
              <h1>{item.title}</h1>
            </div>
          })
        }
      </div>
    </main>
  )
}

export default Kurslar