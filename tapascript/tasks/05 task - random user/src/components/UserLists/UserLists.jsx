import UserCard from "./UserCard/UserCard.jsx";

import PropTypes from "prop-types";

function UserLists({ users, onRemove }) {
  return (
    <div className="flex flex-wrap gap-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} onRemove={onRemove} />
      ))}
    </div>
  );
}

UserLists.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      occupation: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default UserLists;
