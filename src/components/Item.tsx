export default function Item() {
  return <div className="bg-white rounded-2xl hover:shadow-md flex flex-col w-[150px] h-[200px] md:w-[250px] md:h-[300px] p-2 md:p-5 border-2 border-[#f2f2f2] transition-all duration-300 ease-in-out">

    <div className="w-full h-full" style={{
      backgroundImage: `url('/prod1.png')`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>

    </div>

    <p style={{ fontSize: '10px' }} className="uppercase  font-light  text-center">Crystal agate phone grip</p>
    <span style={{ fontSize: '10px' }} className="text-center  text-xs text-[#307189] font-semibold">18.88$</span>

    <button style={{ fontSize: '8px' }}  className="mt-1 md:mt-4 uppercase py-2 px-8 mx-auto w-max border-[#75CCEB] border-2 rounded-xl bg-white text-[#75CCEB] hover:bg-[#75CCEB] hover:text-white transition-colors duration-300 ease-in-out">
      Buy now
    </button>
  </div>
}