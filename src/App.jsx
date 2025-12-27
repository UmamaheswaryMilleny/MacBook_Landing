import React from 'react'
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Showcase from "./components/Showcase.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
// here gsap is imported even though not used here because this file settingup gsap globally it is like prepare gsap tools so child components can use them
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// registerplugin is done in app becasue it only run once becasue it is the root of our app and registering plugin once is enough for entire app

const App = () => {
    return (
      <main>
          <Navbar/>
          <Hero/>
          <ProductViewer/>
          <Showcase/>
      </main>
    )
}
export default App
