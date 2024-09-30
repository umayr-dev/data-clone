import React from "react";
import { Advantagedata } from "../data";

function Advantage(){
    return(
        <>
        <div className="container">
            <section className="advantage">
                <h1 className="advantage-title">Afzalliklarimiz:</h1>
                <div className="advantage-cards">
                {
                    Advantagedata.map((item) =>{
                        return(
                            <div key={item.id} className="advantage-card">
                                <h1>{item.title}</h1>
                                <p>{item.subtitle}</p>
                            </div>
                        )
                    })
                }
                </div>
            </section>
        </div>
        </>
    )
}

export default Advantage