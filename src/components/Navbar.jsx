import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import profile from "@/assets/user.png"
import Navlink from './Navlink';

const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto gap-20 mt-4'>
            <div></div>
         <ul className='flex items-center gap-4 text-gray-600 font-semibold'>
            <li>
                <Navlink href={'/'}>Home</Navlink>
            </li>
            <li>
                <Navlink href={'/about'}>About</Navlink>
            </li>
            <li>
                <Navlink href={'/career'} className={"text-yellow-500"}>Career</Navlink>
            </li>
         </ul>
         <div className='flex items-center gap-2'>
            <Image src={profile} alt='profile'></Image>
            <button className='btn bg-blue-700 text-white'>
                <Link href={"/login"}>Login</Link>
                </button>
         </div>
        </div>
    );
};

export default Navbar;