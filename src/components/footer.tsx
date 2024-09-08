import React from 'react'
import Link from 'next/link'
const Footer = () => {
    return(
            <footer>
                <div className='flex gap-3 p-4 bg-gray-500 text-white textalign:center'>
            <Link href="\">Home Page</Link>
            <Link href="\about">About Us</Link>
            <Link href="\address">Address</Link>
            <Link href="\contact">Contact US</Link>
            </div>
            </footer>
        
    )
}
export default Footer