import PropTypes from "prop-types";

function BookDetails({ title, author }) {
  return (
    <>
      <div>
        <h2 className="jost text-[1.2rem] font-bold">{title}</h2>
        <p className="jost font-light text-gray-600">{author}</p>
      </div>
    </>
  );
}

BookDetails.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookDetails;
