import { useEffect, useState } from "react";
import "../components/Loader.css";

const quotes = [
  "Invest wisely, retire early.",
  "Markets reward patience.",
  "Buy low, sell high.",
  "Risk comes from not knowing.",
  "Success is a strategy.",
  "Your future, your portfolio.",
  "Time in the market beats timing the market.",
  "Trade with confidence.",
  "Smart money moves slow.",
  "Opportunities are everywhere.",
  "Learn before you earn.",
  "Invest in knowledge first.",
  "Stay calm, stay invested.",
  "Discipline beats emotions.",
  "Profit follows wisdom.",
  "Let compounding do the work.",
  "The stock market is a wealth engine.",
  "Think long-term, act smart.",
  "Big gains start with small steps.",
  "Your money, your rules."
];

const Loader = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    // Pick a random quote on each load
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);

    setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 1000); // Ensure transition is complete
    }, 4000); // Matches loader timing
  }, [onComplete]);

  return (
    <div className={`loader-container ${fadeOut ? "loader-fadeout" : ""}`}>
      <div className="loader-text">MHV Education</div>
      <div className="loader-quote">{quote}</div>
    </div>
  );
};

export default Loader;
