import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* container  */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 text-sm sm:text-m md:text-xl ">
          Hi, my name is{" "}
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Jatin</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          A Front-End Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] ">
          Welcome to my portfolio website! I'm a passionate front-end developer
          specializing in ReactJS. With a keen eye for detail and a dedication
          to excellence, I consistently deliver high-quality solutions that
          exceed client expectations. My goal is to create immersive and
          user-friendly web experiences that leave a lasting impact. Let's build
          something extraordinary together!
        </p>
        <div>
          <button className=" text-white group border-2 px-6 py-3 my-2 flex items-center  hover:bg-pink-600 hover:border-pink-600 transition-all">
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
