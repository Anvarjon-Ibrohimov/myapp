import React from "react";

// import images
import AboutImg from "./images/About.png";

function About() {
  return (
    <div className="container mx-auto">
      <h2 className=" text-center font-bold text-[24px] xl:text-left xl:text-[48px]">
        About Us
      </h2>
      <div className="about-us-box xl:flex xl:justify-between xl:flex-row-reverse">
        <img
          src={AboutImg}
          alt="About Us"
          className="mx-auto xl:w-[35%] xl:relative xl:top-[-50px]"
        />
        <div className="about-us-text p-3 xl:w-[50%] xl:text-left xl:p-0 xl-m-5">
          <p className="text-center text-[#8F95A5] text-[16px] xl:text-left xl:my-7">
            The model offers a framework for discussing problems related to the
            user's experience, as well as possible ways and means of solving
            them. Application development begins at the top level (strategy),
            where the future software product is described quite abstractly from
            the point of view of the expectations of both users and the
            customer.
          </p>
          <div className="about-us-datas text-center xl:flex xl:items-center xl:gap-10 xl:justify-start">
            <div className="about-us-data p-4">
              <p className="text-[#2A3246] text-[24px] text-bold p-2">800</p>
              <p className="text-[#8F95A5] text-[15px]">Pupils</p>
            </div>
            <div className="about-us-data">
              <p className="text-[#2A3246] text-[24px] text-bold p-2">18</p>
              <p className="text-[#8F95A5] text-[15px]">Teachers</p>
            </div>
            <div className="about-us-data">
              <p className="text-[#2A3246] text-[24px] text-bold p-2">6</p>
              <p className="text-[#8F95A5] text-[15px]">Foreign languages</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
