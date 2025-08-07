import BookRow from "./BookRow";

const books = [
  {
    id: 1,
    title: "To Kill MockingBird",
    author: "Harper Lee",
    featured: false,
  },

  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    featured: false,
  },

  {
    id: 3,
    title: "The Great Gatsbay",
    author: "F. Scott Fitsgerald",
    featured: false,
  },

  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    featured: false,
  },

  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    featured: false,
  },
];

function BookList() {
  return (
    <ul className="space-y-4">
      {books.map((book) => (
        <li
          key={book.id}
          className="flex items-center justify-between rounded-lg bg-white p-4 shadow"
        >
          <BookRow book={book} />
        </li>
      ))}
    </ul>
  );
}

export default BookList;
