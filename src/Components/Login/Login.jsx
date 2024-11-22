import "./Login.css";
import { useState } from "react";

const Login = () => {
  const [Login, SetLogin] = useState(true);
  const [Register, setRegister] = useState(false);

  function setlogin() {
    SetLogin(true);
    setRegister(false);
  }
  function setregister() {
    SetLogin(false);
    setRegister(true);
  }

  return (
    <div className="bg-blue-600 rounded-md flex justify-center items-center w-full min-h-screen sm:mx-auto">
      
      <form action="" >
        {Register ? <h1 className="text-2xl text-center pb-4">Register</h1> : <></>}
        {Login ? <h1 className="text-2xl text-center pb-4">Login</h1> : <></>}
        {Register ? (
          <div className="flex  justify-between ">
            <label className="text-xl pt-2">Name</label>
            <input
              className="rounded-md  min-h-[50px] px-5 text-xl  outline-none"
              type="text"
              placeholder="enter your name"
            />
          </div>
        ) : (
          <></>
        )}

        <div className="flex  justify-between ">
          <label className="text-xl pt-2">Email</label>
          <input
            className="rounded-md  min-h-[50px] px-5 text-xl  outline-none"
            type="email"
            placeholder="enter your email"
          />
        </div>

        <div className="flex    justify-between">
          <label className="text-xl pt-2">Password</label>
          <input
            className="rounded-md min-h-[50px] px-5 text-xl  outline-none"
            type="password"
            placeholder="enter your password"
          />
        </div>

        {Register ? (
          <div className="flex  justify-between">
            <label className="text-xl pt-2">Confirm</label>
            <input
              className="rounded-md  min-h-[50px] px-5 text-xl  outline-none"
              type="password"
              placeholder="confirm password"
            />
          </div>
        ) : (
          <></>
        )}

        <div className="flex justify-center">
          {Register ? (
            <input
              type="button"
              value="Register"
              className="min-h-[50px] mt-5  bg-green-600 text-xl text-white w-3/4 rounded-md hover:bg-green-400"
            />
          ) : (
            <></>
          )}

          {Login ? (
            <input
              type="button"
              value="Login"
              className="min-h-[50px] mt-5 bg-green-600 text-xl text-white w-3/4 rounded-md hover:bg-green-400"
            />
          ) : (
            <></>
          )}
        </div>

        {Login ? (
          <div className="existing-user-prompt" onClick={setregister}>
            create an account
          </div>
        ) : (
          <></>
        )}

        {Register ? (
          <div className=" cursor-pointer" onClick={setlogin}>
            already have an account?Login
          </div>
        ) : (
          <></>
        )}
      </form>
    </div>
  );
};

export default Login;
