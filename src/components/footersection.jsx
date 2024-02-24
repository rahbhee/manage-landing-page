import React, {useState, useEffect} from 'react';
import Logo from '/logo.svg';
import Face from '/icon-facebook.svg';
import You from '/icon-youtube.svg';
import Bird from '/icon-twitter.svg';
import Pin from '/icon-pinterest.svg';
import Insta from '/icon-youtube.svg';

function getFormData(){
    const storedData  = localStorage.getItem('form');
    if(!storedData) return{
        email: ' '
    }
    return JSON.parse(storedData);
}
function FooterSection(){

    const [formData, setFormData] = useState(getFormData());
    const [errors, setErrors] = useState({})

    const handleFormChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        })

    }

    useEffect(() =>{
        localStorage.setItem('form', JSON.stringify(formData));
    }, [formData])

    const validateForm = () =>{
        const validationErrors = {};
        if(!formData.email.trim()){
            validationErrors.email = 'Please insert a valid email';
        }
        return validationErrors;
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const validationErrors = validateForm()
        if(Object.keys(validationErrors).length === 0){
            
            alert('Email submitted successfully!')
        }else{
            setErrors(validationErrors)
        }
}

function handleChange(e){
    e.preventDefault();
    const {name, value} = e.target
    handleFormChange(name, value)
    console.log('change')
}
    return(
        <section className='footer-section pb-16 pt-16'>
            <div className='w-4/5 m-auto footer-section-flex md:grid lg:grid lg:grid-cols-6 md:grid-cols-3 justify-between'>
            <div className='lg:col-span-2 md:col-span-1'>
                <h1><img className='footer-logo' src={Logo}/></h1>
                <div className='lg:mt-20 md:mt-20 mt-8 m-auto icon flex'>
                    <img src={Face}/>
                    <img src={You} />
                    <img src={Bird}  />
                    <img src={Pin} />
                    <img src={Insta} />
                </div>
                <h1><img className='footer-logo-desktop mt-8 m-auto' src={Logo}/></h1>
                <p className='mt-10 desktop-p m-auto'>Copyright 2023. All Rights Reserved</p>
            </div>
            <div className='m-auto li-div lg:col-span-2 md:col-span-1 flex'>
               <ul className='lg:mr-16 mr-4 sm:mr-8 md:mr:8'>
                <li>Home</li>
                <li>Pricing</li>
                <li>Products</li>
                <li>About Us</li>
               </ul>
               <ul className='lg:ml-16 ml-4 sm:ml-8 md:ml-8'>
                <li>Careers</li>
                <li>Community</li>
                <li>Privacy Policy</li>
               </ul>
            </div>
            <div className='m-auto mb-8 lg:col-span-2 md:col-span-1 lg:ml-8'>
                <form onSubmit={handleSubmit}>
                <div className='flex'>
                    <input value={formData.email} name='email' onChange={handleChange} className='pl-4 lg:w-52 h-10 mr-4 rounded-3xl' placeholder='Updates in your inbox' type="email"/>
                    <button type='submit' className='w-12 text-white text-sm'>Go</button>
                </div>
                {errors.email && <p className='inline-block text-red-500 italic'>{errors.email}</p>}
                </form>
               
                <p className='lg:mt-20 sm:mt-8 footer-p'>Copyright 2023. All Rights Reserved</p>
            </div>
            </div>
        </section>
    )
}

export default FooterSection;