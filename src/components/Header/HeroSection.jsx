import { useEffect, useState } from "react";
import {img}  from "./index.json"
const HeroSection = () => {
    const urls = Math.round(Math.random()* 2)
    
    return (
        <div className={`bg-cover bg-[url(assets/banner2.jpg)]`}>
            <div className="min-h-[350px] w-full bg-gradient-to-r from-violet-900/80 to-fuchsia-900/70 flex flex-col gap-5 items-center justify-center">
                <h1 className="px-10 font-bold text-4xl capitalize stroke-[#243c5a]">Freshly made pizzas and burgers</h1>
                <div className="backdrop-blur-[2px] mt-5 border rounded-md bg-black/10">
                    <button className="of-btn">Order now</button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection