import Item from "./Item";

export default function Product() {
  return <div className="bg-white flex flex-col my-5">
    <h1 className="text-3xl text-[#31546D] font-semibold text-center">All product</h1>
    <div className="h-[1pt] w-[6%] bg-[#f2f2f2] mx-auto mt-2"></div>

    <div className="my-5 flex gap-10 px-28 text-sm">
      <div className="flex">
        <label htmlFor="filter" className="text-[#9AB0C0]">Filter: </label>
        <select id="filter" className="font-semibold text-[#31546D]">
          <option value="option1">All Products</option>
          <option value="option3">None Products</option>
        </select>
      </div>

      <div className="flex">
        <label htmlFor="sort" className="text-[#9AB0C0]">Sort: </label>
        <select id="sort" className="font-semibold text-[#31546D]">
          <option value="option1">Best Selling</option>
          <option value="option3">Low cost</option>
        </select>
      </div>
    </div>

    <div className="flex justify-center gap-4 flex-wrap w-full px-10">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>

    <button className="my-10 capitalize py-2 px-8 mx-auto w-max text-sm border-[#75CCEB] border-2 rounded-xl bg-white text-[#75CCEB] hover:bg-[#75CCEB] hover:text-white transition-colors duration-300 ease-in-out">
      View all
    </button>
  </div>
}