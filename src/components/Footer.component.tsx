const socials = [
  { name: "Instagram", icon: "/icons/social/insta.svg", href: "#" },
  { name: "LinkedIn", icon: "/icons/social/linkedin.svg", href: "#" },
  { name: "GitHub", icon: "/icons/social/github.svg", href: "#" },
  { name: "X", icon: "/icons/social/x.svg", href: "#" },
];

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-6 py-10 bg-[#0300B8]">
      {/* Profile image with offset shadow border */}
      <div className="relative">
        {/* shadow layer */}
        <div
          className="absolute border-2 border-[#0300B8] w-full h-full"
          style={{ top: '8px', left: '8px' }}
        />
        {/* image container */}
        <div className="relative border-2 border-[#0300B8] bg-white w-48 h-56 overflow-hidden">
          <img
            src="/icons/pfp.svg"
            alt="Saumya Sarma"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text */}
      <div className="text-center text-[#0300B8]" style={{ fontFamily: "'Londrina Solid', monospace" }}>
        <p className="text-lg tracking-wide text-white">2026 ree__source__system__v1.01</p>
        <p className="text-lg tracking-wide text-white">by: Saumya Sarma</p>
      </div>

      {/* Social icons */}
      <div className="flex items-center gap-8 mt-2">
        {socials.map(({ name, icon, href }) => (
          <a
            key={name}
            href={href}
            aria-label={name}
            className="text-[#0300B8] hover:opacity-60 transition-opacity"
          >
            <img src={icon} alt={name} className="w-8 h-8" />
          </a>
        ))}
      </div>
    </footer>
  );
}
