import Link from 'next/link';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react'

const Navbar = () => {
  const { data: session } = useSession()
    return (
        <nav className='header'>
        <h1 className='logo'>
          <a href='#'>NextAuth</a>
        </h1>
        <ul className={`main-nav`}>
          <li>
            <Link href='/'>
            
            </Link>
          </li>
          <li>
            <Link href='/dashboard'>
              Dashboard
            </Link>
          </li>
          <li>
            <Link href='/blog'>
              Blog
            </Link>
          </li>
  
        
            <li>
              <Link href='/api/auth/signin'>
               
                  Sign In
                
              </Link>
            </li>
       
         
            <li>
              <Link href='/api/auth/signout'>
               
                  Sign Out
              
              </Link>
            </li>
        
        </ul>
      </nav>
    );
};

export default Navbar;