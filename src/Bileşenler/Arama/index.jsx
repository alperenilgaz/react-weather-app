import React,{useState} from 'react'


function Index({sethavaDurumu}) {
  const api  = {
     key : '286a8f4e9479f2f1127bd60d0e986bae',
    base :  'https://api.openweathermap.org/data/2.5/weather'
  } 
  const [araParametre, setAraParametre] = useState("")
  const ara  = (e) =>{
if(e.key === 'Enter'){
  fetch(`${api.base}?q=${araParametre}&units=metric&lang=tr&appid=${api.key}`)
  .then((data)=>data.json())
  .then((Sonuc)=>{
    setAraParametre("")
    sethavaDurumu(Sonuc)
    console.log(Sonuc);
  })
}

  }
  return ( 
    
    <div className='search'>
        <input 
        type="text" 
        className='search-input' 
        placeholder='Ara' 
        onChange={(e)=>{setAraParametre(e.target.value)}}
        value={araParametre}
        onKeyPress={ara}
        />
    </div>
  )
}

export default Index
