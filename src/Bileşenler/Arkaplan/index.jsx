import "../../index.css"
import ResimCek from "./ResimCek"
function Index({arkaplan}) {
  return (
    <div className='arkaplan'>
        <div className='overlay'></div>
        <ResimCek durum={arkaplan}/>
    </div>
  )
}

export default Index