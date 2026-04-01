export default function Navbar() {
  return (
    <header className="border-2 border-[#0300B8] p-4 flex items-center justify-between" style={{ boxShadow: '4px 4px 0px #0300B8' }}>
      <div className="border-2 border-[#0300B8] px-4 py-2">
        <div className="text-[#0300B8] text-2xl font-bold tracking-widest font-['Londrina_Solid']">
          REE-Source
        </div>
        <div className="text-[#0300B8] text-xs tracking-[0.3em] font-['Londrina_Solid']">
          LEARN | CREATE | SHARE
        </div>
      </div>
    </header>
  );
}
