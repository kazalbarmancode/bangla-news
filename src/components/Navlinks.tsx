import NavLinksPathName from "./usePathName/NavLinksPathName";

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
  const navItems = [
    { id: "home", label: "হোম", href: "/" },
    ...filterNavs.map((nav) => ({
      id: nav.slug,
      label: nav.title,
      href: `/category/${nav.slug}`,
    })),
  ];
  return (
   <NavLinksPathName navItems={navItems}></NavLinksPathName>
  );
};

export default Navlinks;
