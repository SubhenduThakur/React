import CarCard from "./CarCard.jsx";
import PropTypes from "prop-types";

function CarLists({ cars, searchTerm, showPremium }) {
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

  return <div className="flex flex-wrap gap-4">{rows}</div>;
}

CarLists.propTypes = {
  cars: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
  showPremium: PropTypes.bool.isRequired,
};

export default CarLists;
