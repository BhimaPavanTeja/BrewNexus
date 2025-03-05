"use client";
import Image from "next/image"
import './navbar.css'

export default function page() {
    return (
        <>
        <nav>
        <div className="bg-[#4b382a] h-20 flex justify-between px-8">
            <Image src="/icons/dark.svg" alt="logo" width={80} height={80} />
            <div className="flex space-x-6">
            <ul className="text-[#f5e9d7] flex items-center space-x-8 z-30">
                <li><a href="/home">Home</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/order">Order</a></li>
                <li><a href="/reserve">Reserve</a></li>
                <li><a href="/about">About Us</a></li>
            </ul>
            <div className="flex items-center justify-center space-x-4 z-30">
                <Image src="/icons/frame.svg" alt="search" width={30} height={30} className="cursor-pointer" />
                <Image src="/icons/user.svg" alt="search" width={20} height={24} className="cursor-pointer" />
                <Image src="/icons/cart.svg" alt="search" width={25} height={22} className="cursor-pointer" />
            </div>
            </div>
        </div>
        </nav>
        </>
    )
}