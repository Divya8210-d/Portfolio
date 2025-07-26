import React from "react";
import Particles from '/assets/backgrounds.jsx/Particles/Particles.jsx';
import { Boxes } from "../components/ui/background-boxes";
import {  Project1 } from "./Projects/Project1";
import { Project2 } from "./Projects/Projects2";
import { Project3 } from "./Projects/Projects3";



function Project(params) {






    return(<div className=" bg-[#1C1C1E]  min-h-screen  relative z-20 overflow-hidden">   
    <Boxes/>
    <div className="flex flex-col  justify-center items-center">
           <span className="text-white font-serif text-[50px]  z-50">Featured Projects</span>
           <div className="flex mt-10  gap-7 ml-10">
            <Project1/>
           <Project2/>
           <Project3/></div></div>
 </div>)



    
}




export default Project;