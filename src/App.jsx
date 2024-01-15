/*
This app implements a simple bubble sort algorithm. Users can input an array of numbers (comma-separated) into a text field. Clicking the "Sort" button triggers the sorting process using the bubble sort algorithm. The sorted result is displayed below the button.

  Component Structure:
  - Two state variables, inputArray and sortedArray, are managed using the useState hook.
  - The bubbleSort function implements the bubble sort algorithm.
  - handleSort function parses the user input, performs sorting, and updates the state.
*/

import { useState } from "react";

const BubbleSortApp = () => {
  const [inputArray, setInputArray] = useState("");
  const [sortedArray, setSortedArray] = useState([]);

  const bubbleSort = (arr) => {
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
        }
      }
    } while (swapped);
    return arr;
  };

  const handleSort = () => {
    const arrayToSort = inputArray
      .split(",")
      .map((item) => parseInt(item.trim(), 10));
    const sortedResult = bubbleSort([...arrayToSort]);
    setSortedArray(sortedResult);
  };

  return (
    <div>
      <h1>Ben's BubbleSort app:</h1>
      <label>
        Enter array (comma-separated):
        <input
          type="text"
          value={inputArray}
          onChange={(e) => setInputArray(e.target.value)}
        />
      </label>
      <button onClick={handleSort}>Sort</button>
      <div>
        <strong>Sorted Array:</strong> {sortedArray.join(", ")}
      </div>
    </div>
  );
};

export default BubbleSortApp;
