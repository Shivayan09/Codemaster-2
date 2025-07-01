import React from 'react';

export default function TypingText() {
  return (
    <div className="flex items-center justify-center text-gray-400 text-[1.1rem] md:text-[1.26rem] font-mono">
      <div className="typing-container">
        Click on what you want to learn
      </div>

      <style>{`
        .typing-container {
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid white;
          width: 0;
          animation: typing 2.5s steps(30, end) forwards, blink 0.8s step-end infinite;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink {
          0%, 100% { border-color: transparent }
          50% { border-color: white }
        }
      `}</style>
    </div>
  );
}
