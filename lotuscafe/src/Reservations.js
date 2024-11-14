import { useState } from "react";

export default function Reservations() {
  const [inputs, setInputs] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    setSubmitted(true);
  };

  return (
    <section className="container">
      <h2>Make a Reservation</h2>
      {submitted ? (
        <div>
          <p>Thanks for your reservation!</p>
        </div>
      ) : (
        <form>
          <label>
            Name:
            <input
              type="text"
              name="username"
              value={inputs.username || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={inputs.email || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone number:
            <input
              type="tel"
              name="phone"
              value={inputs.phone || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Number of guests:
            <input
              type="number"
              name="guests"
              value={inputs.guests || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={inputs.date || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Time:
            <input
              type="time"
              name="time"
              value={inputs.time || ""}
              onChange={handleChange}
            />
          </label>
          <button type="submit" onClick={handleSubmit}>
            Submit Reservation
          </button>
        </form>
      )}
    </section>
  );
}
