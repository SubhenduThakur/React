import CarDetails from "./CarDetails.jsx";
import CarPremium from "./CarPremium.jsx";
import PropTypes from "prop-types";

function CarCard({ cars }) {
  return (
    <div className="w-md rounded-lg border border-gray-300 p-4 shadow-sm">
      <CarDetails
        title={cars.title}
        brand={cars.brand}
        year={cars.year}
        price={cars.price}
      />
      <CarPremium premium={cars.isPremium} />
    </div>
  );
}

CarCard.propTypes = {
  cars: PropTypes.object.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default CarCard;
