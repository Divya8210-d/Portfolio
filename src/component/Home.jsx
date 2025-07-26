import React from "react";
import Typewriter from "typewriter-effect";
import Navbar from "./Navbar";


function Home() {






  return (
<section className="bg-[#1C1C1E] min-h-screen relative z-20 flex  justify-start">
  <div className="flex flex-col ml-32 mt-20">
    <div className="flex flex-col leading-[140px] ">
      <span className="text-white font-serif font-extrabold text-[140px]  ">
      FULL - STACK
    </span>
     <span className="text-white font-serif font-extrabold text-[140px] ">
  DEVELOPER
    </span>
    </div>
    
    <span className="text-white  text-lg mt-4 max-w-[390px]">
      I craft clean, scalable websites for those who value smart solutions and timely results.
    </span>
     <span className="text-white ">
      <button className="bg-[#5AC8FA] py-1 px-5 rounded-2xl mt-5 text-lg">Resume </button>
    </span>
  </div>
</section>

  );
}

export default Home;
/*<div>
    <p>Welcome to my world!!</p>
   <p>I'm Divyanshu Choubey</p>
   <p className="flex gap-2"> I'm <Typewriter
        options={{
          strings: [
            " A Frontend Developer",
            " A Backend Developer",
            "A Website Designer"
          ],
          autoStart: true,
          loop: true,
          delay: 75, 
          deleteSpeed: 50,
          pauseFor: 1000
        }}
      /></p>
  </div>
  <div> */