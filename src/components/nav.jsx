
import { GrAggregate } from 'react-icons/gr';
import { IoCloseOutline } from "react-icons/io5";

import { useState } from 'react';


const nav = () => {


const [toggle, setToggle] = useState(false);

function openMenu() {
    setToggle(true);
}

function closeMenu() {
    setToggle(false);
}
    return (
        <>
        <div class = "flex items-center justify-between p-10 lg:flex-row text-indigo-300">
            <div>
                <a href="#" className="space-x-4 text-white font-mono text-2xl tracking-wider flex items-center"> Operating Systems </a>

            </div>
            <div className="space-x-4">
                <div className = 'ssm:hidden lg:block space-x-2'>
                <a href='#' className="text-white hover:text-black hover:bold">About</a>
                <a href='#' className="text-white hover:text-black hover:bold"> Prototypes</a>
                <a href='#' className="text-white hover:text-black hover:bold" >Contact</a>
                </div>
                <div className='ssm:block lg:hidden'>
                    {toggle ? (
                    <IoCloseOutline onClick={closeMenu}size={40} className='text-white cursor-pointer'/>
                    ):(                <IoCloseOutline onClick={openMenu} size={40} className='text-white'/>)
                }

                </div>
            </div>
        </div>

        <div className='ssm:block lg:hidden'>
            {toggle ?(

            <div className='flex justify-between    ml-10'>
            <ul>
                <li className='text-white text-xl mb-2 cursor-pointer'>About</li>
                <li className='text-white text-xl mb-2 cursor-pointer'>Prototypes</li>
                <li className='text-white text-xl mb-2 cursor-pointer'>Contact</li>
            </ul> 
            </div>

            ):(
                <div></div>

            )}

        </div>
        </>
    )
}

export default nav