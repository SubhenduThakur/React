import PropTyeps from "prop-types";

function CarDetails({ title, brand, year, price }) {
  return (
    <>
      <h2 className="text-xl font-bold">{title}</h2>
      <span className="flex gap-x-1 font-bold">
        Brand : <p className="font-normal">{brand}</p>
      </span>
      <span className="flex gap-x-1 font-bold">
        Year : <p className="font-normal">{year}</p>
      </span>
      <span className="flex gap-x-1 font-bold">
        Price :<p className="font-normal">${price}</p>
      </span>
    </>
  );
}

CarDetails.propTypes = {
  title: PropTyeps.string.isRequired,
  brand: PropTyeps.string.isRequired,
  year: PropTyeps.number.isRequired,
  price: PropTyeps.number.isRequired,
  isPremium: PropTyeps.bool.isRequired,
};

export default CarDetails;
