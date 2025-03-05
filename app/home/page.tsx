"use client";

import { useEffect, useState } from "react";
import NavBar from "../components/NavBar/page";
import Footer from "../components/Footer/page";
import "./home.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
  const [rotation, setRotation] = useState(0);
  const router = useRouter();

  function handleOrderNow() {
    router.push("/menu");
  }

  function handleReserveNow() {
    router.push("/reserve");
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setRotation(scrollY * 0.3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="flex flex-col h-screen z-0">
        <div className="bg-[#4b382a] flex-1">
          <NavBar />
          <div className="fonty text-6xl flex items-center justify-center h-1/2">
            <p className="text-[#f5e9d7]" id="title">
              Sip, Savor, Socialize - Where Every Cup Brews a New Story!
            </p>
          </div>
        </div>
        <div id="btns" className="bg-[#f5e9d7] flex-1 flex items-center justify-center h-1/2 gap-52">
          <button className="fonty z-20 cursor-pointer text-2xl rounded-lg bg-[#4b382a] text-[#f5e9d7] py-2 px-4 mt-10 hover:bg-[#3a2d22] transition duration-300" onClick={handleOrderNow} >
            Order Now
          </button>
          <button className="fonty z-20 cursor-pointer text-2xl rounded-lg bg-[#4b382a] text-[#f5e9d7] py-2 px-4 mt-10 hover:bg-[#3a2d22] transition duration-300" onClick={handleReserveNow} >
            Reserve Now
          </button>
        </div>
      </div>

      {/* Rotating Coffee Cup */}
      <div id="cup"
        className="absolute inset-0 -rotate-51 flex justify-center items-center z-10"
        style={{
          transform: `rotate(-${rotation}deg)`,
          transition: "transform 0.1s linear",
        }}
      >
        <Image
          src="/assets/Cafe Assets/coffee_6.webp"
          alt="coffee cup"
          width={250}
          height={250}
        />
      </div>

      {/* Background Coffee Beans */}
      <div id="grains" className="absolute inset-0 flex justify-center items-center -ml-20 z-10">
        <Image
          src="/assets/Cafe Assets/beans_bg.webp"
          alt="coffee cup"
          width={509}
          height={288}
        />
      </div>

      {/* Special About */}
      <div className="bg-[#EED6B7] flex flex-col items-center justify-center py-10 px-4 md:h-screen">
        <div className="fonty text-4xl text-[#4b382a] text-center">
          <p>What&apos;s Special About Brew Nexus?</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-40 mt-10">
          <div className="bg-white text-[#4b382a] p-6 rounded-lg shadow-lg w-full md:w-80 transform transition duration-300 hover:rotate-0 rotate-0 md:rotate-12">
        <div className="rounded-full bg-[#4b382a] h-3 w-3 mx-auto"></div>
        <Image
          src="/assets/Cafe Assets/coffee-chilling-persons.webp"
          className="my-5"
          width={300}
          height={290}
          alt="coffee meet"
        />
        <p className="fonty text-2xl text-center">
          More Than Coffee - A Place to Connect
        </p>
          </div>
          <div className="bg-white text-[#4b382a] p-6 rounded-lg shadow-lg w-full md:w-80 transform transition duration-300 hover:rotate-0 rotate-0 md:-rotate-12">
        <div className="rounded-full bg-[#4b382a] h-3 w-3 mx-auto"></div>
        <Image
          src="/assets/coffee/sip.webp"
          className="my-5"
          width={300}
          height={290}
          alt="coffee meet"
        />
        <p className="fonty text-2xl text-center">
          A Sip of Perfection, A Taste of Home
        </p>
          </div>
        </div>
      </div>

      {/* Our Offers */}
      <div className="bg-[#f5e9d7] text-[#4b382a] fonti flex flex-col py-10 h-auto md:h-screen">
        <div className="text-4xl flex items-center justify-center">
          <p>Sip, Save, Repeat!</p>
        </div>
        <div className="w-full md:w-1/2 mt-10 text-center md:text-right px-4 md:px-0">
          <p className="text-2xl">Bring a Friend & Save 20%!</p>
          <hr className="border-2" />
          <p className="text-lg">
        Come with a friend and enjoy 20% off your total bill on your first
        visit together.
          </p>
        </div>
        <div className="flex justify-center md:justify-end mt-10 px-4 md:px-0">
          <div className="w-full md:w-1/2 text-center md:text-left">
        <p className="text-2xl font-bold">Corporate Coffee Pass</p>
        <hr className="border-2" />
        <p className="text-lg">
          For just ₹1999/month, get unlimited coffee refills during business
          hours
        </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-10">
          <p className="text-3xl">Why Brew Nexus?</p>
          <div className="flex flex-col md:flex-row justify-between pt-10 w-full px-4 md:px-50 gap-10 md:gap-0">
        <div className="flex flex-col items-center">
            <Image src="/assets/qualitybean.svg" alt="beans" width={100} height={100}  />
            <p className="mt-10 text-xl text-center">Premium Quality Beans</p>
        </div>
        <div className="flex flex-col items-center">
            <Image src="/assets/relax.svg" alt="relax" width={100} height={100}  />
            <p className="mt-10 text-xl text-center">Relaxing Atmosphere</p>
        </div>
        <div className="flex flex-col items-center">
            <Image src="/assets/fastfriendly.svg" alt="fast and friendly" width={100} height={100}  />
            <p className="mt-10 text-xl text-center">Fast & Friendly Service</p>
        </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
