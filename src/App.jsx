import { useState } from 'react'
import Header from './components/header'
import HeaderSection from './components/headersection'
import MainSection from './components/mainsection'
import './App.css'
import ReviewSection from './components/reviewsection'
import SimplifySection from './components/simplify'
import FooterSection from './components/footersection'

function App() {

  return (
    <>
     <main className='mt-6 w-4/5 m-auto'>
      <Header/>
      <HeaderSection/>
      <MainSection/>
      <ReviewSection/>
    </main>
    <section>
       <SimplifySection/>
       <FooterSection/>
    </section>
    </>
  )
}

export default App;
