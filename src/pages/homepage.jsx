import Navbar from "../components/Navbar_2";
import Hero from "../components/HomeHero";
import Footer from "../components/Footer_2";
import ContactUsText from "../components/ContactUsText";

import ProductOverview from "../components/HomeProduct";
import HeroAbout from "../components/HomeTeam";

import HomeFutureBusiness from "../components/HomeFutureBusiness";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroAbout />
      <ProductOverview />
      <HomeFutureBusiness />
      <ContactUsText />
      <Footer />
    </>
  );
}
