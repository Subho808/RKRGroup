import "../index.css";
import aboutBg from "../assets/about.png";
export default function CompanyOverview() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-screen bg-gradient-to-b from-white via-[#d5e4ea] to-zinc-100 py-10">
      <div className="flex flex-col gap-4 mt-28 items-center">
        <h1 className="tracking-tighter font-bold text-xs lg:text-sm text-zinc-800 block">
          ABOUT US
        </h1>

        <div className="text-center py-8 text-[#86aebf] tracking-tighter">
          <h1 className="text-[30px] lg:text-8xl font-black">R.K.R Group</h1>
          <h2 className="font-bold text-zinc-600 pt-4">
            leading provider of renewable energy solutions, civil construction
            services, and plumbing services
          </h2>
        </div>

        <div className="lg:flex flex-col items-center justify-center lg:mx-10 lg:px-10 hidden">
          <img
            className="rounded-3xl object-center brightness-110  lg:h-[400px] lg:w-screen object-contain"
            src={aboutBg}
            alt=""
          />
        </div>

        <div className="flex flex-col items-center justify-center px-10 lg:hidden">
          <img
            className="rounded-full object-center brightness-110  lg:h-[400px] lg:w-screen object-cover"
            src={aboutBg}
            alt=""
          />
        </div>

        <div className="flex flex-col lg:px-20 items-center">
          <h1 className="tracking-tighter font-bold text-xs lg:text-sm text-zinc-800 py-8">
            About RKR Group
          </h1>

          <h2 className="lg:px-80 px-10 text-center font-semibold tracking-tight leading-relaxed lg:text-xl">
            RKR GROUP is a leading provider of renewable energy solutions, civil
            construction services, and plumbing services, committed to
            delivering innovative and sustainable solutions for residential,
            commercial, and industrial projects. With a focus on quality,
            efficiency, and environmental responsibility, we strive to meet the
            growing demands of modern infrastructure and green energy
            initiatives.
          </h2>
        </div>
      </div>
    </div>
  );
}
