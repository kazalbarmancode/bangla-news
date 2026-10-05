import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Brand / About */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Bangla News 70</h2>
            <p className="text-sm text-gray-400">
              সর্বশেষ খবর, আপডেট এবং বিশ্লেষণ পেয়ে থাকুন আমাদের সাথে। সঠিক ও বস্তুনিষ্ঠ সংবাদ পরিবেশনে আমরা অঙ্গীকারবদ্ধ।
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
              কুইক লিংক
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">হোম (Home)</Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-white transition">আমাদের সম্পর্কে (About Us)</Link>
              </li>
             
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition">প্রাইভেসি পলিসি</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
              ক্যাটাগরি
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/category/national" className="hover:text-white transition">জাতীয়</Link>
              </li>
              <li>
                <Link href="/category/international" className="hover:text-white transition">আন্তর্জাতিক</Link>
              </li>
              <li>
                <Link href="/category/sports" className="hover:text-white transition">খেলাধুলা</Link>
              </li>
              <li>
                <Link href="/category/tech" className="hover:text-white transition">প্রযুক্তি</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
              নিউজলেটার
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              দৈনিক খবরের জন্য সাবস্ক্রাইব করুন।
            </p>
            <form  className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="আপনার ইমেইল..."
                className="w-full px-3 py-2 rounded bg-gray-800 text-white text-sm border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded text-sm transition"
              >
                সাবস্ক্রাইব
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} NewsPortal. সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">Facebook</a>
            <a href="#" className="hover:text-gray-300">Twitter</a>
            <a href="#" className="hover:text-gray-300">YouTube</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;