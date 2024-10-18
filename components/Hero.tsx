import React from 'react'
import Image from 'next/image'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import {ButtonsCard } from './ui/MagicButton'

const Hero = () =>{
     return  (
    
    <div className="flex justify-center relative  my-20 z-10">
    <div className="relative z-10 overflow-hidden p-3">
        <Image
            src={"/veg.webp"}
            alt="vegetable"
            className="flex rounded-md opacity-80 overflow-hidden shadow-lg"
            width={600}
            height={300}></Image >
            
    </div>
    <div className="max-w-[200vw] md:max-w-2xl lg:max-w-[50vw] flex flex-col justify-center item-center">
    <h2 className="uppercase tracking-widest text-xs text-center text-gray-800 max-w-100 dark:text-white">VEGGECART</h2>
          <TextGenerateEffect
          className="text-center mt-44 text-[40px] md:text-5xl lg:text-6xl"
          words="Welcome To VegeCart">
          </TextGenerateEffect>
        <div className="text-center md:tracking-wider my-4 font-extrabold text-sm md:text-lg lg:text-5xl">
           Experience The Online Shopping Experience Now
        </div>
        <div className="ml-11 md:tracking-wider my-4 font-extrabold text-sm md:text-lg lg:text-2xl">
            Organic Product Helthier Tommorrow
        </div>
        <div className="flex justify-center items-center px-6 py-2 ">
        <button className="rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
    <ButtonsCard>Shop Now</ButtonsCard>
</button></div>
    </div>
    
    </div>
)
}
export default Hero