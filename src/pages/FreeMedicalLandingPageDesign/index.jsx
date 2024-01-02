import React from "react";

import { Button, Img, Line, Text } from "components";

const FreeMedicalLandingPageDesignPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col items-center justify-end mx-auto md:px-10 sm:px-5 px-[61px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1788px] mx-auto w-full">
          <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[77px] w-[28%] md:w-full">
            <Text
              className="md:text-5xl text-8xl text-blue_gray-900"
              size="txtIBMPlexSansBold96"
            >
              <span className="text-white-A700 font-ibmplexsans text-left font-bold">
                Pro-
              </span>
              <span className="text-blue-800 font-ibmplexsans text-left font-bold">
                Health
              </span>
            </Text>
            <Text
              className="mt-1 sm:text-[41px] md:text-[47px] text-[55px] text-white-A700"
              size="txtInterBold55"
            >
              <>
                Doctor Finding
                <br />
                Landing Page
                <br />
                Design
              </>
            </Text>
            <Line className="bg-white-A700 h-px mt-[43px] w-[92%]" />
            <Text
              className="md:ml-[0] ml-[5px] mt-[103px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
              size="txtInterRegular36"
            >
              Well Organised
            </Text>
            <Text
              className="md:ml-[0] ml-[5px] mt-2.5 text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
              size="txtInterRegular36"
            >
              Free Elements
            </Text>
            <Text
              className="md:ml-[0] ml-[5px] mt-3.5 text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
              size="txtInterRegular36"
            >
              Free For Use
            </Text>
            <Button
              className="cursor-pointer font-bold font-inter leading-[normal] min-w-[425px] sm:min-w-full mt-[122px] text-center text-xl"
              shape="round"
            >
              Get Your Copy Now
            </Button>
          </div>
          <div className="md:h-[3104px] h-[3182px] relative w-[69%] md:w-full">
            <div className="absolute h-[960px] right-[0] top-[0] w-[54%] md:w-full">
              <Img
                className="h-[960px] m-auto object-cover w-full"
                src="images/img_image1.png"
                alt="imageOne"
              />
              <div className="absolute backdrop-opacity-[0.5] bg-black-900_87 blur-[500.00px] h-[855px] inset-[0] justify-center m-auto w-[64%]"></div>
            </div>
            <Img
              className="absolute h-[3104px] inset-y-[0] left-[0] my-auto object-cover w-[84%]"
              src="images/img_image1_3104x1026.png"
              alt="imageOne_One"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeMedicalLandingPageDesignPage;
