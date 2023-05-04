import React from "react";
import "./index.css"

import Index from "./Bileşenler/Arkaplan";
import Arama from "./Bileşenler/Arama";
import Sonuc from "./Bileşenler/Sonuç";


function App() {
  return (
    <section className="uygulama">
       <Index />
      <div id="baslik">hava durumu</div>
      <Arama />
      <Sonuc />

    </section>
  );
}

export default App;
