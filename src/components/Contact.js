import React from "react";

// import images
import ContactImg from "./images/contact.png";
import Button from "./Button";

function Contact() {
  return (
    <div className="container mx-auto">
      <h2 className="text-center font-bold text-[24px] my-[30px] xl:text-[48px]">
        Contact
      </h2>
      <div className="contact-box p-3 xl:flex items-center">
        <img src={ContactImg} alt="Contact Part" className="mx-auto" />
        <div className="contact-content xl:w-[50%]">
          <p className="my-5 text-center text-[#8F95A5] xl:text-left">
            Discover your current English level by taking our free online
            English test. Sign up to our newsletter for learning tips and free
            resource
          </p>
          <form className="flex flex-col justify-center gap-3 xl:flex xl:flex-row items-center xl:justify-start">
            <input
              placeholder="Enter Your E-mail"
              type="email"
              className="px-10 py-3 w-[90%] outline-none border-[1px] border-[#8F95A5] rounded-md xl:px-15 xl:py-3"
            />
            <button className="px-10 py-5 bg-[#263238] text-[#fff] my-5 rounded-[5px] active:scale-95 xl:py-3 w-[90%] xl:w-[auto]">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
