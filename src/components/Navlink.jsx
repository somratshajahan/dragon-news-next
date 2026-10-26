"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href, children, className}) => {
    const pathName =usePathname();
    const isActive = href === pathName;
    return (
        <Link href={href}className={`${isActive ? "border-b-2 " : ""}${className}`}>
            {children}
        </Link>
    );
};

export default Navlink;