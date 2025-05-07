import React from "react";

const Slider = () => {
  return (
    <div>
      <div className="carousel w-full rounded-xl">
        <div id="item1" className="carousel-item w-full h-[40vh] lg:h-[70vh]">
          <img src="/slide3.jpg  " className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full h-[40vh] lg:h-[70vh]">
          <img src="/slide2.jpg" className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full h-[40vh] lg:h-[70vh]">
          <img src="/slide1.jpg" className="w-full" />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default Slider;
