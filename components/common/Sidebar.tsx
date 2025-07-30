"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, TreePine, Calendar, Megaphone, Warehouse, Hammer, ShoppingCart, Banknote, Wallet, Landmark } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}



const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const pathname = usePathname();
  // const params = useParams()
  // const currentLang = params?.locale as string;

const sidebarData = [
  { title: "Home", link: `/`, icon: <Home size={18} /> },
  { title: "My Tree", link: "my-tree", icon: <TreePine size={18} /> },
  { title: "Almanac", link: "almanac", icon: <Calendar size={18} /> },
  { title: "Billboard", link: "billboard", icon: <Megaphone size={18} /> },
  { title: "Barn", link: "barns", icon: <Warehouse size={18} /> },
  { title: "Toolshed", link: "toolshed", icon: <Hammer size={18} /> },
  { title: "Market", link: "market", icon: <ShoppingCart size={18} /> },
  { title: "Field", link: "fields", icon: <ShoppingCart size={18} /> },
  { title: "Bank", link: "bank", icon: <Banknote size={18} /> },
  { title: "Wallet", link: "wallet", icon: <Wallet size={18} /> },
  { title: "Townhall", link: "townhall", icon: <Landmark size={18} /> },
  { title: "Community", link: "community", icon: <Landmark size={18} /> },
];
  return (
    <aside className={`
      fixed top-0 left-0 h-full w-48 bg-[#fff] text-white shadow-md 
      transform transition-transform duration-300 z-50
      ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
      lg:translate-x-0 md:fixed z-[50]
    `}>
      <div className="p-4 font-bold text-lg flex items-center">
        <Image 
          src="/icons/Logo-dark.png" 
          alt="Logo" 
          width={100} 
          height={100} 
          className="mr-2"
        />
      </div>

      <nav className="p-4 space-y-2">
        {sidebarData.map((item, index) => {
          const fullPath = `/${item.link}`;
          const isActive = pathname === fullPath;

          return (
            <Link 
              key={index} 
              href={item.title === "Home" ? `/` : fullPath}
              onClick={toggleSidebar}
              className={`flex items-center gap-2 px-2 py-2 rounded-md text-sm 
                ${isActive ? "rounded-[2rem] primary-button-background text-white" : "text-[#2D2D2D] hover:text-[#C79438]"}`}
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
