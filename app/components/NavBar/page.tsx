"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./navbar.css";

export default function Page() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="bg-[#4b382a] h-20 flex justify-between px-8 items-center relative">
                <Image src="/icons/dark.svg" alt="logo" width={80} height={80} />
                
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        <Image src="/icons/menu.svg" alt="menu" width={25} height={25} className="cursor-pointer z-60" />
                    </button>
                </div>
                
                <div className="hidden md:flex md:items-center md:space-x-8">
                    <ul className="text-[#f5e9d7] z-50 text-xl flex md:flex-row items-center space-x-8">
                        <li><Link href="/home">Home</Link></li>
                        <li><Link href="/menu">Menu</Link></li>
                        <li><Link href="/reserve">Reserve</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                    </ul>
                    <div className="flex items-center space-x-4 z-50">
                        <Image src="/icons/frame.svg" alt="search" width={27} height={27} className="cursor-pointer" />
                        <Image src="/icons/user.svg" alt="user" width={18} height={21} className="cursor-pointer" />
                        <Link href="/cart">
                            <Image src="/icons/cart.svg" alt="cart" width={22} height={19} className="cursor-pointer" />
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`absolute top-20 left-0 w-full z-50 bg-[#4b382a] shadow-md transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
                <ul className="text-[#f5e9d7] text-xl flex flex-col items-center py-4 space-y-4">
                    <li><Link href="/home" onClick={toggleMenu}>Home</Link></li>
                    <li><Link href="/menu" onClick={toggleMenu}>Menu</Link></li>
                    <li><Link href="/reserve" onClick={toggleMenu}>Reserve</Link></li>
                    <li><Link href="/about" onClick={toggleMenu}>About Us</Link></li>
                </ul>
                <div className="flex justify-center items-center space-x-4 py-4 z-50">
                    <Image src="/icons/frame.svg" alt="search" width={27} height={27} className="cursor-pointer" />
                    <Image src="/icons/user.svg" alt="user" width={18} height={21} className="cursor-pointer" />
                    <Link href="/cart" onClick={toggleMenu}>
                        <Image src="/icons/cart.svg" alt="cart" width={22} height={19} className="cursor-pointer" />
                    </Link>
                </div>
            </div>
        </>
    );
}
