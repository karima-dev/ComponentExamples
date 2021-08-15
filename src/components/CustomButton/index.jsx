import { Button } from "react-bootstrap";

const index = ({ color, text }) => {
  return <Button variant={color}>{text}</Button>;
};
export default index;
