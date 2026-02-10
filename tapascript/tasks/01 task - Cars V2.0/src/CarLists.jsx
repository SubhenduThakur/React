import CarCard from "./CarCard.jsx";
import PropTypes from "prop-types";

function CarLists({ cars, searchTerm, showPremium, sortOption }) {
  /*
  const rows = [];
  const term = searchTerm.toLowerCase();
  cars.forEach((car) => {
    if (
      !car.title.toLowerCase().includes(term) &&
      !car.brand.toLowerCase().includes(term) &&
      !car.year.toString().includes(term)
    )
      return;

    if (showPremium && !car.isPremium) return;

    rows.push(<CarCard key={car.id} cars={car} />);
  });
  */

  const term = searchTerm.toLowerCase();
  const rows = cars
    .filter(
      (car) =>
        car.title.toLowerCase().includes(term) ||
        car.brand.toLowerCase().includes(term) ||
        car.year.toString().includes(term),
    )
    .filter((car) => (showPremium ? car.isPremium : true))
    .sort((a, b) => {
      if (sortOption === "price-asc") return a.price - b.price;
      if (sortOption === "price-dasc") return b.price - a.price;
      if (sortOption === "year-asc") return a.year - b.year;
      if (sortOption === "year-dasc") return b.year - a.year;
      return 0;
    })
    .map((car) => <CarCard key={car.id} cars={car} />);

  return <div className="flex flex-wrap gap-4">{rows}</div>;
}

CarLists.propTypes = {
  cars: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
  showPremium: PropTypes.bool.isRequired,
  sortOption: PropTypes.string.isRequired,
};

export default CarLists;
