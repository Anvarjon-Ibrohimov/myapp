import React from "react";

import learn from "./images/Learn.png";

function Header() {
  return (
    <div className="container mx-auto">
      <div className="header xl:flex xl:align-middle  xl:items-center xl:flex-row-reverse">
        <div className="header-img text-center w-[90%] m-auto">
          <img src={learn} alt="Learn img" />
        </div>
        <div className="header-content text-center font-mono xl:text-left">
          <h1 className="text-center text-4xl font-bold xl:text-left xl:text-5xl xl:text-[64px]">
            Learn Any <br /> Foreign Language
          </h1>
          <p className="text-[#8F95A5] my-10 text-base xl:text-left xl:text-lg">
            With our teachers who write a program for each student, you will be
            able to make your first sketch after the first lesson.
          </p>
          <button className=" px-[50px] py-5 rounded-md bg-slate-800 active:scale-95 text-[#fff]">
            Get started
          </button>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Header;
