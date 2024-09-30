export default function Featured() {
  return <div className="relative h-screen flex items-center overflow-hidden" style={{
    backgroundImage: `url('/hs1.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>

    <div className="relative z-10 flex px-10 items-center justify-center gap-10">

      <div className="text-center md:text-right flex flex-col items-center md:items-end md:w-[40%] gap-2 md:gap-4">
        <div className="text-[#31546D] ">
          <h1 className="text-xl md:text-2xl uppercase">Best price</h1>
          <h1 className="text-3xl md:text-5xl font-semibold">Agate Phone Grip</h1>
        </div>

        <div className="flex items-center gap-4">
          <p className="line-through text-[#41A0B7] text-xs md:text-base">44.50$</p>
          <p className="text-[#E35B3E] font-semibold text-xl md:text-5xl">19.50$ </p>
        </div>

        <p className="text-[#31546D] text-xs md:text-sm">
          Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!
        </p>

        <button className="mt-4 uppercase py-2 px-8  w-max text-xs border-[#75CCEB] border-2 rounded-xl bg-white text-[#75CCEB] hover:bg-[#75CCEB] hover:text-white transition-colors duration-300 ease-in-out">
          Buy now
        </button>
      </div>


      <div className="hidden w-[450px] h-[450px] md:flex justify-center items-center" style={{
        backgroundImage: `url('/Ellipse9.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="w-[350px] h-[350px] shadow-even bg-white rounded-full flex justify-center items-center">
          <div className="w-[250px] h-[250px] shadow-even bg-white rounded-full flex justify-center items-center">
            <img src="/prod1.png" alt="" className="size-44" />
          </div>
        </div>
      </div>
    </div>

    <div className="hidden md:block absolute -top-72 h-[150%] w-full" style={{
      backgroundImage: `url('/hs3.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}></div>

  </div>
}