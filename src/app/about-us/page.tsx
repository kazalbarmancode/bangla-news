import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 md:py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            আমাদের সম্পর্কে
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            সঠিক, নিরপেক্ষ এবং বস্তুনিষ্ঠ সংবাদ পরিবেশনে আমরা সর্বদাই অঙ্গীকারবদ্ধ। বস্তুনিষ্ঠ খবর পৌঁছে দেওয়াই আমাদের মূল লক্ষ্য।
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
        
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 space-y-3">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl">
              🎯
            </div>
            <h2 className="text-2xl font-bold text-gray-900">আমাদের লক্ষ্য (Mission)</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              পাঠকদের কাছে দ্রুততম সময়ে নির্ভরযোগ্য ও সত্য তথ্য পৌঁছে দেওয়া। কোনো প্রকার গুজব বা মিথ্যা তথ্য ছাড়াই দেশের এবং বিশ্বের প্রতিটি প্রান্তের খবর মানুষের হাতের মুঠোয় এনে দেওয়া আমাদের মূল উদ্দেশ্য।
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 space-y-3">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center font-bold text-xl">
              👁️
            </div>
            <h2 className="text-2xl font-bold text-gray-900">আমাদের ভিশন (Vision)</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              সংবাদ জগতের এক বিশ্বস্ত ডিজিটাল প্ল্যাটফর্ম হিসেবে আত্মপ্রকাশ করা, যেখানে প্রযুক্তি ও সাংবাদিকতার সঠিক মেলবন্ধনে ডিজিটাল মাধ্যমকে আরও তথ্যসমৃদ্ধ ও জনবান্ধব করে তোলা হবে।
            </p>
          </div>
        </div>

        {/* Why Choose Us / Features */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-bold text-gray-900">কেন আমাদের পড়বেন?</h2>
            <p className="text-gray-500 text-sm md:text-base">
              সংবাদ জগতে সঠিক তথ্যের বার্তা পৌঁছে দিতে আমাদের অনন্য বৈশিষ্ট্যসমূহ।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100 space-y-2">
              <span className="text-2xl">⚡</span>
              <h3 className="text-lg font-semibold text-gray-800">দ্রুত ও নির্ভরযোগ্য</h3>
              <p className="text-sm text-gray-600">ঘটনার সাথে সাথেই নির্ভরযোগ্য সংবাদ সরবরাহ।</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 space-y-2">
              <span className="text-2xl">⚖️️</span>
              <h3 className="text-lg font-semibold text-gray-800">নিরপেক্ষ সাংবাদিকতা</h3>
              <p className="text-sm text-gray-600">কোনো পক্ষপাতিত্ব ছাড়া নিরপেক্ষ সংবাদের নিশ্চয়তা।</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 space-y-2">
              <span className="text-2xl">🌐</span>
              <h3 className="text-lg font-semibold text-gray-800">বিশ্বব্যাপী কভারেজ</h3>
              <p className="text-sm text-gray-600">জাতীয় ও আন্তর্জাতিক সব ধরনের খবরের সমাহার।</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-bold text-gray-900">আমাদের টিম</h2>
            <p className="text-gray-500 text-sm md:text-base">
              যাদের অক্লান্ত পরিশ্রমে প্রতিদিনের সংবাদ আপনার কাছে পৌঁছায়।
            </p>
          </div>

          
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white rounded-3xl p-8 md:p-12 text-center space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold">
            আমাদের সাথে যোগাযোগ করতে চান?
          </h2>
          <p className="text-blue-100 max-w-xl mx-auto text-sm md:text-base">
            যেকোনো মতামত, পরামর্শ বা খবরের আপডেটের জন্য আমাদের সাথে নির্দ্বিধায় যোগাযোগ করুন।
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition shadow-md text-sm md:text-base"
            >
              যোগাযোগ করুন
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
};

export default AboutPage;