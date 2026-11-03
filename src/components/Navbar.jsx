import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense } from 'react';
import profile from "@/assets/user.png"
import Navlink from './Navlink';

const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto gap-20 mt-4'>
            <div></div>
            <Suspense fallback={<div>Loading...</div>}>
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
         </Suspense>
         <div className='flex items-center gap-2'>
            <Image className='h-[60] w-[60]' src={profile} alt='profile'></Image>
            <button className='btn bg-blue-700 text-white'>
                <Link href={"/login"}>Login</Link>
                </button>
         </div>
        </div>
    );
};

export default Navbar;