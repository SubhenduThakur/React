import Header from "./Header.jsx";
import Search from "./Search.jsx";
import CarLists from "./CarLists.jsx";

function Page() {
  return (
    <div className="mx-auto px-10 py-4">
      <Header />
      <Search />
      <CarLists />
    </div>
  );
}

export default Page;
