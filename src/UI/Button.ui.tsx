type ButtonProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
  disable?: boolean;
};

export default function Button({ label, active = false, onClick, disable }: ButtonProps) {
  return (
    <button
      disabled={disable}
      onClick={onClick}
      style={{ boxShadow: '4px 4px 0px #0300B8', opacity: disable ? "60%" : "100%" }}
      className={`
        border-2 border-[#0300B8] px-6 py-2 font-['Londrina_Solid'] text-sm font-semibold tracking-wider
        ${disable ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${active
          ? "bg-[#0300B8] text-white border-white"
          : "bg-transparent text-[#0300B8] hover:bg-[#0300B8] hover:text-white"
        }
      `}
    >
      {label}
    </button>
  );
}
