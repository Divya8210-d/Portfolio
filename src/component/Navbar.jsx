import React, { useState } from "react";
import "./navbar.css";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <div className="bg-[#1C1C1E] text-white p-5 relative z-10 flex gap-[410px] pl-64 pt-10  border-b-2 border-[#E5E5E7]"
  ><div>     <ul className="flex gap-8">
      <li className="border border-white py-1 px-5 rounded-2xl hover:bg-[#5AC8FA]">Home</li>
      <li className="border border-white py-1 px-5 rounded-2xl hover:bg-[#5AC8FA]">About </li>
      <li className="border border-white py-1 px-5 rounded-2xl hover:bg-[#5AC8FA]">Skills</li>
      <li className="border border-white py-1 px-5 rounded-2xl hover:bg-[#5AC8FA]">Projects</li>
      <li className="border border-white py-1 px-5 rounded-2xl hover:bg-[#5AC8FA]">Contact</li>
     </ul>
</div>
  <div className="text-white font-serif text-xl">Divyanshu Choubey </div>
  </div>
  );
}

