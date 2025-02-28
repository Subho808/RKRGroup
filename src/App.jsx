import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
import "./App.css";

import Home from "./pages/homepage";
import Aboutpage from "./pages/aboutpage";
import FutureBusinessPage from "./pages/FutureBusinessPage";
import OurServices from "./pages/OurServices";
import WhyUsPage from "./pages/WhyUsPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ChakraProvider>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/OurServices" element={<OurServices />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/FutureBusiness" element={<FutureBusinessPage />} />
          <Route path="/whyUs" element={<WhyUsPage />} />
        </Routes>
      </ChakraProvider>
    </Router>
  );
}

export default App;
