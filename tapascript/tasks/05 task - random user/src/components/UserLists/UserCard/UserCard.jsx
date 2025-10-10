import PropTypes from "prop-types";
import "./removeButton.css";

function UserCard({ user, onRemove }) {
  return (
    <div className="group relative w-2xs rounded-lg border border-gray-200 p-3 shadow-md transition">
      <p>
        <strong>Name :</strong> {user.name}
      </p>
      <p>
        <strong>Age :</strong> {user.age}
      </p>
      <p>
        <strong>Occupation :</strong> {user.occupation}
      </p>

      <button
        onClick={() => onRemove(user.id)}
        className="remove-btn absolute -top-3 -right-3"
      >
        ✕
      </button>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    occupation: PropTypes.string.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default UserCard;
