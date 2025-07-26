import React from "react";
import { FloatingDock } from "../components/ui/floating-dock";
import {IconBrandInstagram,
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin

 
} from "@tabler/icons-react";

export function Social() {
  const links = [
      {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/divyanshu-choubey-38875a317/",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/div_yan_shu23?igsh=MXZ6bjN0cG9uZTFkYw==",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/Divya18nshu",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Divya8210-d",
    },
  ];
  return (
    <div className="">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-10"
        items={links} />
    </div>
  );
}
