import { useState } from "react";
import Button from "../UI/Button.ui";

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
    <div className="flex gap-3">
      {filters.map((filter) => (
        <Button
          disable={false}
          key={filter}
          label={filter}
          active={active === filter}
          onClick={() => handleClick(filter)}
        />
      ))}
    </div>
  );
}
