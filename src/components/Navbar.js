import React from "react";

// import images
import logo from "./images/Britlex.png";

function Navbar() {
  return (
    <nav className="flex font-mono p-5 ">
      <div className="container mx-auto">
        <div className="navbar flex justify-between m-auto items-center">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="xl:flex gap-10 items-center hidden">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="btn-group">
            <button className="border-solid border-2 px-8 py-3 rounded-lg border-slate-600 active:scale-95 hidden xl:block">
              Call me
            </button>
            <div className="burger xl:hidden flex gap-[10px] flex-col active:scale-95">
              <div className="line w-[30px] bg-black h-1"></div>
              <div className="line w-[30px] bg-black h-1"></div>
              <div className="line w-[30px] bg-black h-1"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
