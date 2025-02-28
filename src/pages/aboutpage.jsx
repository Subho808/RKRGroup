import React, { useEffect } from "react";
import Navbar from "../components/Navbar_2"
import CompanyOverview from "../components/AboutOverview"
import AboutTeam from "../components/AboutTeam"
import Footer from "../components/Footer_2"

export default function Aboutpage() {

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <>
        <Navbar />
        <CompanyOverview />
        <AboutTeam />
        <Footer />
        </>
    )
}