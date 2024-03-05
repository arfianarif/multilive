/* eslint-disable no-unused-vars */
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Fragment, useEffect } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import useScroll from './hooks/useScroll';
import Benefits from './components/benefits';
import About from './components/about';
import SupportedPlatform from './components/supported-platform';
import Pricing from './components/pricing';
import FAQ from './components/faq';
import Footer from './components/footer';

AOS.init()

function App() {
  const {scroll} = useScroll()

  useEffect(() => {
    const el = document.getElementById(scroll)
    if(el){
      return el.scrollIntoView({
        behavior: 'smooth',
        block: "start"
      })
    }
  }, [scroll])

  return (
    <Fragment>
      <Header />
      <Hero />
      <About />
      <Benefits />
      <SupportedPlatform />
      <Pricing />
      <FAQ />
      <Footer />
    </Fragment>
  )
}

export default App
