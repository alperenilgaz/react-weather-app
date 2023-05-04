import yagmurlu from '../../Resimler/rainy.jpg'
import gunesli from '../../Resimler/sunny.jpg'
import firitinalı from '../../Resimler/storm.png'
import sisli from '../../Resimler/foggy.jpg'
import karli from '../../Resimler/karli.jpg'
import bulutlu from '../../Resimler/cloud.jpg'
import gökkusagi from '../../Resimler/rainbow-weather.jpg'
import React from 'react'

function ResimCek({durum}) {
    switch(durum){
        case "Rain": 
        return <img className='arkaplan-resim' src={yagmurlu}/>
        case "Drizzle": 
        return <img className='arkaplan-resim' src={yagmurlu}/>
        case "Clear": 
        return <img className='arkaplan-resim' src={gunesli}/>
        case "Mist": 
        return <img className='arkaplan-resim' src={sisli}/>
        case "Snow": 
        return <img className='arkaplan-resim' src={karli}/>
        case "Storm": 
        return <img className='arkaplan-resim' src={firitinalı}/>
        case "Clouds": 
        return <img className='arkaplan-resim' src={bulutlu}/>
        default:
            return <img  className='arkaplan-resim' src={gökkusagi}/>
        
    }

}

export default ResimCek