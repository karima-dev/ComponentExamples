import Form from "react-bootstrap/Form";
import { inputProps, buttonProps } from "../../constants";
import Button from "../CustomButton";
const index = ({
  labelEmail = inputProps.labelDefault.defaultInput1,
  labelPassword = inputProps.labelDefault.defaultInput2,
  typeEmail = inputProps.typeDefault.defaultInput1,
  typePassword=inputProps.typeDefault.defaultInput2,
  placeholderEmail=inputProps.placeholderDefault.defaultInput1,
  placeholderPassword=inputProps.placeholderDefault.defaultInput2,
  onChangeEmail,onChangePassword,
  onSubmit}
) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Label>{labelEmail}</Form.Label>
      <Form.Control
        type={typeEmail}
        placeholder={placeholderEmail}
        onChange={onChangeEmail}
      />
      <Form.Label>{labelPassword}</Form.Label>
      <Form.Control
        type={typePassword}
        placeholder={placeholderPassword}
        onChange={onChangePassword}
      />
      <Button
        color={buttonProps.color.primary}
        text={buttonProps.text.submit}
        type={buttonProps.type.submit}
      ></Button>
    </Form>
  );
};
export default index;

/* import { textInputProps } from "../../constants";
import { textInputProps2 } from "../../constants";

const {
  defaults: { placeholder: placeholders, type: types}
} = textInputProps2;
const index = ({
  type = types,
  placeholder = placeholders,
}) => (
  <Form>
    <Form.Control type={type} placeholder={placeholder} />
  </Form>
);

export default index;
  */
