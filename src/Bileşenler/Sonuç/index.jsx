import React from 'react'
import "../../index.css"
function Sonuc({havaDurumu}) {
  return (
    <>
    {typeof havaDurumu.main !='undefined' &&(
        <div className='sonuc'>
            <div className='sehir'>{havaDurumu.name},{havaDurumu.sys.country}</div>
            <div className='detay'>
            <div className='derece'>{Math.round(havaDurumu.main.temp)} °C </div>
            <div className='statü'>{havaDurumu.weather[0].description}</div>
            <div></div>
            </div>
        </div>
        )}
    </>
  )
}

export default Sonuc