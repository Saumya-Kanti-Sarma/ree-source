export default function SearchBar() {
  return (
    <div className="border-2 border-[#0300B8] flex items-center px-4 py-3">
      <input
        type="text"
        placeholder="Search here..."
        className="flex-1 bg-transparent outline-none text-[#0300B8] placeholder-[#0300B8] font-['Londrina_Solid'] text-sm"
      />
      <span className=" border-2 border-[#0300b8 ] px-2 py-1 bg-[#0200b8] text-white font-['Londrina_Solid'] text-sm ">ctrl + f</span>
    </div>
  );
}
