export default function Item() {
  return <div className="bg-white rounded-2xl hover:shadow-md flex flex-col w-[250px] h-[300px] p-5 border-2 border-[#f2f2f2] transition-all duration-300 ease-in-out">

    <div className="w-full h-full" style={{
      backgroundImage: `url('/prod1.png')`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>

    </div>

    <p className="uppercase font-light text-xs text-center">Crystal agate phone grip</p>
    <span className="text-center text-xs text-[#307189] font-semibold">18.88$</span>

    <button className="mt-4 uppercase py-2 px-8 mx-auto w-max text-xs border-[#75CCEB] border-2 rounded-xl bg-white text-[#75CCEB] hover:bg-[#75CCEB] hover:text-white transition-colors duration-300 ease-in-out">
      Buy now
    </button>
  </div>
}