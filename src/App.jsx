import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const colors = [
  "#16A085",
  "#27AE60",
  "#2C3E50",
  "#F39C12",
  "#E74C3C",
  "#9B59B6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

function App() {
  const [quote, setQuote] = useState([]);
  const [color, setColor] = useState("#222");

  const fetchQuotes = async () => {
    const response = await fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );
    const data = await response.json();
    setQuote(data.quotes[Math.floor(Math.random() * data.quotes.length)]);
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  const onClickHandler = () => {
    fetchQuotes();
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div
      className="flex justify-center items-center h-screen transition-colors duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-col gap-7 bg-white p-10 rounded-lg w-[576px] mx-10">
        <div className="flex flex-col gap-7 font-lato" style={{ color: color }}>
          <p className="flex justify-center text-center text-2xl">
            <span className="me-2">
              <FaQuoteLeft size={27} />
            </span>
            {quote.length === 0 ? "Unknown" : quote.quote}
          </p>
          <p className="flex justify-end text-xl">
            {quote.length === 0 ? "— Unknown" : "— " + quote.author}
          </p>
        </div>
        <div className="flex justify-end">
          <button
            className="py-2 px-5 text-white rounded-md font-poppins text-base hover:opacity-90 ease-in-out transition-all duration-300"
            style={{ backgroundColor: color }}
            onClick={onClickHandler}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
