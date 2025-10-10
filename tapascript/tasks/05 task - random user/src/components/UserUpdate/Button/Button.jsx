import PropTypes from "prop-types";
import { Plus } from "lucide-react";

function Button({ onAdd }) {
  return (
    <button
      className="flex items-center gap-2 rounded bg-green-400 px-4 py-2 text-white"
      onClick={onAdd}
    >
      <Plus size={20} />
      Add
    </button>
  );
}

Button.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default Button;
