import React from 'react'
import AboutHero from './components/AboutHero'
import Headder from '../components/Headder'
import DefineUs from './components/DefineUs'
import AboutIquanta from './components/AboutIquanta'
import IquantaJourney from './components/IquantaJourney'
import IquantaPeople from './components/IquantaPeople'
import Founder from './components/Founder'
import Vision from './components/Vision'
import ChooseUs from './components/ChooseUs'
import AppPromo from './components/AppPromo'
import Community from './components/Community'
// import { Footer } from '../components/Footer'
// import ToppersWithJeetsir from '../components/ToppersWithJeetsir'

export default function page() {
  return (
    <div className='bg-white'>
        {/* <Headder /> */}
        <AboutHero />
        <DefineUs />
        <AboutIquanta />
        {/* <IquantaJourney /> */}
        <IquantaPeople />
        <Founder />
        <Vision />
         <AppPromo />
        <ChooseUs />
        <Community />
        {/* <Footer />        */}
    </div>
  )
}
