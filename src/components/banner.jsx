import React from "react";

function Bannerdata(){
    return (
        <>
        <div className="container">

        <section className="banner">
            <div className="banner-content">
                <h1>Biz bilimga to‘ldiramiz!</h1>
                <p>10 dan ortiq zamonaviy sohalar bo‘yicha ta'lim oling.</p>
                <button className="banner-context__button">Kurs Tanlash</button>
            </div>
            <div className="banner-image">
                <img src="../public/images/room.webp" alt="banner-image" />
            </div>
        </section>
        </div>
        </>
    )
}

export default Bannerdata