import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href="/" className='flex items-center space-x-2'>
            <Image src='/logo.svg' alt='nav-logo' width={42} height={42}/>
            <span className='hidden sm:inline-block text-3xl font-extrabold text-gray-600'>epic store</span>
            
        </Link>
    );
};

export default Logo;