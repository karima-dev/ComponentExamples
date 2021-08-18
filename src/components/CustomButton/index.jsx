import { Button } from "react-bootstrap";

const index = ({ color, text, type }) => {
  return (
    <Button variant={color} type={type}>
      {text}
    </Button>
  );
};
export default index;
