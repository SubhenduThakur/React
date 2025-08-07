import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(1);

  const addValue = () => {
    setCounter((counter) => counter + 1);
  };
  const removeValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
      console.log("removed!", counter);
    }
  };

  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="p-2 text-5xl font-bold text-orange-300">
          Chai aur React
        </h1>

        <h2 className="p-2 text-2xl">Counter value : {counter}</h2>

        <div className="mt-3 flex">
          <button
            onClick={addValue}
            className="mx-2 w-30 rounded bg-green-400 p-2 text-white"
          >
            Add
          </button>

          <button
            onClick={removeValue}
            className="mx-2 w-30 rounded bg-red-500 p-2 text-white"
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
