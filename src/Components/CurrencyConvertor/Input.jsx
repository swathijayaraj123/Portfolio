import React from "react";
import Options from "./Options";
const Input = ({
  Amount,
  setAmount,
  setselectedCountry,
  selectedCountry,
  text,
}) => {
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    console.log(Amount + "amount is setting....");
  };
  return (
    <div className="flex justify-center items-center flex-wrap ">
      <div className=" border-2 bg-white  rounded-2xl p-4 m-5 ">
        <div className="flex justify-between pt-5 flex-wrap ">
          <p>{text}</p>
          <p>Currency Type</p>
        </div>
        <div className="flex justify-between space-x-1 flex-wrap  ">
          <input
            type="number"
            className=" outline-none text-2xl p-4 w-1/2"
            onChange={handleAmountChange}
            value={Amount}
          />
          <Options
            setselectedCountry={setselectedCountry}
            selectedCountry={selectedCountry}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
