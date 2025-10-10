import PropTypes from "prop-types";

function UserCount({ users }) {
  return (
    <span className="flex items-center gap-2 rounded bg-red-400 px-4 py-2 text-white">
      User Count : <strong>{users.length}</strong>
    </span>
  );
}

UserCount.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserCount;
