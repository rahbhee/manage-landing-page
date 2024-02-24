import React, {useState, useEffect} from 'react';
import Ali from '/avatar-ali.png';
import Anisha from '/avatar-anisha.png';
import Richard from '/avatar-richard.png';
import Shania from '/avatar-shanai.png'

function ReviewSection(){
    const carouselItems = [
        {
          image: Ali,
          name: 'Ali Bravo',
          feedback: 'We have been able to cancel so many other subscriptions since using manage. There is no more cross-channel confusion and everyone is much more confused.',
        },
        {
            image: Anisha,
            name: 'Anisha Li',
            feedback: "Manage has supercharged our team's workflow. The ability to maintain visibilty on larger milestones at all times, keeping everyone motivated.",
        },
        {
            image: Richard,
            name: 'Richard Watts',
            feedback: "Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending to everyone i talk to!"
        },
        {
            image: Shania,
            name: 'Shania Gough',
            feedback: "Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending to everyone i talk to!"
        },
        
        
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () =>{
        console.log("Going to the next slide");
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    };

    const slidePercentage = 100 / carouselItems.length
    useEffect(() => {
        console.log(`Current index: ${currentIndex}`);
        console.log(`Dynamic class: -translate-x-${currentIndex * slidePercentage}%`);
        const intervalId = setInterval(goToNextSlide, 2000);
        return () => clearInterval(intervalId);
      }, [currentIndex]);

    return(
        <section className='review-section m-auto mt-16 flex-col text-center items-center'>
            <h1 className='text-3xl m-auto mb-16 font-bold'>What they've said</h1>
            <div className='logos logos-con overflow-hidden m-auto'>
                <div style={{ transform: `translateX(-${currentIndex * slidePercentage}%)`}} className='logos flex logos-slide'>
                {carouselItems.map((item, index) => (
                <div key={index} className='review-img-div flex-col text-center items-center'>
                    <img className='relative m-auto' src={item.image}/>
                    <h3 className='font-bold m-auto mt-8'>{item.name}</h3>
                    <p>{item.feedback}</p>
                </div>
                ))}
                </div>
            </div>
            <button className='mt-12 orange-btn text-center text-white text-sm'>Get Started</button>
        </section>
    )
}
export default ReviewSection;