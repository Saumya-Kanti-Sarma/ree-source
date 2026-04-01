export default function Navbar() {
  return (
    <header
      className="border-2 border-[#0300B8] p-3 flex items-center gap-3 bg-white"
      style={{ boxShadow: '4px 4px 0px #0300B8' }}
    >
      {/* Terminal icon */}
      <div className=" p-2 flex items-center justify-center shrink-0">
        <img src="/icons/light-terminal.svg" alt="terminal-logo" />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center">
        <span
          className="text-[#0300B8] leading-none"
          style={{ fontFamily: "'Jersey 25', monospace", fontSize: '2.2rem', fontWeight: 700, letterSpacing: '0.02em' }}
        >
          REE-Source
        </span>
        <span
          className="text-[#0300B8]"
          style={{ fontFamily: "'Londrina Solid', monospace", fontSize: '0.75rem', letterSpacing: '0.2em' }}
        >
          LEARN | CREATE | SHARE
        </span>
      </div>
    </header>
  );
}
