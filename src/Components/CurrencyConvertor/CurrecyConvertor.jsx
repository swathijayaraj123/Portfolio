import React, { useEffect, useState } from "react";
import useRun from "../../Custom_Hooks/usereRunHook.js";
import Input from "./Input.jsx";
const CurrecyConvertor = () => {
  const [fromselectedCountry, fromsetselectedCountry] = useState("usd");
  const [toselectedCountry, tosetselectedCountry] = useState("inr");
  const [convertedAmt, setconvertedAmt] = useState(0);
  const [Amount, setAmount] = useState(0);
  let data = useRun(fromselectedCountry);

  const Calculate = () => {
    let unit = data[toselectedCountry];

    setconvertedAmt((unit * Amount).toFixed(3));
  };
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-r from-pink-600 to-orange-400  flex justify-center items-center">
      <div>
        <h1 className=" text-4xl text-center m-4 font-bold ">
          Currecy Convertor
        </h1>

        <div className="sm:bg-white sm:bg-opacity-15 rounded-2xl border-2 border-white sm:backdrop-blur-xl  p-4 flex justify-center items-center w-full flex-wrap">
          <main>
            <Input
              Amount={Amount}
              setAmount={setAmount}
              setselectedCountry={fromsetselectedCountry}
              selectedCountry={fromselectedCountry}
              text="From"
            />
            <Input
              Amount={convertedAmt}
              setAmount={setconvertedAmt}
              setselectedCountry={tosetselectedCountry}
              selectedCountry={toselectedCountry}c
              text="To"
            />
            <div className="w-full flex justify-center">
              <button
                className=" w-11/12 h-20 rounded-lg bg-orange-700 text-white mx-auto text-xl"
                onClick={Calculate}
              >
                Convert
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CurrecyConvertor;
