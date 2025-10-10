import Header from "./Header.jsx";
import Search from "./Search.jsx";
import CarLists from "./CarLists.jsx";
import { useState } from "react";

function Page() {
  const cars = [
    {
      id: 1,
      title: "Luxury Sedan",
      brand: "Mercedes",
      year: 2023,
      price: 80000,
      isPremium: true,
    },
    {
      id: 2,
      title: "Family SUV",
      brand: "Toyota",
      year: 2022,
      price: 45000,
      isPremium: false,
    },
    {
      id: 3,
      title: "Sports Car",
      brand: "Porsche",
      year: 2023,
      price: 120000,
      isPremium: true,
    },
    {
      id: 4,
      title: "Electric Hatchback",
      brand: "Nissan",
      year: 2022,
      price: 35000,
      isPremium: false,
    },
    {
      id: 5,
      title: "Luxury SUV",
      brand: "BMW",
      year: 2023,
      price: 90000,
      isPremium: true,
    },
  ];

  const [searchTerm, setSearchCar] = useState("");
  const [showPremium, setShowPremium] = useState(false);
  const [sortOption, setSortOption] = useState("");

  return (
    <div className="mx-auto px-10 py-4">
      <Header />
      <Search
        searchTerm={searchTerm}
        onSearchCar={setSearchCar}
        showPremium={showPremium}
        onShowPremium={setShowPremium}
        sortOption={sortOption}
        onSortOption={setSortOption}
      />
      <CarLists
        cars={cars}
        searchTerm={searchTerm}
        showPremium={showPremium}
        sortOption={sortOption}
      />
    </div>
  );
}

export default Page;
