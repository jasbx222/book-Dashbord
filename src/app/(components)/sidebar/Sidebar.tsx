"use client";

import { useState } from "react";
import {
  Home,
  Users,
  Box,
  BarChart,
  Megaphone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/img/logo.png";

const links = [
  { href: "/home", label: "الرئيسية", icon: <Home className="w-5 h-5" /> },
  { href: "/users", label: "المستخدمين", icon: <Users className="w-5 h-5" /> },
  { href: "/orders", label: "الطلبات", icon: <Box className="w-5 h-5" /> },
  {
    href: "/reports",
    label: "التقارير",
    icon: <BarChart className="w-5 h-5" />,
  },
  { href: "/not", label: "الإشعارات", icon: <Megaphone className="w-5 h-5" /> },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-[#925FE2]  z-50  text-white min-h-screen p-4 rounded-2xl shadow-md transition-all duration-300
      ${open ? "w-52" : "w-16"}`}
    >
      {/* زر إغلاق / فتح */}
      <button
        onClick={() => setOpen(!open)}
        className="text-white hover:text-gray-200 transition mb-6"
      >
        {open ? <ChevronRight /> : <ChevronLeft />}
      </button>

      {/* شعار */}
      <div className="flex justify-center mb-6">
        <Link href={"/home"}>
          <Image
            src={logo}
            alt="logo"
            width={open ? 80 : 40}
            height={80}
            className={`${open ? "" : " hidden"}`}
          />
        </Link>
      </div>

      {/* روابط */}
      <ul className="space-y-4">
        {links.map(({ href, label, icon }) => (
          <li key={href}>
            <Link
              href={href}
              className="flex items-center gap-3 text-white/80 hover:text-white text-sm p-2 rounded-lg hover:bg-white/10 transition-all"
            >
              {icon}
              {open && <span>{label}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
