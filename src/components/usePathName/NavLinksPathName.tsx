"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

interface NavLinksPathNameProps {
  navItems: NavItem[];
}

const NavLinksPathName = ({ navItems }: NavLinksPathNameProps) => {
  const pathname = usePathname();

  return (
    <nav className="py-1 w-full bg-base-100 shadow-sm">
     
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-start md:justify-center gap-2 md:gap-4 overflow-x-auto whitespace-nowrap scrollbar-none py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`btn btn-sm md:btn-md transition-all rounded-lg font-semibold ${
                isActive
                  ? "btn-primary text-white" 
                  : " bg-red-700 dark:text-gray-200" 
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default NavLinksPathName;