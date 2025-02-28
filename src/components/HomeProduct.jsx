import React from "react";
import { Link } from "react-router-dom";

function ProductOverview() {
  return (
    <div className="w-screen bg-gradient-to-b from-white via-[#d5e4ea] to-zinc-200">
      <div className="flex flex-col lg:justify-center lg:items-center justify-start">
        
        {/* Our Goals Section */}
        <div className="flex flex-col lg:flex-row items-center lg:w-[900px] text-center lg:text-left lg:gap-10">
          <div className="flex flex-col py-8 lg:py-0 lg:w-1/2">
            <h1 className="py-10 tracking-tighter font-bold text-lg lg:text-xl text-zinc-600">
              Our Goals
            </h1>
            <h1 className="lg:text-2xl text-md px-10 lg:px-0 font-bold tracking-tight text-zinc-600">
              Our mission is to provide eco-friendly, cost-effective, and high-quality 
              solutions that contribute to a sustainable future. We aim to revolutionize 
              the construction and energy sectors by integrating cutting-edge 
              technologies and best industry practices.
            </h1>
          </div>
          {/* Image on Right Side */}
          <img
            src="https://www.owlguru.com/wp-content/uploads/wpallimport/files/energy-engineers/__(1).jpg"
            className="w-60 lg:w-80 rounded-lg object-cover my-8"
            alt="Our Goals"
          />
        </div>

        {/* Our Mission Section */}
        <div className="flex flex-col lg:flex-row items-center lg:w-[900px] text-center lg:text-left lg:gap-10 " style={{marginBottom:"30px"}}>
          {/* Image on Left Side */}
          <img
            src="https://media.licdn.com/dms/image/v2/D4D12AQFx9Zb10PJG8g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1718620114110?e=2147483647&v=beta&t=pIQ61HstVN0FvfMGY34suygEqWReBkTSE52P_I72zrc"
            className="w-60 lg:w-80 rounded-lg object-cover my-8"
            alt="Our Mission"
          />
          <div className="flex flex-col py-8 lg:py-0 lg:w-1/2 ">
            <h1 className="py-10 tracking-tighter font-bold text-lg lg:text-xl text-zinc-600">
              Our Mission
            </h1>
            <h1 className="lg:text-2xl text-md px-10 lg:px-0 font-bold tracking-tight text-zinc-600 mb-20px">
              Our aim is to forge robust and valued relationships with our customers 
              and provide the same level of dedication and customization to all our projects. 
              Superior customer service backs our high-quality products and components. 
              We endeavor to reduce customer effort to the minimal and take complete responsibility 
              of the entire process right from product explanation to installation and even beyond.
            </h1>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default ProductOverview;
