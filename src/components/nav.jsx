import { GrAggregate } from 'react-icons/gr';
import { IoCloseOutline } from "react-icons/io5";
import { useState } from 'react';
import '../index.css'; 
import { Link } from 'react-router-dom';


const Nav = () => {
    const [toggle, setToggle] = useState(false);

    function openMenu() {
        setToggle(true);
    }

    function closeMenu() {
        setToggle(false);
    }

    return (
        <>
            <div className="flex items-center justify-between p-10 lg:flex-row text-indigo-300">
                <div>
                    <Link to="/" className="space-x-4 text-black hover-effect font-mono text-2xl tracking-wider flex items-center">
                        Operating Systems
                    </Link>
                </div>
                <div className="space-x-4">
                    <div className='ssm:hidden lg:block space-x-2'>
                        <Link to="/About" className="text-black hover-effect">About</Link>
                        <Link to="/prototypes" className="text-black hover-effect">Prototypes</Link> 
                        <Link to="/contact" className="text-black hover-effect">Contact</Link>
                    </div>
                    <div className='ssm:block lg:hidden'>
                        {toggle ? (
                            <IoCloseOutline onClick={closeMenu} size={40} className='text-black cursor-pointer' />
                        ) : (
                            <IoCloseOutline onClick={openMenu} size={40} className='text-black cursor-pointer' />
                        )}
                    </div>
                </div>
            </div>

            <div className='ssm:block lg:hidden'>
                {toggle ? (
                    <div className='flex justify-between ml-10'>
                        <ul>
                            <li className='text-black text-xl mb-2 cursor-pointer hover-effect'>About</li>
                            <li className='text-black text-xl mb-2 cursor-pointer hover-effect'>Prototypes</li>
                            <li className='text-black text-xl mb-2 cursor-pointer hover-effect'>Contact</li>
                        </ul>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </>
    );
}

export default Nav;