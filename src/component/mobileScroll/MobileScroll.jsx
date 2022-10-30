import "./mobileScroll.css";

import React, { useState } from "react";
import ScreenText from "./ScreenText";

const dataDB = [
  {
    heading: "we’ve got your back.",
    description:
      "gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.",
    imgURL:
      "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold1.png",
  },
  {
    heading: "begin your winning streak.",
    description:
      "use your CRED coins to participate in games and raffles to win the most exclusive rewards and cashbacks on CRED. good luck.",
    imgURL:
      "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold2.png",
  },
  {
    heading: "for your eclectic taste.",
    description:
      "get access to the CRED Store, a member-exclusive selection of products and experiences at special prices that complement your taste. this is the good life they speak of.",
    imgURL:
      "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold3.png",
  },
  {
    heading: "more cash in your pockets.",
    description:
      "switch to CRED RentPay and start paying rent with your credit card. this way you get up to 45 days of credit free period, more reward points and a happy landlord.",
    imgURL:
      "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold4.png",
  },
];

const MobileScroll = () => {
  const [imgIndex, setImgIndex] = useState[0];
  return (
    <div className="max-width flex mobile-scroll">
      <div className="scroll-screen-wrapper">
        {dataDB.map((data, index) => (
          <div className="scroll-screen">
            <ScreenText
              data={data}
              key={index}
              index={index}
              setImgIndex={setImgIndex}
            />
          </div>
        ))}
      </div>
      <div className="mobile-wrapper non-mobile">
        <div className="mobile">
          <div className="mobile-screen flex absolute-center">
            <img
              src={dataDB[imgIndex].imgURL}
              alt="img"
              className="mobile-img slide-in-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScroll;
