import React from 'react'
import Intro from '/illustration-intro.svg'

function HeaderSection(){
    return(
        <section className='m-auto mt-8 header-section flex'>
            <div className='header-section-div1 lg:mt-12 m-auto lg:w-6/12'>
                <h1 className='lg:text-5xl text-center lg:text-left text-4xl font-bold leading-snug'>Bring everyone together to build better products.</h1>
                <p className='leading-normal lg:w-8/12 mt-6 text-base text-center lg:text-justify'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger teams goals in view.</p>
                <button className='mt-8 orange-btn text-center text-white text-sm'>Get Started</button>
            </div>
            <div className=''>
                <img src={Intro}/>
            </div>
        </section>
    )
}

export default HeaderSection;