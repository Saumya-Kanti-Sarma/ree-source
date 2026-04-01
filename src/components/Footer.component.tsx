// Simple SVG icons inline to avoid extra dependencies
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" />
    <line x1="8" y1="10" x2="8" y2="17" />
    <line x1="8" y1="7" x2="8" y2="7.5" strokeWidth="3" />
    <line x1="12" y1="10" x2="12" y2="17" />
    <path d="M12 13a3 3 0 0 1 6 0v4" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" />
    <line x1="7" y1="7" x2="17" y2="17" />
    <line x1="17" y1="7" x2="7" y2="17" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="border-2 border-[#0300B8] p-4 flex items-center justify-between">
      {/* Left: avatar + info */}
      <div className="flex items-center gap-4">
        {/* Avatar placeholder */}
        <div className="w-12 h-12 border-2 border-[#0300B8] flex items-center justify-center">
          <span className="text-[#0300B8] font-['Londrina_Solid'] text-lg font-bold">S</span>
        </div>
        <div className="font-['Londrina_Solid'] text-[#0300B8] text-xs leading-relaxed">
          <div>2026 ree__source__system__v1.01</div>
          <div>by: Saumya Sarma</div>
        </div>
      </div>

      {/* Right: social icons */}
      <div className="flex items-center gap-3 text-[#0300B8]">
        <a href="#" aria-label="Instagram" className="hover:opacity-60 transition-opacity">
          <InstagramIcon />
        </a>
        <a href="#" aria-label="LinkedIn" className="hover:opacity-60 transition-opacity">
          <LinkedInIcon />
        </a>
        <a href="#" aria-label="GitHub" className="hover:opacity-60 transition-opacity">
          <GitHubIcon />
        </a>
        <a href="#" aria-label="X" className="hover:opacity-60 transition-opacity">
          <XIcon />
        </a>
      </div>
    </footer>
  );
}
