import React from 'react';

const Footer = () => {
    return (
        <div className='text-white'>
            <div className='h-full p-5 flex flex-col md:flex-row items-center'>
                <div className="box h-full w-[90%] md:w-[25%] p-2 text-center md:text-left">
                    <div className="header ml-5">
                        <p className='text-[1.5rem] font-bold'>Codemaster ©</p>
                    </div>
                    <div className="content">
                        <p className="text-[0.8rem] text-stone-400 p-5">
                            © {new Date().getFullYear()} Codemaster
                        </p>
                    </div>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className='h-10 w-40 bg-black/50 ml-5 text-stone-300 rounded-xl transition transform duration-200 hover:cursor-pointer hover:bg-black/70 border-0 hover:border-white hover:border text-sm'>
                        Scroll to top
                    </button>
                </div>

                <div className="box h-full w-[90%] md:w-[25%] p-2 text-center md:text-left">
                    <p className='text-lg font-semibold mb-3'>Quick Links</p>
                    <ul className='space-y-1 text-stone-400 text-sm'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/#domains">Domains</a></li>
                        <li><a href="/#skills">Skills</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div className="box h-full w-[90%] md:w-[25%] p-2 text-center md:text-left">
                    <p className='text-lg font-semibold mb-3'>Resources</p>
                    <ul className='space-y-1 text-stone-400 text-sm'>
                        <li><a href="https://developer.mozilla.org/" target="_blank" rel="noreferrer">MDN Docs</a></li>
                        <li><a href="https://roadmap.sh/" target="_blank" rel="noreferrer">Roadmap.sh</a></li>
                        <li><a href="https://www.geeksforgeeks.org/" target="_blank" rel="noreferrer">GeeksforGeeks</a></li>
                        <li><a href="https://www.youtube.com/" target="_blank" rel="noreferrer">YouTube</a></li>
                    </ul>
                </div>

                <div className="box h-full w-[90%] md:w-[25%] p-2 text-center md:text-left">
                    <p className='text-lg font-semibold mb-3'>Connect</p>
                    <ul className='space-y-1 text-stone-400 text-sm'>
                        <li>Email: shivayanchak@gmail.com</li>
                        <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
                        <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
                        <li><a href="/contact">Contact Form</a></li>
                    </ul>
                </div>
            </div>
            <div className="foot h-[5vh] bg-black/20 text-center text-[0.81rem] text-stone-500">
                <p>© {new Date().getFullYear()} Copyright | Codemaster</p>
            </div>
        </div>
    );
};

export default Footer;
