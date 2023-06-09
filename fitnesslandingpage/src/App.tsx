import { useEffect, useState } from "react";
import Navbar from "./scenes/navbar";
import { SelectedPage } from "@/shared/types";
import Home from "./scenes/home";
import Benefits from "./scenes/benefits";
import OurClasses from "./scenes/ourclasses";
import ContactUs from "./scenes/contactus";
import Footer from "./scenes/footer";




function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY != 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      ></Navbar>

      <Home setSelectedPage={setSelectedPage}></Home>
      <Benefits setSelectedPage={setSelectedPage}></Benefits>
      <OurClasses setSelectedPage={setSelectedPage}></OurClasses>
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer/>
    </div>
  );
}

export default App;
