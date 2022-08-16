import logo from "../src/food.jpg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [img, setimg] = useState(logo);
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setimg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <div id="container">
      <div id="box">
        <div id="card">
          <div id="left">
            <img src={img} alt="logo" />
          </div>
          <div id="right">
            <div id="top">
              <input
                type="file"
                name="image-upload"
                id="input"
                accept="image/*"
                onChange={imageHandler}
              />
              <label htmlFor="input" className="image-upload">
                Upload Image
              </label>
            </div>
            <div id="bottom">
              <pre>
                <h3>Food           : ???</h3>
                <h3>Name           : ???</h3>
                <h3>Calories       : ???</h3>
                <h3>Carbohydrates  : ???</h3>
                <h3>Proteins       : ???</h3>
                <h3>Fats           : ???</h3>
                <h3>Vitamins       : ???</h3>
                <h3>Dietary Fibres : ???</h3>
                <h3>Minerals       : ???</h3>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
