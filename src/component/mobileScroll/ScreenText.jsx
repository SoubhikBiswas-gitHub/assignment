import React, { useEffect, useRef, useState } from "react";

const ScreenText = ({ data, index, setImgIndex }) => {
  const ref = useRef(null);
  console.log(ref)
  const [textVisibility, setTextVisibility] = useState(false);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  };

  const observerText = (e) => {
    if (e[0]?.isIntersecting) {
      setTextVisibility(!textVisibility);
      setImgIndex(index)
    }
  };

  useEffect(() => {
    const observar = new IntersectionObserver(observerText, options);
    if (!textVisibility) {
      if (ref.current) {
        observar.observe(ref.current);
      }
    }

    return ()=>{
      if(ref.current){
        observar.unobserve(ref.current)
      }
    }
  },[]);

 

  return (
    <div className={`screen-text ${textVisibility?"text-visible":""}`} ref={ref}>
      <div className="screen-heading">{data.heading}</div>
      <div className="only-mobile mobile-wrapper">
        <div className="mobile">
          <div className="mobile-screen flex absolute-center">
            <img
            key={data.imgURL}
              src={data.imgURL}
              alt="img"
              className="mobile-img slide-in-right"
            />
          </div>
        </div>
      </div>
      <div className="screen-description">{data.description}</div>
    </div>
  );
};

export default ScreenText;
