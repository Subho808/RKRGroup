import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";

import Home from "./pages/homepage";
import Aboutpage from "./pages/aboutpage";
import FutureBusinessPage from "./pages/FutureBusinessPage";
import OurServices from "./pages/OurServices";
import WhyUsPage from "./pages/WhyUsPage";
import { useEffect } from "react";
import MessageUsPage from "./pages/MessageUsPage";
import CareerPage from "./pages/CareerPage";

function App() {
  
  const { pathname } = useLocation();
  useEffect(()=>{
window.scrollTo(0,0)
  },[pathname])

  return (
    <>
      <ChakraProvider>  
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/OurServices" element={<OurServices />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/FutureBusiness" element={<FutureBusinessPage />} />
            <Route path="/whyUs" element={<WhyUsPage />} />
            <Route path="/messageUs" element={<MessageUsPage />} />
            <Route path="/career" element={<CareerPage />} />
          </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;
