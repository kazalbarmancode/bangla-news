import Link from "next/link";

interface Navs {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: string;
}
const Navlinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const navs: Navs[] = data.data;
  const filterNavs = navs.filter((filterNav) => filterNav.scrapable);
  return (
    <div className="flex gap-5 justify-center mt-5 max-w-7xl mx-auto w-full">
      <Link href={"/"}>হোম</Link>
      {filterNavs.map((nav, index) => (
        <Link href={nav.slug} key={index}>
          {nav.title}
        </Link>
      ))}
    </div>
  );
};

export default Navlinks;
