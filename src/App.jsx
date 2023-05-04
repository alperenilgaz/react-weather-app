import React from "react";
import "./index.css"
import { useState } from "react";
import Index from "./Bileşenler/Arkaplan";
import Arama from "./Bileşenler/Arama";
import Sonuc from "./Bileşenler/Sonuç";


function App() {
  const [havaDurumu, sethavaDurumu] = useState({})

  return (
    <section className="uygulama">
       <Index arkaplan={havaDurumu.weather && havaDurumu.weather[0].main} />
      <div id="baslik">hava durumu</div>
      <Arama sethavaDurumu={sethavaDurumu} />
      <Sonuc havaDurumu={havaDurumu}  />

    </section>
  );
}

export default App;
