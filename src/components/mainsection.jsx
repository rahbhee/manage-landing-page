import React from 'react';

function MainSection(){
    return(
        <section className='main-section m-auto flex'>
            <div className='mt-8 m-auto lg:w-1/2'>
                <h1 className='text-3xl lg:w-4/5 font-bold mb-6'>What's different about Manage?</h1>
                <p className='lg:w-3/5'>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
            </div>
            <div className='lg:w-1/2'>
                <div className='grid lg:gap-4 mt-8 grid-cols-7 lg:auto-cols-auto'>
                        <h3 className='lg:col-start-1 mb-2 sm:col-span-1 text-xl font-medium'>01</h3>
                        <h4 className='col-start-2 lg:col-start-2 col-span-7 font-medium'>Track company-wide progress</h4>
                        <p className='lg:col-start-2 md:col-start-1 sm:col-start-1 col-span-7'>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
                </div>
                <div className='grid lg:gap-4 mt-8 grid-cols-7 lg:auto-cols-auto'>
                        <h3  className='lg:col-start-1 mb-2 sm:col-span-1 text-xl font-medium'>02</h3>
                        <h4  className='col-start-2 lg:col-start-2 col-span-7 font-medium'>Advanced built-in reports</h4>
                        <p  className='lg:col-start-2 md:col-start-1 sm:col-start-1 col-span-7'>Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
                </div>
                <div className='grid lg:gap-4 mt-8 grid-cols-7 lg:auto-cols-auto'>
                        <h3 className='lg:col-start-1 mb-2 sm:col-span-1 text-xl font-medium' >03</h3>
                        <h4 className='col-start-2 lg:col-start-2 col-span-7 font-medium'>Everything you need in one place</h4>
                        <p className='lg:col-start-2 md:col-start-1 sm:col-start-1 col-span-7'>Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
                </div>
            </div>
        </section>
    )
}

export default MainSection;