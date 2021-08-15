import Nav from "react-bootstrap/Nav";
const CustomNavLinks = ({ link, text }) => {
  return <Nav.Link href={link}>{text}</Nav.Link>;
};
export default CustomNavLinks;
