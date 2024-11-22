import React, { useState } from 'react'

const ColorChanger = () => {
   const [color, setColor]=useState('bg-green-400')
   const [headingColor, setHeadingColor]=useState('text-black')
    const [optiongbColor, setoptiongbColor]=useState('')
 
    return (
      <>
            <h1 className={`text-3xl pt-5 font-bold text-center ${headingColor} ${color}` }>BackGround Changer</h1>
      <div
        className={`${color} h-screen flex  flex-wrap justify-center items-end pb-10`}
      >
  
    <div className={`flex flex-wrap gap-3  bg-black ${optiongbColor} text-white p-10 rounded-lg m-5   `}>
          <button
            className="bg-red-400 p-10 rounded-full "
            onClick={() => {
              setColor("bg-red-400");
             
            }}
          > Red</button>
            <button
            className="bg-blue-400 p-10 rounded-full "
            onClick={() => {
              setColor("bg-blue-400");
            
            }}
          > Blue</button>
            <button
            className="bg-pink-400 p-10 rounded-full "
            onClick={() => {
              setColor("bg-pink-400");
             
            }}
          > Pink</button>
  
            <button
            className="bg-yellow-500 p-10 rounded-full "
            onClick={() => {
              setColor("bg-yellow-500");
           
            }}
          > yellow</button>
          
          
  
  <button
            className="bg-indigo-400 p-10 rounded-full "
            onClick={() => {
              setColor("bg-indigo-400");
           
            }}
          > Indigo</button>

          <button
            className="bg-white text-black p-10 rounded-full "
            onClick={() => {
              setColor("bg-white");
              setHeadingColor('text-black')
           
            }}
          > White</button>

            <button
            className="bg-black text-white p-10 rounded-full border-2 border-white"
            onClick={() => {
              setColor("bg-black");
              setHeadingColor('text-white')
          
            }}
          > Black</button>
        
        </div>
      </div>
      </>
    );
  };

export default ColorChanger