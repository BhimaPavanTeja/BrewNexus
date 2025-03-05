"use client";
import Image from "next/image";
import { useCart } from "../../context/CartContext";

type Props = {
  name: string;
  price: number;
  imgSrc: string;
};

export default function Card({ name, price, imgSrc }: Props) {
  const { addToCart } = useCart();

  return (
    <div className="itemCard h-[300px] w-[280px] m-5 shadow-lg">
      <div className="top w-full border-3 h-[50px] border-[#4B382A] bg-[#C49A6C] text-center text-xl pt-3 shadow-lg">
        {name} | ₹{price}
      </div>
      <div className="middle w-full h-[200px]">
        <Image
          src={imgSrc}
          className="object-cover w-full h-full"
          alt={name}
          width={280}
          height={200}
        />
      </div>
      <div className="bottom w-full">
        <button
          onClick={() => { 
            addToCart({ name, price, imgSrc }); 
            alert("Item added to cart!"); 
          }}
          className="w-full cursor-pointer bg-[#4B382A] h-[50px] text-[#F5E9D7] text-2xl mt-3"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
