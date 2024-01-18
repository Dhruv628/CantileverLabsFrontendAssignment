"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Home from "@/public/assets/Home";
import Logout from "@/public/assets/Logout";
import Message from "@/public/assets/Message";
import Notification from "@/public/assets/Notification";
import Routing from "@/public/assets/Routing";
import Setting from "@/public/assets/Setting";
import GraphIcon from "@/public/assets/Graph";
import Store from "@/public/assets/Store";
import LinkHoverPattern from "@/public/assets/LinkHoverPattern";

const Sidebar = () => {
  const pathname = usePathname();
  const [fillIndex, setFillIndex] = useState(null);

  const Links = [
    { href: "#", icon: <Home height={20} width={20} fill={fillIndex === 0 ? "white" : "#EA7C69"} /> },
    { href: "/components/Delivery", icon: <Routing height={20} width={20} fill={(fillIndex === 1 || pathname === "/components/Delivery") ? "white" : "#EA7C69"} /> },
    { href: "/components/Dashboard", icon: <GraphIcon height={20} width={20} fill={(fillIndex === 2 || pathname === "/components/Dashboard") ? "white" : "#EA7C69"} /> },
    { href: "#", icon: <Message height={20} width={20} fill={fillIndex === 3 ? "white" : "#EA7C69"} /> },
    { href: "#", icon: <Notification height={20} width={20} fill={fillIndex === 4 ? "white" : "#EA7C69"} /> },
    { href: "#", icon: <Setting height={20} width={20} fill={fillIndex === 5 ? "white" : "#EA7C69"} /> },
    { href: "#", icon: <Logout height={20} width={20} fill={fillIndex === 6 ? "white" : "#EA7C69"} /> },
  ];

  const onHover = (index:any) => setFillIndex(index);

  return (
    <div className="bg-secondary pl-6 pr-3 py-6 text-white flex items-center justify-between flex-col h-full rounded-r-xl">
      <div className="p-2 mb-2 rounded-xl bg-[#EA9769] bg-opacity-30">
        <Store height={40} width={40} />
      </div>
      {Links.map((e, index) => (
        <Link
          key={index + 101}
          className={`relative  w-full flex justify-center items-center  `}
          href={e.href}
        >
          {(index === fillIndex || pathname === e.href) && (
            <div className="absolute z-10">
              <LinkHoverPattern />
            </div>
          )}
          <div 
          onMouseEnter={() => onHover(index)}
          onMouseLeave={() => onHover(null)} className={`rounded-lg z-20 w-full flex justify-center items-center  ${(index === fillIndex || pathname === e.href) ? "bg-[#EA7C69]" : ""} p-5`}>
            {e.icon}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
