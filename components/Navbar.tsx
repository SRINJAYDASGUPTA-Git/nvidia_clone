import React from "react";
import { IoIosMenu } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { LuUserCircle } from "react-icons/lu";
import Image from "next/image";
import { navLinks, navLinks2 } from "@/constants";
const Navbar = () => {
  return (
    <nav className="w-full shadow-lg flex items-center justify-center ">
      <div className="w-full flex items-center justify-between px-3 lg:max-w-[1320px]">
        <div className="flex gap-3 place-items-center md:hidden ">
          <IoIosMenu size={27} />
          <GoSearch size={20} />
        </div>
        <div className="flex items-center gap-3">
            
          <Image src="/images/NVIDIA.svg" alt="logo" width={120} height={0} />
          <ul className="gap-4 px-2 hidden md:flex">
                {
                    navLinks.map( (link) => (
                        <li key={link.path} className="hover:underline cursor-pointer">{link.title}</li>
                    ))
                }
            </ul>
        </div>
        <div className="flex gap-3 place-items-center">
            <ul className="flex items-center gap-3 mr-4">
            {
                navLinks2.map((link)=>(
                    <li key={link.path} className="hover:underline cursor-pointer hidden md:block">{link.title}</li>
                ))
            }
            </ul>
            
        <GoSearch size={25} className="hidden md:block"/>    
        <LuUserCircle size={27} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
