import React from "react";
import spinner from "./loading-spinner-animated-gif-4.gif";
import "../App.css"
const Spinner = () => (
  <>
    <img className="spiner"
      src={spinner}
      alt="loading..."
    />
  </>
);
export default Spinner;
