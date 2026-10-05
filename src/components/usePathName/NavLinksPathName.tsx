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
      <div className="max-w-5xl md:max-w-7xl mx-auto px-2 md:px-4 flex items-center justify-between md:justify-center gap-1 md:gap-4 overflow-x-auto whitespace-nowrap scrollbar-none py-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`btn btn-xs sm:btn-sm md:btn-md px-2 sm:px-3 text-[11px] sm:text-sm transition-all rounded-md md:rounded-lg font-medium md:font-semibold ${
                isActive
                  ? "btn-primary text-white"
                  : "bg-red-700 text-white dark:text-gray-200"
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