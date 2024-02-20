import React, {useState} from 'react';
import Ham from '/icon-hamburger.svg';
import Cancel from '/icon-close.svg';

function Hamburger() {

    const [navOpen, setNavOpen] = useState(false)

    const handleHamburger = () =>{
        setNavOpen(!navOpen)
    }

    return(
        <div onClick={handleHamburger}>
            {navOpen ? <img src={Cancel}/> :  <img src={Ham}/>}
           {navOpen ? <div className='mobile-nav'>
            <ul className='flex-col text-center'>
                <li>Pricing</li>
                <li>Product</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Community</li>
            </ul>
        </div> : ''} 
        </div> 
    )
}

export default Hamburger;