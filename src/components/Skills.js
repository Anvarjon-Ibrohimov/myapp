import React from "react";

// import images
import SpeakingImg from "./images/speaking.png";
import WritingImg from "./images/writing.png";
import ReadingImg from "./images/reading.png";
import ListeningImg from "./images/listening.png";

// import Btn
import Button from "./Button";

function Skills() {
  return (
    <div className="container mx-auto">
      <h2 className="text-center text-[24px] font-bold my-10 xl:text-[48px]">
        Skills
      </h2>
      <div className="skills-box  xl:grid xl:grid-cols-3 xl:grid-rows-2">
        <div className="skills-item-1 my-5 xl:my-0 bg-[#F5F5F5] p-4  rounded-[5px] xl:col-start-1 xl:col-end-2 xl:row-start-1 xl:row-end-3 xl:w-[95%] xl:h-[82%]">
          <img src={SpeakingImg} alt="Speaking Part" className="mx-auto" />
          <div className="skills-item-content">
            <h3 className="font-bold my-5 text-[18px] xl:text-[25px]">
              Speaking
            </h3>
            <p className="text-[#8F95A5] text-[13px] xl:py-10 xl:text-[19px]">
              Improve your English skills and confidence. Live classes and
              interactive lessons online. 20% extra free for a limited time only{" "}
              <br /> <br />
              Learn English online and improve your skills through our
              high-quality courses and resources – all designed for adult
              language learners.
            </p>
            <Button name="Learn more" />
          </div>
        </div>
        <div className="skills-item-2  bg-[#F5F5F5] p-4  rounded-[5px] xl:col-start-2 xl:col-end-3 xl:row-start-1 xl:row-end-2 xl:w-[95%] xl:h-[465px] ">
          <img src={WritingImg} alt="Writing Part" className="mx-auto" />
          <div className="skills-item-content ">
            <h3 className="font-bold xl:my-5 text-[18px] xl:text-[25px]">
              Writing
            </h3>
            <p className="text-[#8F95A5] text-[13px] xl:text-[19px]">
              One of the most important and extensive areas of natural science,
              the science that studies substances, also their composition{" "}
            </p>
            <Button name="Learn more" />
          </div>
        </div>
        <div className="skills-item-3 my-5 xl:my-0  bg-[#F5F5F5] p-4   rounded-[5px] xl:col-start-3 xl:col-end-4 xl:row-start-1 xl:row-end-2 xl:w-[95%] xl:h-[465px]">
          <img src={ReadingImg} alt="Reading Part" className="mx-auto" />
          <div className="skills-item-content">
            <h3 className="font-bold my-5 text-[18px] xl:text-[25px]">
              Reading
            </h3>
            <p className="text-[#8F95A5] text-[13px] xl:py-4 xl:text-[19px]">
              perception and response actions of the user resulting from the use
              and or up coming use of the product, system or service
            </p>
            <Button name="Learn more" />
          </div>
        </div>
        <div className="skills-item-4 my-5 bg-[#F5F5F5] p-4 xl:my-6 rounded-[5px] xl:col-start-2 xl:col-end-4 xl:row-start-2 xl:row-end-3 xl:w-[97%] xl:h-[269px] xl:flex x:text-center xl:flex-row-reverse">
          <img src={ListeningImg} alt="Listening Part" className="mx-auto" />
          <div className="skills-item-content">
            <h3 className="font-bold my-3 text-[18px] xl:text-[25px]">
              Listening
            </h3>
            <p className="text-[#8F95A5] text-[13px] xl:py-3 xl:text-[19px]">
              Here you can find activities to practise your listening skills.
              Listening will help you to improve your understanding{" "}
            </p>
            <Button name="Learn more" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
