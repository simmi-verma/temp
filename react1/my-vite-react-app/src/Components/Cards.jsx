import React from 'react';
import { useState } from 'react';
const Cards = ({ data }) => {
    const [color, setColor] = useState("bg-red-500");
    const [count, setCount] = useState(0);
    function Button(){
        setColor(prevColor=>prevColor==="bg-red-500"?"bg-blue-500":"bg-red-500");
    }
    function handleClick(){
        setCount(count+1);
        }
    return (
        <div className='w-full h-full bg-zinc-200'>
            <div className='w-full h-screen  bg-zinc-200  flex items-center justify-center gap-10 overflow-hidden'>
                {data.map((item, index) => (
                    <div key={index}  className='w-52 bg-zinc-100 rounded-md overflow-hidden'> 
                        <div className='w-full h-32 bg-zinc-300'>
                            <img
                                className="w-full h-full object-cover"
                                src={item.image}
                                alt={item.title}
                            />
                        </div>
                        <div className='w-full px-3 py-4'>
                            <h2>{item.title}</h2>
                            <p className='text-xs mt-5'>{item.description}</p>
                        </div>
                        <div className='w-full flex items-center justify-between px-3 py-4'>
                        <button onClick={Button} className={`${color} item-center text-zinc-100 rounded-full items-center text-xs justify-center py-1 px-2 mx-2`}>
                            {item.instock? "Instock":"Out of stock" }
                        </button>
                        <button onClick={handleClick}>rate:{count}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards;

