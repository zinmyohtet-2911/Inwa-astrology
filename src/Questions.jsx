import React from "react";
import { useState } from "react";
import { calculateAstrology } from "./astrology";
export default function Question() {
  const [formData, setFormData] = useState({
    name : "",
    age : "",
  birthYear: "",
  birthDay: "",
  beforeApril: "",
});

const [result, setResult] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
   const prediction = calculateAstrology(
    formData.birthYear,
    formData.beforeApril,
    formData.birthDay)
    setResult(prediction);
};


const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="question">
      <h2 className="question-title">Your Birth Details</h2>

      <form className="question-form" onSubmit={handleSubmit}>
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-input"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Age */}
        <div className="form-group">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            id="age"
            name="age"
            type="number"
            className="form-input"
            placeholder="e.g. 25"
            min="1"
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        {/* Birth Year */}
        <div className="form-group">
          <label htmlFor="birthYear" className="form-label">
            Birth Year
          </label>
          <input
            id="birthYear"
            name="birthYear"
            type="number"
            className="form-input"
            placeholder="e.g. 1999"
            min="1900"
            max="2100"
            value={formData.birthYear}
            onChange={handleChange}
          />
        </div>

        {/* Birth Day */}
        <div className="form-group">
          <label htmlFor="birthDay" className="form-label">
            Birth Day
          </label>
          <select id="birthDay" name="birthDay" className="form-select" value={formData.birthDay} onChange={handleChange}>
            <option value="">-- Select day --</option>
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday</option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
          </select>
        </div>

        {/* Before/After April 13 */}
        <div className="form-group">
          <label htmlFor="beforeApril" className="form-label">
            Were you born before April 13?
          </label>
          <select id="beforeApril" name="beforeApril" className="form-select" value={formData.beforeApril} onChange={handleChange}>
            <option value="">-- Select --</option>
            <option value="before">Yes, I was born before April 13.</option>
            <option value="after">No, I was born after April 13.</option>
          </select>
        </div>

        <button type="submit" className="form-submit">
          Check Fortune
        </button>
      </form>

{result && (
  <div className="result-card">
    <p className="result-heading">You are {result.planet.toUpperCase()}.</p>
    <p className="result-text">{result.prediction}</p>
  </div>
)}

    </section>
    
  );
}