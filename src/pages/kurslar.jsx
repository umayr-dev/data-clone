import React from 'react'
import { AllCourses } from '../data'

function Kurslar() {
  return (
    <div className="container">

    <main className='kurs'>
      <h1>Barcha Kurslar</h1>
      <div className="all-courses">
        {
          AllCourses.map((item) =>{
            return <>
            <div key={item.id} className="all-courses__card">
              <img className='all-courses__img' src={item.img} alt="" />
              <div className="card-content">

              <h1>{item.title}</h1>
              <p>{item.subtitle}</p>
              <div className="number">
                <span><b>Kurs narxi:</b> <br /> {item.price} </span>
                <span><b>Davomiyligi:</b> <br /> {item.date} </span>
              </div>
              <button className='all-card__btn'>Batafsil</button>
              </div>
            </div>
            </>
          })
        }
      </div>
    </main>
  </div>
  )
}

export default Kurslar