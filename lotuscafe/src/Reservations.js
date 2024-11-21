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

  function resetForm() {
    setInputs({});
    setSubmitted(false);
  }

  return (
    <section className="container">
      <h1>Make a Reservation</h1>

      {submitted ? (
        <>
          <h2>Reservation confirmed!</h2>
          <p>
            Your reservation for {inputs.username}, party of {inputs.guests},
            has been confirmed for {inputs.date} at {inputs.time}.
          </p>
          <p>See you soon!</p>
          <button className="reserveBtn" onClick={resetForm}>
            Make Another Reservation
          </button>
        </>
      ) : (
        <>
          <p>
            Required fields are followed by{" "}
            <span className="required" aria-label="required">
              *
            </span>
          </p>

          <form className="reserveForm">
            <div>
              <label htmlFor="username">
                Name:{" "}
                <span className="required" aria-label="required">
                  *
                </span>
              </label>
              <br />
              <input
                required
                type="text"
                name="username"
                id="username"
                value={inputs.username || ""}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email">
                Email:{" "}
                <span className="required" aria-label="required">
                  *
                </span>
              </label>
              <br />
              <input
                required
                type="text"
                name="email"
                id="email"
                value={inputs.email || ""}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="phone">
                Phone number:{" "}
                <span className="required" aria-label="required">
                  *
                </span>
              </label>
              <br />
              <input
                required
                type="tel"
                name="phone"
                id="phone"
                value={inputs.phone || ""}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="guests">
                Number of guests:{" "}
                <span className="required" aria-label="required">
                  *
                </span>
              </label>
              <br />
              <input
                required
                type="number"
                name="guests"
                id="guests"
                value={inputs.guests || ""}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="date">
                Date:{" "}
                <span className="required" aria-label="required">
                  *
                </span>
              </label>
              <br />
              <input
                required
                type="date"
                name="date"
                id="date"
                value={inputs.date || ""}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="time">
                Time:{" "}
                <span className="required" aria-label="required">
                  *
                </span>
              </label>
              <br />
              <select
                required
                name="time"
                id="time"
                value={inputs.time || ""}
                onChange={handleChange}
              >
                <option value="5:00 pm">5:00 pm</option>
                <option value="5:30 pm">5:30 pm</option>
                <option value="6:00 pm">6:00 pm</option>
                <option value="6:30 pm">6:30 pm</option>
                <option value="7:00 pm">7:00 pm</option>
                <option value="7:30 pm">7:30 pm</option>
                <option value="8:00 pm">8:00 pm</option>
                <option value="8:30 pm">8:30 pm</option>
              </select>
            </div>

            <div className="textArea">
              <label htmlFor="specReq">Special requests:</label>
              <br />
              <textarea
                name="specReq"
                id="specReq"
                value={inputs.specReq || ""}
                onChange={handleChange}
              />
            </div>

            <button className="reserveBtn" type="submit" onClick={handleSubmit}>
              Submit Reservation
            </button>
          </form>
        </>
      )}
    </section>
  );
}
