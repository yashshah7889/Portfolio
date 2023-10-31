import React from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const personName=React.useRef();
    const PersonEmail = React.useRef();
    const personMessage = React.useRef();
    const sendEmail = (e)=>{
        e.preventDefault();
        
        emailjs.sendForm('service_wc8ogch','template_7xdjvo1',e.target,'Fs_SASifdlCNGDdY7');
        alert("your message is send");
        personName.current.value  = "";
        PersonEmail.current.value  = "";
        personMessage.current.value  = "";
    }
  return (
    <div name='contact' className='w-full h-screen bg-[#09162a] flex justify-center items-center p-4'>
        <div className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Send me a message</p>
            </div>
            <form className="bg-[#09162a] shadow-md rounded px-8 pt-6 pb-8 mb-4"onSubmit={sendEmail}>
            <input className='bg-[#ccd6f6] p-2 box-border h-11 w-full  ' type="text" placeholder='Name' ref={personName} name='name'  />
            <input className='my-4 p-2 bg-[#ccd6f6] box-border h-11 w-full' type="email" placeholder='Email' ref={PersonEmail} name='email' />
            <textarea className='bg-[#ccd6f6] p-2 box-border w-full' name="message" rows="10" placeholder='Message' ref={personMessage}></textarea>
            <button className='block bg-[#0a192f] text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>
    </div>
  )
}
export default Contact;