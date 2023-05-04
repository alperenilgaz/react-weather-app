import "../../index.css"
import  yagmurlu from '../../Resimler/rainy.jpg'
function Index() {
  return (
    <div className='arkaplan'>
        <div className='overlay'></div>
        <img className="arkaplan-resim" src={yagmurlu}/>
    </div>
  )
}

export default Index