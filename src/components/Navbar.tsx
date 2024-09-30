import { useState } from "react"

export default function Navbar() {
  const [menu, setMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenu(prev => !prev);
  }

  return <div className="absolute top-0 z-50 h-24 text-xs md:text-base w-full flex items-center justify-center md:justify-between px-5 md:px-14 ">
    <img src="/logo.svg" className="h-[50%] md:h-[60%]" />

    <div className="hidden md:flex w-[60%] justify-between items-center">
      <div className="flex justify-evenly text-white md:gap-8 gap-5">
        <p className="">Home</p>
        <p className="">Shop</p>
        <p className="">About Us</p>
        <p className="">Help</p>
      </div>

      <div className="hidden md:block">
        <img src="/util.svg" className="size-10" />
      </div>
    </div>

    <div className="md:hidden fixed right-6">
      <button onClick={toggleMenu}>
        <img src="/hamburger-menu.png" className="size-10 text-white" />
      </button>

      {menu && <div className="fixed uppercase bg-white p-3 shadow-even font-light gap-2 text-[#31546D] right-8 flex flex-col items-center w-32">
        <p className="">Home</p>
        <p className="">Shop</p>
        <p className="">About Us</p>
        <p className="">Help</p>
      </div>}
    </div>

  </div>
}