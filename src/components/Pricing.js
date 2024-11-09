import React from "react";

// import images
import selfStudy from "./images/selfstudy.png";
import onlinecourse from "./images/liveonline.png";
import personalTution from "./images/personaltution.png";
import Button from "./Button";

function Pricing() {
  return (
    <div className="container mx-auto">
      <h2 className="text-[24px] text-[#000000] font-bold text-center my-10 xl:text-[48px]">
        Pricing
      </h2>
      <div className="pricing-box flex flex-col p-3 justify-center text-center gap-3 xl:grid xl:grid-cols-3">
        <div className="pricing-item border-[1px] p-3">
          <img src={selfStudy} alt="Self Study" />
          <div className="pricing-item-content">
            <h3 className="text-[#263238] font-bold  py-3">
              Self-study online course
            </h3>
            <p className="text-[#8F95A5] py-2">
              Start learning English online in live classes with qualified EC
              teachers and students from all over the world.
            </p>
            <button className="px-[15px] rounded-[5px] my-5  bg-[#eee]  py-3 active:scale-95">
              <span> £5.99</span> per month
            </button>
          </div>
        </div>
        <div className="pricing-item border-[1px] p-3">
          <img src={onlinecourse} alt="Online Course" />
          <div className="pricing-item-content">
            <h3 className="text-[#263238] font-bold py-3">
              Live online classes
            </h3>
            <p className="text-[#8F95A5] py-2">
              Interactive group classes with expert teachers. Free 7-day trial
            </p>
            <button className="px-[15px] py-3 my-5  rounded-[5px] bg-[#eee] active:scale-95 xl:mt-[75px]">
              <span> £12.99</span> per month
            </button>
          </div>
        </div>
        <div className="pricing-item border-[1px] p-3">
          <img src={personalTution} alt="Personal Tution" />
          <div className="pricing-item-content">
            <h3 className="text-[#263238] font-bold py-3">Personal Tuition</h3>
            <p className="text-[#8F95A5] py-2">
              Online one-to-one English tutoring – enjoy our first session for
              only $1
            </p>
            <button className="px-[15px] py-3 my-5 rounded-[5px] bg-[#eee] active:scale-95">
              <span> £20.99</span> per month
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
