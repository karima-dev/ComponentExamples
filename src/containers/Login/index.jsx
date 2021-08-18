import CustomInput from "../../components/CustomInput";
import { inputProps } from "../../constants";
import  "./index.css";
import React, { useState } from "react";
import { isTextExist } from "../../utils/Stringutils";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErreur,setemailErreur]=useState("");
  const [passwordErreur,setpasswordErreur]=useState("");
  const handleChangeEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
     setemailErreur('');
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    setpasswordErreur('');
   };
  const handleSubmit=(event)=>{
    event.preventDefault();
    if(isTextExist(email)===false)
    setemailErreur("champ requis email");
    if(isTextExist(password)===false)
    setpasswordErreur(passwordErreur+"champ requis password");
   };
  return (
    <div>
      <CustomInput
        labelEmail={inputProps.label.labelEmail}
        labelPassword={inputProps.label.labelPassword}
        typeEmail={inputProps.type.typeEmail}
        typePassword={inputProps.type.typePassword}
        placeholderEmail={inputProps.placeholder.placeholderEmail}
        placeholderPassword={inputProps.placeholder.placeholderPassword}
        onChangeEmail={handleChangeEmail}
        onChangePassword={handleChangePassword}
        onSubmit={handleSubmit}
      ></CustomInput>
      <br></br>
      <h6 id='styleerreur'>{emailErreur}</h6>
      <h6 id='styleerreur'>{passwordErreur}</h6>
    </div>
  );
};
export default Login;
