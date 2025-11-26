import React, { useState } from "react";

const Task = () => {
  const [text, SetText] = useState("");
  const upperCase = () => {
    SetText(text.toUpperCase());
  };
  const LowerCase = () => {
    SetText(text.toLowerCase());
  };
  const bgColor = () => {
    document.getElementById("comment").style.backgroundColor = "orange";
  };
  const textColor = () => {
    document.getElementById("comment").style.color = "blue";
  };
  const count = () => {
    alert(`Total Characters: ${text.length}`);
  };
  const toggleData = () => {
    SetText(text === "" ? "Hello Mohit!" : "");
  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  return (
    <>
      <div className="container pt-4 ">
        <div className="">
          <h5 className="text-center ">
            <label for="comment text-center ">Converter</label>
          </h5>
          <textarea
            className="form-control fs-4 "
            rows="5"
            id="comment"
            name="text"
            value={text}
            placeholder="Write code here"
            onChange={(e) => SetText(e.target.value)}
            style={{ outline: "none", boxShadow: "none" }}
          ></textarea>
        </div>
        <br />
        <div className="d-flex justify-content-center text-white  fs-4">
          <button
            type="button"
            class="btn bg-primary text-white me-2"
            onClick={upperCase}
          >
            Uppercase
          </button>
          <button
            type="button"
            class="btn bg-primary text-white me-2"
            onClick={LowerCase}
          >
            LowerCase
          </button>
          <button
            type="button"
            class="btn bg-primary text-white me-2 px-4"
            onClick={bgColor}
          >
            BgColor
          </button>
          <button
            type="button"
            class="btn bg-primary text-white me-2"
            onClick={textColor}
          >
            TextColor
          </button>
          <button
            type="button"
            class="btn bg-primary text-white me-2 px-4"
            onClick={count}
          >
            Count
          </button>
          <button
            type="button"
            class="btn bg-primary text-white me-2"
            onClick={toggleData}
          >
            ToggleData
          </button>
          <button
            type="button"
            class="btn bg-primary text-white me-2 px-4"
            onClick={copyText}
          >
            Copy
          </button>
        </div>
      </div>
    </>
  );
};

export default Task;
