import React from "react";
import first from "../../../public/women-web-developer-with-laptop.svg";
import skills from "../../../public/skills.jpg";
import js from "../../../public/js.png";
import udemy from '../../../public/udemy.jpg'
const Home = () => {
  console.log(first);
  return (
    <div>
      <div className=" min-w-screen flex justify-center items-center  ">
        <div className="flex flex-wrap lg:p-10 w-full justify-between ">
          <img src={first} alt="" className="sm:w-1/2 lg:w-1/2" />
          <main className="sm:w-1/2 w-full lg:p-10 p-3 text-left ">
            <h1 className="text-5xl font-medium">
              Crafting Seamless <span className=" text-purple-800">Web</span>{" "}
              Experiences with{" "}
              <span className=" text-orange-500 text-6xl sha shadow-inner shadow-orange-600">
                Code
              </span>
            </h1>
            <h1 className="text-4xl font-serif mt-3">Hi, I’m Swathi! 👋</h1>

            <p className="text-xl font-thin mt-4">
              I'm a Computer Science graduate and a MERN stack web developer
              passionate about building innovative solutions. I enjoy taking on
              new challenges and creating impactful web applications. I'm always
              eager to learn and grow, and I'm open to work, interviews, or
              take-home assignments. Let’s connect!.
            </p>

            <button
              className="w-3/4 p-4 m-2 rounded-full text-xl text-white bg-purple-600 font-mono"
              onClick={(e) => {
                const ele = document.getElementById("contact");
                ele.click();
              }}
            >
              Connect
            </button>
          </main>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap-reverse w-full justify-between">
              <div className="flex justify-center items-center bg-yellow-400 sm:w-1/2 rounded-l-full w-full p-10 sm:p-0 ">
              <div>
                <p className="text-2xl m-2">✅ JavaScipt</p>
                <p className="text-2xl m-2">✅ ReactJS</p>
                <p className="text-2xl m-2">✅ Tailwind CSS</p>
                <p className="text-2xl m-2">✅ HTML5</p>
                <p className="text-2xl m-2">✅ CSS3</p>
                <p className="text-2xl m-2">✅ MongoDB</p>
                <p className="text-2xl m-2">✅ NodeJS</p>
                <p className="text-2xl m-2">✅  MERN Stack</p>
                <p className="text-2xl m-2">✅ Git/Github</p>
                <p className="text-2xl m-2">✅ Figma</p>
                
              </div>
              </div>
              

          <img src={skills} className="sm:w-1/2 w-full" alt="" />
        </div>

        <div className="min-h-screen min-w-screen bg-blue-950 pb-5 mt-10">
            <h1 className="text-center text-white sm:text-5xl text-2xl p-5 font-extrabold font-serif ">See Certifications</h1>
            <img src={udemy}  className='sm:w-1/2 w-11/12 mx-auto rounded-lg ' alt="udemy certificate" />
        </div>
      </div>
    </div>
  );
};

export default Home;
