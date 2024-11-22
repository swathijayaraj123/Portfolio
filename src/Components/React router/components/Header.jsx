import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const [project, setProject] = useState("");
  const [firstLoad, setfirstLoad] = useState(true);

  const click = () => {
    console.log("currect value is " + project);
    const element = document.getElementById(project);
    console.log("here");
    console.log(element);
    element.click();
    setProject("");
  };
  useEffect(() => {
    if (firstLoad) {
      console.log("here");
      setfirstLoad(false);
      return;
    }
    if (project == "") return;
    click();
  }, [project]);

  return (
    <nav className="sm:p-5 border-2 border-black rounded-lg  sm:mx-20 sm:my-5 flex flex-wrap justify-around">
      <div>
        <div className=" text-4xl font-serif font-extrabold  text-center">
          Swathi
        </div>
        <p className="text-blue-900 font-light text-xl">Web Developer</p>
      </div>

      <ul className=" relative top-4">
        <NavLink
          to=""
          className={({ isActive }) =>
            `m-6 ${
              isActive ? "text-orange-500" : "text-gray-700"
            } font-serif text-xl hover:text-orange-500 `
          }
        >
          {" "}
          Home
        </NavLink>

        <NavLink
          to="contact"
          id="contact"
          className={({ isActive }) =>
            `m-6  ${
              isActive ? "text-orange-500" : "text-gray-700"
            }  font-serif text-xl hover:text-orange-500 `
          }
        >

          Contact
        </NavLink>
        <NavLink
          to={project}
          id={project}
          className={({ isActive }) =>
            ` ${
              isActive ? "text-orange-500" : "text-gray-700"
            }  m-6 hidden text-gray-700 font-serif text-xl hover:text-orange-500  `
          }
        >
          Password Generator
        </NavLink>

        <NavLink
          to='dynamicformgenerator'
          className={(isActive)=>{
            `${
              isActive ? "text-orange-500" : "text-gray-700"
            }  m-6 hidden text-gray-700 font-serif text-xl hover:text-orange-500 `
          }}
        >Dynamic form generator</NavLink>
        
     
        <select
          name=""
          id=""
          className="bg-purple-400 p-2 rounded-lg outline-none"
          onChange={(e) => {
            const value = e.target.value;
            setProject(value);
          }}
        >
          <option value="">Select Project</option>
          <option value="passwordGenerator">Password Generator</option>
          <option value="ColorChanger">BGChager</option>
          <option value="CurrencyConvertor">Currecy Convertor</option>
          <option value="todo">TODO APP</option>
        </select>

      </ul>
      <button className=" px-6 rounded-xl border-2 border-orange-600 bg-gradient-to-r from-pink-700 to-orange-500 ">
        Contact Me
      </button>
    </nav>
  );
};

export default Header;
