export const customNavbarProps = {
  default: {
    background: "primary",
    variant: "dark",
    navHome: "#home",
    className: "me-auto",
    logo: "My web site",
    navLink: [{ link: "#home", text: "Homed" }],
  },
  dark: {
    background: "dark",
    variant: "dark",
    navHome: "#home",
    className: "me-auto",
  },
  light: {
    background: "light",
    variant: "light",
    navHome: "#home",
    className: "me-auto",
  },
};
export const logoProps = {
  url: "https://static.vecteezy.com/system/resources/thumbnails/002/229/196/small_2x/beauty-lotus-flowers-design-logo-template-icon-free-vector.jpg",

  default: {
    width: "50px",
    height: "50px",
  },
  smartphone: {
    width: "25px",
    height: "25px",
  },
  tablette: {
    width: "30px",
    height: "30px",
  },
};
export const navLinks = [
  { link: "#home", text: "Home" },
  { link: "#about", text: "About" },
  { link: "#hfeatures", text: "Features" },
];

export const CardProps = {
  default: {
    width: "18em",
    place: "top",
    urlImage:
      "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg",
    titre: "Pas d'image",
    text: "Pas d'image",
  },
  poiSenteur: {
    width: "38em",
    place: "top",
    urlImage:
      "https://www.flower.fr/ddoc-316-46d494e60e2c202c41d2e328a2010fb4-abc-pois-senteur-jpg",
    titre: "Pois de Senteur",
    text: "Le Pois de senteur (Lathyrus odoratus) est une espèce de plante herbacée annuelle de la famille des Fabaceae originaire du sud-est de l'Italie et de la Sicile.",
  },
};
export const buttonProps={
color:"primary",
text:"bien"
};