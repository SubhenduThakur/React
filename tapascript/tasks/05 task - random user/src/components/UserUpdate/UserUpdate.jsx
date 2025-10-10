import Button from "./Button/Button.jsx";
import UserCount from "./UserCount/UserCount.jsx";

import PropTypes from "prop-types";

function UserUpdate({ users, onAdd }) {
  return (
    <div className="flex gap-5 py-5">
      <Button onAdd={onAdd} />
      <UserCount users={users} />
    </div>
  );
}

UserUpdate.propTypes = {
  users: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default UserUpdate;
