import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import { customNavbarProps } from "./constants";
import Logo from "./components/CustomNavbar/Logo";
import { navLinks, CardProps, buttonProps } from "./constants";
import CustomCard from "./components/CustomCard";
function App() {
  return (
    <div>
      <CustomNavbar
        background={customNavbarProps.light.background}
        variant={customNavbarProps.light.variant}
        logo={<Logo />}
        navLinks={navLinks}
      />
       
      <CustomCard 
        width={CardProps.poiSenteur.width}
        place={CardProps.poiSenteur.place}
        url={CardProps.poiSenteur.urlImage}
        titre={CardProps.poiSenteur.titre}
        text={CardProps.poiSenteur.text}
        boutonprop={buttonProps}
      /> 
    </div>
  );
}

export default App;
