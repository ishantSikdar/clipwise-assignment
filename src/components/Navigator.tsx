export default function Navigator() {
  return <div className="flex w-full justify-evenly my-5 px-24 items-center">

    <button className="">
      <div className="w-5 aspect-square rotate-180 mx-2" style={{
        backgroundImage: `url('/arrow.svg')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}></div>
    </button>

    <div className="rounded-full bg-[#8A93E5] h-2 w-2"></div>
    <div className="rounded-full bg-[#D7DBFF] h-2 w-2"></div>
    <div className="rounded-full bg-[#D7DBFF] h-2 w-2"></div>
    <div className="rounded-full bg-[#D7DBFF] h-2 w-2"></div>
    <div className="rounded-full bg-[#D7DBFF] h-2 w-2"></div>
    <div className="rounded-full bg-[#D7DBFF] h-2 w-2"></div>
    <div className="rounded-full bg-[#D7DBFF] h-2 w-2"></div>

    <button className="">
      <div className="w-5 aspect-square mx-2" style={{
        backgroundImage: `url('/arrow.svg')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}></div>
    </button>

  </div>
}