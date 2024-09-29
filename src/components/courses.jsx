import React from "react";
import { Coursesdata } from "../data";

function Courses(){
    return(
        <>
            <div className="container">
                <section className="courses">
                    <h1>Asosiy yo‘nalishlarimiz:</h1>
                    <div className="courses-cards">
                        {
                            Coursesdata.map((item) =>{
                                <div key={item.id} className="card">
                                    <h1>{item.title}</h1>
                                    <p>{item.subtitle}</p>
                                    <button className="card-button">Batafsil</button>
                                </div>
                            })
                        }
                    </div>
                </section>
            </div>

        </>
    )
}

export default Courses;