import "./App.css";
import { useState } from "react";
import { RWebShare } from "react-web-share";
import { FaShareAlt } from "react-icons/fa";
const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber",
  };
  const [quote, setQuote] = useState(quoteData);

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(
      quote.author + " once said: " + quote.content
    );
    alert("copied");
  };
  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">
            Copy
          </button>

          <button className="btn">
            <RWebShare
              data={{
                title: quote.author + " once said: " + quote.content,
              }}
              onClick={() => {}}
              children={<FaShareAlt />}
            ></RWebShare>
          </button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
      </div>
    </>
  );
};

export default App;
