import React from 'react';

function TicTactoe() {
  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 9 }).map((_, index) => (
          <button
            key={index}
            className="
              w-24 h-24 
              bg-gray-800 text-white text-3xl font-bold 
              flex items-center justify-center 
              rounded 
              hover:bg-gray-700 
              active:bg-gray-600
            "
          >
            X
          </button>
        ))}
      </div>
    </div>
  );
}

export default TicTactoe;
