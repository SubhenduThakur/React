import BookDetails from "./BookDetails";
import FeatureBook from "./FeatureBook";
import PropTypes from "prop-types";

function BookRow({ book, onFeatureBook }) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow">
      <BookDetails title={book.title} author={book.author} />
      <FeatureBook book={book} onFeatureBook={onFeatureBook} />
    </div>
  );
}

BookRow.propTypes = {
  book: PropTypes.object.isRequired,
  onFeatureBook: PropTypes.func.isRequired,
};

export default BookRow;
