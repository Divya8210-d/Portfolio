"use client";

import React from "react";
import { CardBody,CardContainer,CardItem } from "../../components/ui/3d-card";
import Game from "../Game.png"
export function Project3() {
  return (
      <CardContainer className="inter-var">
        <CardBody
          className="bg-white/20 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[23rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-white font-serif dark:text-white">
            A Multiplayer Game 
          </CardItem>
        
          <CardItem translateZ="20" className="w-full mt-4">
            <img
              src={Game}
              height="1000"
              width="1000"
              className="h-60 w-full object-fill rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail" />
          </CardItem>
            <CardItem
            as="p"
            translateZ="60"
            className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300">
        
             Build with MERN stack technologies this app provides a wide range of features like real-time matach-making of players and world leaderboard.
          </CardItem>
          <div className="flex gap-5 mt-14">
            <CardItem
              translateZ={20}
              as="a"
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-5 py-2 rounded-xl bg-blue-500 text-white text-xs font-normal dark:text-white">
              Demo
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-5 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
              Code
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
  );
}
