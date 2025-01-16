import React, { useState } from "react";
import Navbar from "../components/NavBar";

function MainPage() {
  // State for input values and result
  const [initialValue, setInitialValue] = useState("");
  const [rate, setRate] = useState("");
  const [days, setDays] = useState(1); // Default to 1 day
  const [result, setResult] = useState(null);

  // Function to calculate the daily transition
  const calculateTransition = () => {
    // Parse the input values
    const initial = parseFloat(initialValue);
    const rateOfChange = parseFloat(rate);

    // Check for valid inputs
    if (isNaN(initial) || isNaN(rateOfChange) || initial <= 0 || rateOfChange <= 0) {
      alert("Please enter valid values for initial value and rate.");
      return;
    }

    // Calculate the transition value for the specified number of days
    const transitionValue = initial * Math.pow(1 + rateOfChange / 100, days); // Compound interest-like formula
    setResult(transitionValue.toFixed(2)); // Round result to 2 decimal places
  };

  return (
    <div className="container mx-auto p-6">
        <Navbar />
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Daily Transition Calculator</h1>

      <div className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-md">
        <div className="space-y-4">
          <div>
            <label htmlFor="initialValue" className="block text-sm font-semibold text-gray-700">
              Initial Value
            </label>
            <input
              id="initialValue"
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={initialValue}
              onChange={(e) => setInitialValue(e.target.value)}
              placeholder="Enter the initial value"
            />
          </div>

          <div>
            <label htmlFor="rate" className="block text-sm font-semibold text-gray-700">
              Rate of Change (%) per day
            </label>
            <input
              id="rate"
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="Enter the daily rate of change"
            />
          </div>

          <div>
            <label htmlFor="days" className="block text-sm font-semibold text-gray-700">
              Days
            </label>
            <input
              id="days"
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={days}
              onChange={(e) => setDays(e.target.value)}
              placeholder="Enter the number of days"
            />
          </div>

          <button
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none"
            onClick={calculateTransition}
          >
            Calculate Transition
          </button>

          {result !== null && (
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-green-600">Transition after {days} day(s):</h2>
              <p className="text-gray-800 text-lg">${result}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
