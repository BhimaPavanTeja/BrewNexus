"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#4b382a] text-[#f5e9d7] py-6 px-8 fonty overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center z-10">
        {/* Left Section: Logo & Text */}
        <div className="text-center md:text-left mb-4 md:mb-0">
            <Image src="/icons/dark.svg" alt="logo" width={120} height={120} />
          <p className="text-xl opacity-80">Where Every Sip Sparks a Connection!</p>
        </div>

        {/* Right Section: Navigation Links */}
        <div className="flex flex-col text-xl space-y-2 text-right">
          <Link href="/menu" className="cursor-pointer z-30 hover:opacity-75 transition">
            Menu
          </Link>
          <Link href="/order" className="cursor-pointer z-30 hover:opacity-75 transition">
            Order
          </Link>
          <Link href="/reserve" className="cursor-pointer z-30 hover:opacity-75 transition">
            Reserve
          </Link>
          <Link href="/about" className="cursor-pointer z-30 hover:opacity-75 transition">
            About Us
          </Link>
        </div>
      </div>

      {/* Large Background Text (Cut-off Effect) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0 cursor-default">
        <h1 className="text-[13rem] md:text-[16rem] font-bold text-[#f5e9d7] opacity-20 leading-none tracking-wide whitespace-nowrap overflow-hidden">
          BREW NEXUS
        </h1>
      </div>
    </footer>
  );
}
