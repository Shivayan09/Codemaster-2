import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !message) {
            alert("All fields are required.");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        const serviceId = 'service_4gjpijm';
        const templateId = 'template_5l3lf4q';
        const publicKey = 'mUZwJlSSxa3m4UesN';

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Codemaster',
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                alert('Message sent!');
                console.log('Email sent successfully!', response);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                alert('Failed to send message.');
                console.error('Error sending email:', error);
            });
    };

    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <div className='h-[75vh] w-[30vw] flex flex-col items-center justify-center shadow-xs shadow-stone-600 p-5 rounded-2xl'>
                <div className="header text-center h-[10%] flex items-center justify-center m-2">
                    <p className='text-stone-200 font-bold text-[2rem]'>Contact Us</p>
                </div>
                <div className="main h-[90%] w-[100%]">
                    <form onSubmit={handleSubmit} className="emailForm my-auto flex gap-5 flex-col text-white h-[90%]">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='h-[12%] bg-white/5 p-3'
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='h-[12%] bg-white/5 p-3'
                        />
                        <textarea
                            cols="30"
                            rows="10"
                            placeholder="Your Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className='h-[50%] bg-white/5 p-3'
                        ></textarea>
                        <button type="submit" className='h-[10%] w-[70%] mx-auto border-0 transform transition duration-200 hover:scale-[1.01] hover:bg-indigo-950 hover:border hover:border-white bg-indigo-800 rounded-xl hover:cursor-pointer'>Send Email</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
