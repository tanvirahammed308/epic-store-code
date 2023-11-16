import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'


const Header = () => {
    return (
        <header className='sticky top-0 bg-white z-10 shadow'>
          
            <div className='container mx-auto p-6 flex justify-between'>
            <Logo/>
          <Link href="/" className='flex items-center space-x-2 text-gray-600 hover:text-gray-900'>
            <div className='relative'>
                <ShoppingCartIcon className='h-7 w-7 flex-shrink-0'/>
                


            </div>
            <p className='text-lg'>
                $00.00<span className='text-sm text-gray-500'>
(0)
                </span>
            </p>
          </Link>
            </div>
        </header>
    );
};

export default Header;