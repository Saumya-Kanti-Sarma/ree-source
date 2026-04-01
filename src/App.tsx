import { useState } from "react";
import Navbar from "./components/Navbar.component";
import SearchBar from "./components/SearchBar.component";
import FilterButtons from "./components/FilterButtons.component";
import VideoCard from "./components/VideoCard.component";
import Footer from "./components/Footer.component";
import { mockData } from "./data/mockData";

export default function App() {
  const [_activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      <div className="max-w-4xl mx-auto w-full flex flex-col flex-1 p-4 gap-0">
        {/* Navbar */}
        <Navbar />

        {/* Search */}
        <div className="-mt-[2px]">
          <SearchBar />
        </div>

        {/* Filters */}
        <div className="mt-4 ">
          <FilterButtons onFilterChange={setActiveFilter} />
        </div>

        {/* Cards */}
        <div className="flex flex-col mt-4 gap-0">
          {mockData.map((item, i) => (
            <div key={item.title} className={i > 0 ? "-mt-[2px]" : ""}>
              <VideoCard {...item} />
            </div>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Footer */}
        <div className="mt-4 -mb-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}
