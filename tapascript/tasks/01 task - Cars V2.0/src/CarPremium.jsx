import PropTypes from "prop-types";

function CarPremium({ premium }) {
  return (
    <span className="flex gap-x-1 font-bold">
      Premium :<p className="font-normal">{premium ? "Yes" : "No"}</p>
    </span>
  );
}

CarPremium.propTypes = {
  premium: PropTypes.bool.isRequired,
};

export default CarPremium;
