import React, { useCallback, useEffect, useRef, useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("Password@123❌");
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [specialCharacter, setSpecialCharater] = useState(false);
  const [initialRender, setinitialRender] = useState(true);
  const PasswordRef = useRef(null)
  const [copyColor, setcopyColor] = useState('bg-blue-700')
  const [copyText,setcopyText] = useState('Copy') 

  const generateStrongPassword = useCallback(() => {
    console.log("passowerd generator rrendered")
    let myArr = "ABCDEFGHIJKLMNPQRSTUVWXYXabcdefghijklmnopqrstuvwxyz";
    let n = length;
    if (number) {
      myArr += "012345678012345678";
    }
    if (specialCharacter) {
      myArr += "!@#$%^&*()?~!@#$%^&*()?~";
    }
    let pass = "";
    for (let i = 0; i < n; i++) {
      let random = Math.floor(Math.random() * myArr.length);
      pass += myArr[random];
    }

    setPassword(pass);
  }, [length, specialCharacter, number] );

const copyTextfunc = ()=>{
  PasswordRef.current?.select();
  window.navigator.clipboard.writeText(password)
  setcopyText('Copied!')
  setcopyColor('bg-orange-300')
}

  useEffect(() => {
    if (initialRender) {
      setinitialRender(false);
      console.log("here");
      return;
    }
    generateStrongPassword();
    setcopyText("Copy")
    setcopyColor('bg-blue-700')
  }, [length, specialCharacter, number]);

  return (
    <div className="h-screen  flex-col justify-center items-center">
      <div className="flex justify-center items-center bg-black  flex-col  h-full w-full ">
        <h1 className="text-white text-3xl text-center">PassWord Generator</h1>
        <div className="flex justify-center items-center mt-5 w-3/4 flex-wrap">
          <input className=" w-96 bg-white h-15 p-6 rounded-md text-2xl outline-none cursor-default" ref={PasswordRef} value={password} readOnly/>
          <button className={`h-20 ${copyColor} text-center p-6 text-white rounded-md`}
          onClick={copyTextfunc}
          >
            {copyText}
          </button>
          
        </div>

        <div className="flex flex-wrap justify-center items-center p-5 gap-3">
          <input
            type="range"
            min={8}
            max={25}
            value={length}
            className="cursor-pointer range-slider rounded-lg  "
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <p className="text-orange-500 text-2xl">{`length(${length})`}</p>
          <div>
            <input
              type="checkbox"
              name=""
              id=""
              className="w-10 h-7"
              onChange={(e) => setNumber(!number)}
            />
            <label className="text-orange-500 text-2xl">Numbers</label>
          </div>
          <div>
            <input
              type="checkbox"
              name=""
              id=""
              className="w-10 h-7"
              onChange={(e) => setSpecialCharater(!specialCharacter)}
            />
            <label className=" text-orange-500 text-2xl ">
              Special character
            </label>
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default PasswordGenerator;
