import { useState, useEffect } from "react";

const Navbar = () => {
const [active, setActive] = useState(false);

useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scroll ke bawah → sembunyikan navbar
      setActive(false);
    } else if (currentScrollY < lastScrollY) {
      // Scroll ke atas → tampilkan navbar
      setActive(true);
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <div className="navbar py-7 flex items-center justify-between">
        <div className="logo">
            <h1 className="text-3xl font-bold bg-white/50 backdrop-blur-md text-black p-1 rounded-md md:bg-transparent
            md:text-white">Portfolio</h1>
        </div>
        <ul className={`menu flex justify-center w-full items-center sm:gap-10 gap-4 md:static fixed 
        left-0 right-0 mx-auto md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl 
        md:bg-transparent transition-all md:transition-none z-40 ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}>
            <li>
                <a href="#beranda" className="sm:text-lg text-base font-medium">Home</a>
            </li>
            <li>
                <a href="#tentang" className="sm:text-lg text-base font-medium">About</a>
            </li>
            <li>
                <a href="#proyek" className="sm:text-lg text-base font-medium">Project</a>
            </li>
            <li>
                <a href="#kontak" className="sm:text-lg text-base font-medium">Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar