import React from 'react'

function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="footer">
                <div className="form">
                    <form className='footer-form'>
                        <h1>Kurs bo‘yicha bepul maslahat oling!</h1>
                        <label>
                            Ism*
                            <input placeholder='Ismingizni kiriting' type="text" />
                        </label>
                        <label>
                            Telefon raqami* 
                            <input type="tel" placeholder='+998' />
                        </label>
                        <label>
                            Kurs tanlash(majburiy emas)
                            <input type="text " placeholder='ozingiz qiziqqan kursni yozing' />
                        </label>
                        <button className="form-btn">Yuborish</button>
                    </form>
                </div>
                <div className="footer-content">
                    <h1>Biz doim aloqadamiz!</h1>
                    <div className="footer-content__info">
                        <div className="map">
                            <h1>Manzil:</h1>
                            <p>Xorazm viloyati, <br /> Urganch shahar,  V.Fayozov 3 uy. <br /> "Darital" savdo markazi 2-qavat</p>
                        </div>
                        <div className="phone">
                            <h1>Telefon</h1>
                            <p>+998-62-227-72-22</p>
                        </div>
                        <div className="time">
                            <h1>Ish vaqti</h1>
                            <p>Du-Shan 09:00 - 22:00</p>
                        </div>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.3573049083075!2d60.605330290437166!3d41.55989092166972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc9d386fdaa47%3A0xaedefecf4c0be911!2sData%20ta&#39;lim%20stansiyasi!5e0!3m2!1sru!2s!4v1727974162242!5m2!1sru!2s" width="920" height="550" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>
                <div className="footer-text">
                    <a href="https://gmail.com/@dataunionuz">dataunionuz@gmail.com</a>
                    <div className="social-content">
                        <a href="https://instagram.com/data_talim_stansiyasi"> <img height={22} width={22} src="/images/insta.webp" alt="" /></a>
                        <a href="https://t.me/data_talim_stansiyasi"><img width={20} height={20} src="/images/tg.webp" alt="" /></a>
                        <a href="https://youtube.com/@DATATALIMSATNSIYASI"><img width={26} height={26} src="/images/yt.webp" alt="" /></a>
                    </div>
                    <p>© DATA ta'lim stansiyasi, 2023</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer