import React from 'react'
import Link from 'next/link'
const Header = () => {
    return(
        <div className='flex gap-3 p-4 bg-cyan-500'>
            <Link href="\">Home Page</Link>
            <Link href="\about">About Us</Link>
            <Link href="\address">Address</Link>
            <Link href="\contact">Contact US</Link>
        </div>
    )
}
export default Header