import React, {useState, useEffect} from 'react';
import Logo from '/logo.svg';
import Hamburger from './hamburger';

function Header(){

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    useEffect(()=>{
        const handleResize = () =>{
            setWindowWidth(window.innerWidth)
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return(
        <nav className='m-auto items-center flex justify-between'>
            <img src={Logo}/>
            {windowWidth <=768 ? <Hamburger/> :
            <>
             <div className='flex text-sm items-center justify-between'>
                <p className='ml-4 mr-4'>Pricing</p>
                <p className='ml-4 mr-4'>Product</p>
                <p className='ml-4 mr-4'>About Us</p>
                <p className='ml-4 mr-4'>Careers</p>
                <p className='ml-4 mr-4'>Community</p>
            </div>
            <button className='text-white text-sm'>Get Started</button>
            </>}
        </nav>
    )
}

export default Header;