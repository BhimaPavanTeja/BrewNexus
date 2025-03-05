"use client";

import Image from "next/image";
import NavBar from '../components/NavBar/page'
import Footer from '../components/Footer/page'

const About = () => {
  return (
    <div className="aboutPage">
      <NavBar/>
      <div className="flex flex-col items-center text-left px-5 sm:px-20 bg-[#F5E9D7] py-10 min-h-screen">
      <h1 className="text-5xl font-extrabold text-[#4B382A] mb-6">Welcome to BrewNexus</h1>
      <p className="text-xl text-[#4B382A]">
        At <span className="font-semibold">BrewNexus</span>, we don&apos;t just serve coffee—we create experiences. Whether you&apos;re here for a quick espresso or a long conversation over cappuccinos, our space is crafted to bring warmth, comfort, and a sense of community.
      </p>
      <div className="my-8">
        <Image
          src="/assets/coffee/1211.webp"
          alt="Cozy coffee shop interior"
          width={700}
          height={450}
          className="rounded-2xl shadow-xl"
        />
      </div>
      <p className="text-lg text-[#4B382A] ">
        Our ethically sourced beans, expertly trained baristas, and inviting atmosphere ensure that every visit is memorable. Whether you need a productive workspace, a social hub, or just a comforting cup of coffee, BrewNexus is here for you.
      </p>
      
      <div className="mt-8  text-lg text-[#4B382A]">
        <h2 className="text-3xl font-bold text-brown-800 mb-4">Our Story</h2>
        <p>
          BrewNexus was founded with a vision to create a space where coffee lovers, professionals, and creatives can come together. What started as a small café has grown into a beloved community hub, known for its rich flavors, welcoming ambiance, and commitment to sustainability.
        </p>
      </div>
      
      <div className="mt-8  text-lg text-[#4B382A] px-4">
        <h2 className="text-3xl font-bold text-[#4B382A] mb-4">Why Choose Us?</h2>
        <ul className="list-disc text-left mx-auto text-[#4B382A] space-y-2 ">
          <li><span className="font-semibold">Handcrafted Perfection:</span> Every cup is brewed with precision and passion.</li>
          <li><span className="font-semibold">A Space for Everyone:</span> Whether you&apos;re here for work, a casual meet-up, or a peaceful solo moment, BrewNexus welcomes you.</li>
          <li><span className="font-semibold">Sustainable Practices:</span> We take pride in using ethically sourced beans and eco-friendly packaging.</li>
          <li><span className="font-semibold">Beyond Coffee:</span> Our menu includes a variety of fresh pastries, teas, and signature beverages to suit all tastes.</li>
        </ul>
      </div>
      
      <div className="mt-10 flex flex-wrap gap-6 justify-center">
        <a href="/menu"><button  className="bg-[#4B382A] text-[#F5E9D7] cursor-pointer px-8 py-3 rounded-xl text-lg font-semibold hover:bg-[#F5E9D7] hover:text-[#4B382A] border-2 border-[#4B382A] transition-all shadow-lg">
          Explore Our Menu
        </button></a>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default About;