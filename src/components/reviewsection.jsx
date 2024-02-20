import React from 'react';
import Ali from '/avatar-ali.png';
import Anisha from '/avatar-anisha.png';
import Richard from '/avatar-richard.png';
import Shania from '/avatar-shanai.png'

function ReviewSection(){
    return(
        <section className='review-section m-auto mt-16 flex-col text-center items-center'>
            <h1 className='text-3xl m-auto mb-16 font-bold'>What they've said</h1>
            <div className='flex'>
                <div className='review-img-div flex-col text-center items-center'>
                    <img className='relative m-auto' src={Ali}/>
                    <h3>Ali Bravo</h3>
                    <p>"We have been able to cancel so many other subscriptions since using manage. There is no more cross-channel confusion and everyone is much more confused."</p>
                </div>
                <div  className='review-img-div flex-col text-center items-center'>
                    <img className='m-auto' src={Anisha}/>
                    <h3>Anisha Li</h3>
                    <p>"Manage has supercharged our team's workflow. The ability to maintain visibilty on larger milestones at all times, keeping everyone motivated."</p>
                </div>
                <div  className='review-img-div flex-col text-center items-center'>
                    <img className='m-auto' src={Richard}/>
                    <h3>Richard Watts</h3>
                    <p>"Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending to everyone i talk to!"</p>
                </div>
                <div  className='review-img-div flex-col text-center items-center'>
                    <img className='m-auto' src={Shania}/>
                    <h3>Shania Gough</h3>
                    <p>"Their allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in sync without being intrusive."</p>
                </div>
            </div>
            <button className='mt-8 orange-btn text-center text-white text-sm'>Get Started</button>
        </section>
    )
}
export default ReviewSection;