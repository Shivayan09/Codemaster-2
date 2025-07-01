import React, { useState } from 'react';

const Modal2 = ({ show, onClose, title, description, roadmap, docsUrl, youtubeId}) => {
  const [activeTab, setActiveTab] = useState('description');

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black/70 p-6 rounded-3xl h-[77vh] w-[70vw] md:w-[50vw] shadow-white shadow-xs">

        <div className="header flex justify-between items-center">
          <div className='text-[1.2rem] text-white font-bold uppercase'>{title}</div>
          <button className='h-10 w-14 bg-gray-700 text-white rounded-[0.7rem] hover:cursor-pointer text-[0.9rem]' onClick={onClose}>Close</button>
        </div>

        <div className="sources p-3">
          <ul className='flex justify-evenly flex-wrap gap-5'>
            {['description', 'roadmap', 'youtube'].map(tab => (
              <li key={tab} className={`text-[1.1rem] md:text-[1.25rem] font-semibold transition transform duration-200 
                hover:cursor-pointer ${activeTab === tab ? 'text-white bg-red-500/90 p-1 rounded-xl' : 'text-white hover:text-red-500'}`} 
                onClick={() => setActiveTab(tab)}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 h-[80%] overflow-y-auto text-[0.95rem] text-gray-400">
          {activeTab === 'description' && (
            <div className='text-[0.8rem] md:text-[1.1rem] text-center md:p-5 leading-5 md:leading-9'>{description}</div>
          )}

          {activeTab === 'youtube' && (
            <div className="flex flex-col items-center rounded-4xl mx-auto w-[80%] gap-4">
              <iframe className="w-full h-40 md:h-64 rounded" src={`https://www.youtube.com/embed/${youtubeId}`} title={`${title} tutorial`} allowFullScreen>
              </iframe>
              <a href={`https://www.youtube.com/watch?v=${youtubeId}`} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-red-500 text-white 
              hover:bg-red-600 transition transform duration-300 hover:cursor-pointer hover:scale-[1.01] rounded-xl border-0 hover:border-1 hover:border-white text-center">
                Watch on YouTube
              </a>
            </div>
          )}
          {activeTab === 'roadmap' && (
            <div>
              <img src={roadmap} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal2;
