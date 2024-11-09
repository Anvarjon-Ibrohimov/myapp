import React from "react";

function Button(props) {
  return (
    <button className="px-10 py-5 bg-[#263238] text-[#fff] my-5 rounded-[5px] active:scale-95 xl:py-3">
      {props.name}
    </button>
  );
}

export default Button;
