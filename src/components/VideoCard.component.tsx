import Button from "../UI/Button.ui";
export type VideoCardProps = {
  videoNumber: string;
  title: string;
  description: string;
  visitLink: string;
  downloadLink: string;
};

export default function VideoCard({ videoNumber, title, description, visitLink, downloadLink }: VideoCardProps) {
  return (
    <div className="border-2 border-[#0300B8] flex items-stretch">
      {/* Left: content */}
      <div className="flex-1 p-4">
        <h2>Video {videoNumber}</h2>
        <h3 className="text-[#0300B8] font-['Londrina_Solid'] font-bold text-base tracking-wide mb-2">
          {title}
        </h3>
        <p className="text-[#0300B8] font-['Londrina_Solid'] text-sm opacity-80 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Right: actions */}
      <div className="flex flex-col border-l-2 border-[#0300B8] px-2 justify-center gap-5">
        <Button label="Visit" disable={!visitLink} onClick={() => window.open(visitLink, '_blank', 'noopener,noreferrer')} />
        <Button label="Download" disable={!downloadLink} onClick={() => window.open(downloadLink, '_blank', 'noopener,noreferrer')} />

      </div>
    </div>
  );
}
