import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const [project, setProject] = useState("");
  const [firstLoad, setfirstLoad] = useState(true);
 
  const click = () => {

    const element = document.getElementById(project);
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
    <div>
    <nav className="sm:p-5  rounded-lg p-2 sm:mx-20 sm:my-5 flex flex-wrap justify-around">
      <div>
        <div className=" text-4xl font-serif font-extrabold  text-center">
          Swathi
        </div>
        <p className="text-blue-900 font-light text-xl">Web Developer</p>
      </div>
   

      <ul className=" relative top-4 ">
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
    </nav>
    </div>
  );
};

export default Header;
