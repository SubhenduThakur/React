import { useState } from "react";

function App() {
  const [color, setColor] = useState("lavender");
  const bgColors = {
    red: "bg-red-400",
    green: "bg-green-400",
    blue: "bg-blue-400",
    violet: "bg-violet-400",
    gray: "bg-gray-400",
    pink: "bg-pink-400",
  };
  return (
    <>
      <div className={`${bgColors[color]} h-screen w-full duration-200`}>
        <div className="fixed inset-x-0 bottom-12 flex flex-wrap justify-center px-2">
          <div className="flex flex-wrap justify-center gap-3 rounded-4xl bg-white px-3 py-2 shadow-lg">
            <button
              onClick={() => {
                setColor("red");
              }}
              className={`${bgColors["red"]} rounded rounded-3xl px-4 py-2 text-white outline-none`}
            >
              Red
            </button>

            <button
              onClick={() => {
                setColor("green");
              }}
              className={`${bgColors["green"]} rounded rounded-3xl px-4 py-2 text-white outline-none`}
            >
              Green
            </button>

            <button
              onClick={() => {
                setColor("blue");
              }}
              className={`${bgColors["blue"]} rounded rounded-3xl px-4 py-2 text-white outline-none`}
            >
              Blue
            </button>

            <button
              onClick={() => {
                setColor("violet");
              }}
              className={`${bgColors["violet"]} rounded rounded-3xl px-4 py-2 text-white outline-none`}
            >
              Violet
            </button>

            <button
              onClick={() => {
                setColor("gray");
              }}
              className={`${bgColors["gray"]} rounded rounded-3xl px-4 py-2 text-white outline-none`}
            >
              Gray
            </button>

            <button
              onClick={() => {
                setColor("pink");
              }}
              className={`${bgColors["pink"]} rounded rounded-3xl px-4 py-2 text-white outline-none`}
            >
              Pink
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
