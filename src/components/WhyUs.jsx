import "../index.css";

export default function WhyChooseUs() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-screen bg-gradient-to-b from-white via-[#d5e4ea] to-zinc-100 py-10">
      <div className="flex flex-col gap-4 mt-28 items-center">
        <h1 className="tracking-tighter font-bold text-sm lg:text-lg text-zinc-800 block">
          WHY CHOOSE US?
        </h1>

        <div className="text-center py-8 text-[#86aebf] tracking-tighter">
          <h1 className="text-3xl lg:text-9xl font-black">Our Strengths</h1>
          <h2 className="font-bold text-zinc-600 pt-4 text-lg lg:text-2xl">
            Delivering excellence through experience, innovation, and quality
          </h2>
        </div>

        <div className="lg:flex flex-col items-center justify-center lg:mx-10 lg:px-10 hidden">
          <img
            className="rounded-3xl object-center brightness-110 lg:h-[400px] lg:w-screen object-contain"
            src="https://gdiengdesign.com/wp-content/uploads/2024/02/Renewable-Energy-Systems.jpg"
            alt="Why Choose Us"
          />
        </div>

        <div className="flex flex-col items-center justify-center px-10 lg:hidden">
          <img
            className="rounded-full object-center brightness-110 lg:h-[400px] lg:w-screen object-cover"
            src="https://gdiengdesign.com/wp-content/uploads/2024/02/Renewable-Energy-Systems.jpg"
            alt="Why Choose Us"
          />
        </div>

        <div className="flex flex-col lg:px-20 items-center">
          <h1 className="tracking-tighter font-bold text-sm lg:text-lg text-zinc-800 py-8">
            Our Core Values
          </h1>

          <div className="lg:px-80 px-10 text-center font-semibold tracking-tight leading-relaxed lg:text-xl text-zinc-700 space-y-4">
            <p>
              <span className="font-bold text-black">
                Expertise & Experience:
              </span>{" "}
              A team of highly skilled professionals with years of industry
              experience.
            </p>
            <p>
              <span className="font-bold text-black">
                Sustainability-Focused:
              </span>{" "}
              Commitment to eco-friendly and energy-efficient solutions.
            </p>
            <p>
              <span className="font-bold text-black">Quality Assurance:</span>{" "}
              Use of premium materials and advanced technology.
            </p>
            <p>
              <span className="font-bold text-black">
                Customer-Centric Approach:
              </span>{" "}
              Tailored solutions to meet specific client needs.
            </p>
            <p>
              <span className="font-bold text-black">Compliance & Safety:</span>{" "}
              Adherence to all industry regulations and safety standards.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:px-20 items-center">
          <h1 className="tracking-tighter font-bold text-sm lg:text-lg text-zinc-800 py-8">
            Our Commitment and Sustainability
          </h1>

          <div className="lg:px-80 px-10 text-center font-semibold tracking-tight leading-relaxed lg:text-xl text-zinc-700 space-y-4">
            <p>
              As a forward-thinking company, we are dedicated to reducing carbon
              footprints and promoting renewable energy adoption. Our solutions
              are designed to minimize environmental impact while maximizing
              efficiency and long-term savings for our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
