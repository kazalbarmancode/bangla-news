import Image from "next/image";
import Navlinks from "./Navlinks";
import Link from "next/link";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });

  return (
    <header className="sticky top-0 z-50 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 flex flex-col md:grid md:grid-cols-3 items-center gap-4 md:gap-0">
        <div className="hidden md:block"></div>

        <Link href={'/'}>
        <div className="flex items-center justify-center gap-2 text-center md:text-left">
          <Image
            src={"/logo.webp"}
            alt="logo picture"
            height={50}
            width={50}
            className="w-12 h-12 md:w-14 md:h-14"
          />
          <div>
            <h1 className="font-bold text-xl md:text-2xl text-red-700">
              Bangla News 70
            </h1>
            <p className="text-xs md:text-sm text-gray-800 dark:text-gray-300">
              {date}
            </p>
          </div>
        </div>
        </Link>

        <div className="flex justify-center md:justify-end items-center gap-2 w-full md:w-auto">
          <button className="btn btn-sm md:btn-md">সাইন ইন</button>
          <button className="rounded py-1.5 px-3 md:py-2 md:px-3 hover:bg-red-800 bg-red-700 font-semibold text-white text-sm md:text-base">
            সাইন আপ
          </button>
        </div>
      </div>

      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Navlinks />
      </div>
    </header>
  );
};

export default Header;