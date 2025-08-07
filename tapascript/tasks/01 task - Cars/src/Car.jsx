import CarDetails from "./CarDetails.jsx";
import CarPremium from "./CarPremium.jsx";
import PropTypes from "prop-types";

function Car({ cars }) {
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

Car.propTypes = {
  cars: PropTypes.shape({
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
  }).isRequired,
};
export default Car;
