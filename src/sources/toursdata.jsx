import { FaTools } from "react-icons/fa";
import { MdBuild } from "react-icons/md";
import { GiElectric } from "react-icons/gi";
import Renewable from "../assets/RenewableEnergySolutions.png";

export const trips = [{
    place: "",
    price: "",
    rate:  "",
    loc: "",
    duration:  "",
    acc: "",
}]

export const tripPackages = [
    {
      title: "Renewable Energy Solutions",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokrIclGFGMMOs1Buu259cf0C2IM5LwrTibA&s",
      desc1: "Solar Panel Installation & Maintenance.",
      desc2: "Wind Energy Solutions.",
      desc3: "Energy Efficiency Consultation",
      desc4: "Battery Storage Systems.",
      desc5: "Off-Grid & Hybrid Power Solutions.",
      
    },
    {
      title: "Civil Construction Services",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKPK95nUk-Ks26EY0x8ozJeeFTp-KC9_Zrw&s",
      desc1: "Residential & Commercial Construction.",
      desc2: "Infrastructure Development.",
      desc3: "Structural Engineering.",
      desc4: "Road & Bridge Construction.",
      desc5: "Renovation & Restoration.",
    },
    {
      title: "Plumbing Services",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4yi8aE4oO28cCF66NRfGKyVy5fyIiuC140Q&s",
      desc1: "Water Supply & Drainage Systems.",
      desc2: "Residential & Commercial Plumbing.",
      desc3: "Pipeline Installation & Repairs.",
      desc4: "Sewage & Wastewater Management.",
      desc5: "Leak Detection & Maintenance.",
    },
   
  ];
  
  export const servicesData = [
    {
      name: "Professional Installation",
      icon: <FaTools size={24} />,
    },
    {
      name: "Maintenance & Support",
      icon: <MdBuild size={24} />,
    },
    {
      name: "Energy Efficiency Consulting",
      icon: <GiElectric size={24} />,
    },
  ];