import { useState } from "react";

const filters = ["All", "Files", "Blogs", "Articles"] as const;
type Filter = (typeof filters)[number];

type Props = {
  onFilterChange?: (filter: Filter) => void;
};

export default function FilterButtons({ onFilterChange }: Props) {
  const [active, setActive] = useState<Filter>("All");

  const handleClick = (filter: Filter) => {
    setActive(filter);
    onFilterChange?.(filter);
  };

  return (
    <div className="flex justify-between">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => handleClick(filter)}
          style={{ boxShadow: '4px 4px 0px #0300B8' }}
          className={`
            border-2 border-[#0300B8] px-6 py-2 font-['Londrina_Solid'] text-sm font-semibold tracking-wider
            transition-colors cursor-pointer
            ${active === filter
              ? "bg-[#0300B8] text-white border-white"
              : "bg-transparent text-[#0300B8] hover:bg-[#0300B8] hover:text-white"
            }
            -ml-[2px] first:ml-0
          `}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
