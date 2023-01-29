import { useRef, useState } from "react";

import starIcon from "./assets/icon-star.svg";
import thankYou from "./assets/illustration-thank-you.svg";
import "./App.css";

const num = new Array(5).fill().map((v, i) => i + 1);

function App() {
  const [rating, setRating] = useState(null);
  const [save, setSave] = useState(false);

  return (
    <main className="container">
      {!save ? (
        <>
          <img className="icon" src={starIcon} alt="star-icon" loading="lazy" />

          <p className="title">How did we do?</p>

          <p className="description">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>

          <div className="rating-container">
            {num.map((i) => (
              <span
                className={`rating ${rating === i ? "selected" : ""}`}
                onClick={() => setRating(i)}
              >
                {i}
              </span>
            ))}
          </div>

          <button
            className="submit"
            onClick={() => setSave(true)}
            disabled={!!!rating}
          >
            submit
          </button>
        </>
      ) : (
        <div className="wrapper">
          <span>
            <img src={thankYou} alt="thank you" loading="lazy" />
          </span>

          <p className="sub-title">
            You selected {rating} out of {Math.max(...num)}
          </p>

          <p className="title-2">Thank you!</p>

          <p className="description text-center">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      )}
    </main>
  );
}

export default App;
