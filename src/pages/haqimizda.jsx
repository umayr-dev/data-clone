import React from 'react'

function AboutePage() {
  return (
    <main className="about">
      <div className="about-video">
      <iframe className='video' width="1000" height="600" src="https://www.youtube.com/embed/v2w1m5JjrYw?si=gRN-8LCEsqTPEWiZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <div className="about-content">
        <h1>"DATA" bilan yaqindan tanishing!</h1>
        <p>Stansiya haqida ko‘proq ma'lumotlarni ijtimoiy <br /> tarmoqlarimizdan ham olishingiz mumkin.</p>
        <div className="social-content">
          <a href="https://instagram.com/data_talim_stansiyasi"> <img height={20} width={20} src="/images/insta.webp" alt="" /></a>
          <a href="https://t.me/data_talim_stansiyasi"><img width={18} height={18} src="/images/tg.webp" alt="" /></a>
          <a href="https://youtube.com/@DATATALIMSATNSIYASI"><img width={24} height={24} src="/images/yt.webp" alt="" /></a>
        </div>
      </div>
      </div>
    </main>
  )
}

export default AboutePage
