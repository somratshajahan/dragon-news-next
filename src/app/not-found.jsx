import Link from 'next/link';
import React from 'react';

const notFoundPage = () => {
    return (
        <div className='text-5xl items-center justify-center flex-col flex h-[80vh]'>
            <h2 className='text-red-700'>This page is not found</h2>
           <Link href='/'> <button className='btn btn-primary mt-5'>Back to Home</button></Link>
        </div>
    );
};

export default notFoundPage;