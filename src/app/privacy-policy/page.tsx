import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-100 space-y-8">
        
        {/* Header */}
        <div className="border-b border-gray-200 pb-6 text-center sm:text-left space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            গোপনীয়তা নীতি (Privacy Policy)
          </h1>
          <p className="text-sm text-gray-500">
            সর্বশেষ আপডেট: {new Date().toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Introduction */}
        <section className="space-y-3">
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            আমাদের নিউজ পোর্টালে আপনাকে স্বাগতম। আপনার ব্যক্তিগত তথ্যের গোপনীয়তা রক্ষা করা আমাদের অন্যতম প্রধান অগ্রাধিকার। এই প্রাইভেসি পলিসি নথিতে বর্ণনা করা হয়েছে আমরা কী ধরনের তথ্য সংগ্রহ করি এবং তা কীভাবে ব্যবহার করা হয়।
          </p>
        </section>

        {/* Section 1: Information We Collect */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-blue-600 pl-3">
            ১. আমরা যেসকল তথ্য সংগ্রহ করি
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            আমরা মূলত দুই ধরনের তথ্য সংগ্রহ করে থাকি:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm sm:text-base pl-2">
            <li><strong className="text-gray-800">ব্যক্তিগত তথ্য:</strong> আপনি যখন আমাদের নিউজলেটার সাবস্ক্রাইব করেন বা ফর্ম পূরণ করেন, তখন আপনার নাম ও ইমেইল ঠিকানা।</li>
            <li><strong className="text-gray-800">অ-ব্যক্তিগত তথ্য:</strong> ব্রাউজারের ধরন, আইপি অ্যাড্রেস (IP Address), ইন্টারনেট সার্ভিস প্রোভাইডার (ISP), ডিভাইসের ধরণ এবং আপনি আমাদের ওয়েবসাইটে কতক্ষণ সময় ব্যয় করেছেন ইত্যাদি।</li>
          </ul>
        </section>

        {/* Section 2: How We Use Information */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-blue-600 pl-3">
            ২. তথ্যের ব্যবহার
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            সংগৃহীত তথ্য আমরা নিম্নোক্ত উদ্দেশ্যে ব্যবহার করি:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm sm:text-base pl-2">
            <li>ওয়েবসাইটের সেবার মান উন্নত করতে এবং কন্টেন্ট ব্যক্তিগতকরণ করতে।</li>
            <li>পাঠকদের পছন্দ অনুযায়ী নিউজ আপডেট ও নিউজলেটার পাঠাতে।</li>
            <li>ওয়েবসাইটের নিরাপত্তা নিশ্চিত করতে এবং কারিগরি সমস্যা সমাধান করতে।</li>
          </ul>
        </section>

        {/* Section 3: Cookies Policy */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-blue-600 pl-3">
            ৩. কুকিজ (Cookies) নীতিমালা
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            অন্যান্য ওয়েবসাইটের মতো আমরাও ‘কুকিজ’ ব্যবহার করি। কুকিজ হলো ছোট ডাটা ফাইল যা আপনার ডিভাইসে সংরক্ষিত হয় পাঠকদের পছন্দ সংরক্ষণ করার জন্য। আপনি চাইলে আপনার ব্রাউজার সেটিংসে গিয়ে কুকিজ বন্ধ করে রাখতে পারেন।
          </p>
        </section>

        {/* Section 4: Third Party Services & Ads */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-blue-600 pl-3">
            ৪. থার্ড পার্টি বিজ্ঞাপন ও লিংক
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            আমাদের ওয়েবসাইটে থার্ড পার্টি নেটওয়ার্ক (যেমন: Google AdSense) বিজ্ঞাপন পরিবেশন করতে পারে। এরা ব্যবহারকারীদের আগ্রহ অনুযায়ী বিজ্ঞাপন দেখানোর জন্য কুকিজ ব্যবহার করতে পারে। এছাড়া আমাদের সাইটে অন্য ওয়েবসাইটের লিংক থাকতে পারে, যার গোপনীয়তা নীতির দায় আমাদের নয়।
          </p>
        </section>

        {/* Section 5: Data Security */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-blue-600 pl-3">
            ৫. তথ্যের নিরাপত্তা
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            আমরা আপনার তথ্যের নিরাপত্তা বজায় রাখতে সর্বোচ্চ চেষ্টা করি। তবে ইন্টারনেটের মাধ্যমে তথ্য আদান-প্রদান ১০০% নিরাপদ নয়, তাই সম্পূর্ণ নিরাপত্তার নিশ্চয়তা দেওয়া সম্ভব নয়।
          </p>
        </section>

        {/* Section 6: Contact Us */}
        <section className="bg-gray-50 p-6 rounded-xl space-y-3 border border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">
            যোগাযোগ
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            আমাদের প্রাইভেসি পলিসি সম্পর্কিত কোনো প্রশ্ন বা মতামত থাকলে আমাদের সাথে যোগাযোগ করুন:
          </p>
          <div className="text-sm text-gray-700 space-y-1">
            <p><strong>ইমেইল:</strong> banglanews70@gmail.com</p>
            <p><strong>ফোন:</strong> +৮৮০ ১২৩৪-*******</p>
          </div>
          <div className="pt-2">
            <Link 
              href="/contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg text-sm transition"
            >
              যোগাযোগ পেজে যান
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default PrivacyPolicy;