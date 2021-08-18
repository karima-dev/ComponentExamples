import { Card } from "react-bootstrap";
import { CardProps,buttonProps } from "../../constants";
import bouton from '../CustomButton';
const index = ({
  width = CardProps.default.width,
  place = CardProps.default.place,
  url = CardProps.default.urlImage,
  titre=CardProps.default.titre,
  text=CardProps.default.text,
  boutonprop=buttonProps,
}) => {
  return (
    <div style={{marginLeft:'10px'}}>
    <Card style={{ width: width}}>
      <Card.Img variant={place} src={url} />
      <Card.Body>
        <Card.Title>{titre}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
         
        <bouton color={boutonprop.color} text={boutonprop.text}/>
      </Card.Body>
    </Card>
    </div>
  );
};
export default index;
