export type VideoCardProps = {
  title: string;
  description: string;
  visitLink: string;
  downloadLink: string;
};

export default function VideoCard({ title, description, visitLink, downloadLink }: VideoCardProps) {
  return (
    <div className="border-2 border-[#0300B8] flex items-stretch">
      {/* Left: content */}
      <div className="flex-1 p-4">
        <h3 className="text-[#0300B8] font-['Londrina_Solid'] font-bold text-base tracking-wide mb-2">
          {title}
        </h3>
        <p className="text-[#0300B8] font-['Londrina_Solid'] text-sm opacity-80 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Right: actions */}
      <div className="flex flex-col border-l-2 border-[#0300B8]">
        <a
          href={visitLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center px-6 bg-[#0300B8] text-white font-['Londrina_Solid'] text-sm font-semibold tracking-wider hover:opacity-90 transition-opacity border-b-2 border-[#0300B8]"
        >
          Visit
        </a>
        <a
          href={downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center px-6 bg-transparent text-[#0300B8] font-['Londrina_Solid'] text-sm font-semibold tracking-wider hover:bg-[#0300B8] hover:text-white transition-colors"
        >
          Download
        </a>
      </div>
    </div>
  );
}
