import Navigator from "./Navigator";

export default function HSection() {
  return <div className="h-screen relative w-full overflow-hidden">

    <div className="z-40 relative w-full h-screen flex flex-col justify-center">
      {/* mid div */}
      <div className="w-full flex items-center justify-around px-14">
        {/* text div */}
        <div className="w-[40%] flex flex-col gap-6">
          {/* heading */}
          <div className="text-white">
            <h1 className="text-3xl">Welcome to</h1>
            <h1 className="font-bold text-4xl capitalize">Pop rock crystal shop!</h1>
          </div>

          <p className="text-sm text-[#31546D]">
            Here you will find unique phone accessories, crystals, jewelry and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!
          </p>

          <div className="flex gap-10 text-[#317189]">
            <button className="bg-white px-6 py-3 rounded-xl text-xs uppercase font-semibold ">
              Shop now
            </button>
            <button className="text-sm">
              About us
            </button>
          </div>
        </div>

        {/* white container */}
        <div>
          <div className="relative h-[350px] w-[350px] rounded-3xl bg-white shadow-md flex flex-col">
            <div className="absolute bg-[#8A93E5] left-0 top-12 text-white rounded-r-md py-2 text-sm px-3">
              New lot
            </div>

            <div className="flex justify-center items-center h-full w-full " style={{
              backgroundImage: `url('/prod1.png')`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}></div>

            <div className="h-[1pt] w-[35%] bg-[#f2f2f2] mx-auto mb-3"></div>
            <h2 className="font-light uppercase text-center pb-10 text-sm">Crystal agate phone grip <span className="text-[#317189] font-bold">- 18.99$</span></h2>
          </div>

          {/* navigator */}
          <Navigator />
        </div>

      </div>

      <div className="absolute bottom-3 w-full flex justify-center">
        <img src="/scroll.svg" className="size-24" alt="" />
      </div>
    </div>

    <div className="absolute top-0 left-0 h-full w-full" style={{
      backgroundImage: `url('/hs1.png')`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }}></div>

    <div className="absolute -bottom-20 left-0 h-full w-full" style={{
      backgroundImage: `url('/hs2.png')`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }}></div>

  </div>
}