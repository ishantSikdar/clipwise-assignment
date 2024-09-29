export default function Navbar() {
  return <div className="fixed top-0 z-10 h-24 w-full flex items-center justify-between px-14">
    <img src="/logo.svg" className="h-[60%]" />

    <div className="flex w-[50%] justify-between text-sm items-center">
      <div className="flex justify-evenly text-white w-[60%]">
        <p className="">Home</p>
        <p className="">Shop</p>
        <p className="">About Us</p>
        <p className="">Help</p>
      </div>

      <div>
        <img src="/util.svg" className="size-10" />
      </div>
    </div>

  </div>
}