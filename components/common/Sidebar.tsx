"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Home,
  TreePine,
  Calendar,
  Megaphone,
  Warehouse,
  Hammer,
  ShoppingCart,
  Banknote,
  Wallet,
  Landmark,
  ChevronDown,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const sidebarData = [
    { title: "Home", link: `dashboard`, icon: <Home size={18} /> },
    { title: "My Tree", link: "my-tree", icon: <TreePine size={18} /> },
    { title: "Almanac", link: "almanac", icon: <Calendar size={18} /> },
    { title: "Billboard", link: "billboard", icon: <Megaphone size={18} /> },
    { title: "Barn", link: "barns", icon: <Warehouse size={18} /> },
    { title: "Toolshed", link: "toolshed", icon: <Hammer size={18} /> },
    { title: "Market", link: "market", icon: <ShoppingCart size={18} /> },
    {
      title: "Field",
      link: "fields",
      icon: <ShoppingCart size={18} />,
      children: [
        { title: "Seed", link: "my-fields", icon: <ShoppingCart size={16} /> },
        { title: "Crop", link: "available-fields", icon: <ShoppingCart size={16} /> },
        { title: "Harvest", link: "field-rentals", icon: <ShoppingCart size={16} /> },
        { title: "Cedar", link: "field-rentals", icon: <ShoppingCart size={16} /> },
      ],
    },
    { title: "Bank", link: "bank", icon: <Banknote size={18} /> },
    { title: "Wallet", link: "wallet", icon: <Wallet size={18} /> },
    { title: "Townhall", link: "townhall", icon: <Landmark size={18} /> },
  ];

  const toggleDropdown = (title: string) => {
    setOpenDropdown((prev) => (prev === title ? null : title));
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-full w-50 bg-white shadow-md 
        transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 md:fixed`}
    >
      <div className="p-4 font-bold text-lg flex items-center">
        <Image
          src="/icons/Logo-dark.png"
          alt="Logo"
          width={100}
          height={100}
          className="mr-2"
        />
      </div>

      <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-64px)] pb-8">
        {sidebarData.map((item, index) => {
          const fullPath = `/dashboard/${item.link}`;
          const isActive = pathname === fullPath;

          if (item.children) {
            return (
              <Collapsible
                key={index}
                open={openDropdown === item.title}
                onOpenChange={() => toggleDropdown(item.title)}
              >
                <CollapsibleTrigger
                  className={`flex items-center justify-between w-full px-2 py-2 rounded-md text-sm cursor-pointer 
                    ${
                      isActive
                        ? "rounded-[2rem] primary-button-background text-white"
                        : "text-[#2D2D2D] hover:text-[#C79438]"
                    }`}
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    {item.title}
                  </div>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      openDropdown === item.title ? "rotate-180" : ""
                    }`}
                  />
                </CollapsibleTrigger>

                <CollapsibleContent className="pl-6 space-y-1">
                  {item.children.map((child, idx) => {
                    const childPath = `/dashboard/${child.link}`;
                    const childActive = pathname === childPath;
                    return (
                      <Link
                        key={idx}
                        href={childPath}
                        onClick={toggleSidebar}
                        className={`flex items-center gap-2 px-2 py-2 rounded-md text-sm
                          ${
                            childActive
                              ? "primary-button-background text-white"
                              : "text-[#555] hover:text-[#C79438]"
                          }`}
                      >
                        {child.icon}
                        {child.title}
                      </Link>
                    );
                  })}
                </CollapsibleContent>
              </Collapsible>
            );
          }

          return (
            <Link
              key={index}
              href={item.title === "Home" ? `/dashboard` : fullPath}
              onClick={toggleSidebar}
              className={`flex items-center gap-2 px-2 py-2 rounded-md text-sm 
                ${
                  isActive
                    ? "rounded-[2rem] primary-button-background text-white"
                    : "text-[#2D2D2D] hover:text-[#C79438]"
                }`}
            >
              {item.icon}
              {item.title}
            </Link>
          );
        })}
      </nav>

      {/* Mobile close button */}
      <button
        className="md:hidden absolute top-4 right-4 gradient-text"
        onClick={toggleSidebar}
      >
        ✕
      </button>
    </aside>
  );
};

export default Sidebar;
