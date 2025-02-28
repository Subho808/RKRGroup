import React from "react";

function FutureBusiness() {
  return (
    <div className="w-screen bg-zinc-100 flex flex-col justify-center items-center py-16">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="font-black text-3xl lg:text-4xl text-zinc-800 tracking-tight uppercase">
          Future Business
        </h1>
      </div>

      {/* Description Section */}
      <div className="mt-6 lg:mt-10 text-center text-lg lg:text-xl px-8 lg:px-40 text-zinc-700 leading-relaxed lg:leading-loose">
        <p>
          The future business focuses on advancing{" "}
          <span className="font-semibold text-[#406D83]">
            biogas production
          </span>
          through anaerobic digestion systems, purification, and industrial
          development.
        </p>

        <p>
          It also emphasizes{" "}
          <span className="font-semibold text-[#406D83]">
            waste-to-energy solutions
          </span>
          by processing organic waste and implementing sustainable fertilizer
          production.
        </p>

        <p>
          Additionally, it aims to enhance{" "}
          <span className="font-semibold text-[#406D83]">
            biogas storage and distribution
          </span>
          with compressed and liquefied biogas supply, grid injection solutions,
          and biogas-powered electricity generation.
        </p>
      </div>
    </div>
  );
}

export default FutureBusiness;
