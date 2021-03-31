import React, { useState } from "react";

const Form = () => {
  const [number, setNumber] = useState([
    {
      fName: "",
      lName: "",
      phoneNumber: "",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [newNumber, setNewNumber] = useState([
    {
      fName: "",
      lName: "",
      phoneNumber: "",
    },
  ]);

  const handleReset = () => {
    setNumber({
      fName: "",
      lName: "",
      phoneNumber: "",
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setNumber({
      ...number,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ number });
    setNewNumber(number);
    setLoading(true);
    handleReset();
  };

  return (
    <>
      <div className="container">
        <h2>Form Practice</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <div>
              <input
                onChange={handleChange}
                type="text"
                placeholder="First Name"
                value={number.fName}
                name="fName"
              />
            </div>
            <div>
              <input
                onChange={handleChange}
                type="text"
                placeholder="Last Name"
                value={number.lName}
                name="lName"
              />
            </div>
            <div>
              <input
                onChange={handleChange}
                type="text"
                placeholder="Your Number"
                value={number.phoneNumber}
                name="phoneNumber"
              />
              <div>
                <button>Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {loading && (
        <>
          <p>
            Your New Contact is {newNumber.fName} {newNumber.lName}, and their
            number is {newNumber.phoneNumber}
          </p>
        </>
      )}
    </>
  );
};

export default Form;
