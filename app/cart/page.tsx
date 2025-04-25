"use client";
import { useCart } from "../../context/CartContext";
import NavBar from "../components/NavBar/page";
import Footer from "../components/Footer/page";
import Image from "next/image";
import "./cart.css";

export default function Page() {
  const { cart, removeFromCart } = useCart();

  return (
    <>
      <NavBar />
      <div className="bg-[#eed6b7] min-h-screen py-10 px-5 fonty">
        <h1 className="text-3xl text-center font-bold mb-6">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-center text-xl">Your cart is empty.</p>
        ) : (
          <div className="flex flex-wrap justify-center">
            {cart.map((item, index) => (
              <div
                key={index}
                className="itemCard h-[300px] w-[280px] m-5 shadow-lg"
              >
                <div className="top w-full border-3 h-[50px] border-[#4B382A] bg-[#C49A6C] text-center text-xl pt-3 shadow-lg rounded-t-lg">
                  {item.name} | ₹{item.price}
                </div>
                <div className="middle w-full h-[200px]">
                  <Image
                    src={item.imgSrc}
                    className="object-cover w-full h-full rounded-b-lg"
                    alt={item.name}
                    width={280}
                    height={200}
                  />
                </div>
                <div className="bottom w-full">
                  <button
                    onClick={() => removeFromCart(item.name)}
                    className="w-full cursor-pointer bg-red-600 h-[50px] text-white text-2xl mt-3 rounded-lg"
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="fonty">
        <Footer />
      </div>
    </>
  );
}
