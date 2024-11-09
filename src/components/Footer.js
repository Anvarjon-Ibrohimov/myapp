import React from "react";

import Logo from "./images/Britlex.png";

function Footer() {
  return (
    <div className="container mx-auto p-4">
      <div className="footer border-t-2 py-5 flex justify-center flex-col items-center gap-3 xl:flex xl:justify-between xl:flex-row">
        <img src={Logo} alt="Logo" />
        <p className="text-[#8F95A5] text-[11px] xl:text-[24px]">
          Terms and Conditions • Privacy Policy • Cookie Policy
        </p>
      </div>
    </div>
  );
}

export default Footer;
