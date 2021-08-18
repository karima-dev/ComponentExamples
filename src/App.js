import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import { customNavbarProps } from "./constants";
import Logo from "./components/CustomNavbar/Logo";
import { navLinks, CardProps, buttonProps,slidesProps,lesSlides } from "./constants";
import CustomCard from "./components/CustomCard";
import CustomCarosel from "./components/CustomCarosel";
import Login from "./containers/Login";
function App() {
  return (
    <div>
      <CustomNavbar
        background={customNavbarProps.light.background}
        variant={customNavbarProps.light.variant}
        logo={<Logo />}
        navLinks={navLinks}
      />
      {/*  <CustomCarosel nosSlides={lesSlides}/> */}
       <Login/>
      
    </div>
  );
}

export default App;
