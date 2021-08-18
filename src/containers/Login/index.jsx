import  "./index.css";
import CustomInput from "../../components/CustomInput";
import { inputProps, listeEmailPassword } from "../../constants";
import React, { useState } from "react";
import { isTextExist, isValidEmail, searchInDatabase } from "../../utils/Stringutils";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErreur,setemailErreur]=useState("");
  const [passwordErreur,setpasswordErreur]=useState("");
  const [success,setsuccess]=useState("");
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
    if(searchInDatabase(email,password,listeEmailPassword)===undefined){
     setemailErreur("Email inexistant");
    }
    else if(searchInDatabase(email,password,listeEmailPassword)==='text1 requis'){
      setemailErreur("champ requis: Email");
    }
    else if(searchInDatabase(email,password,listeEmailPassword)==='text2 requis'){
      setpasswordErreur("champ requis: Password");
      
    }
    else if(searchInDatabase(email,password,listeEmailPassword)==='deux text requis'){
      setpasswordErreur("champ requis: Password");
      setemailErreur("champ requis: Email");
    }
    else if(searchInDatabase(email,password,listeEmailPassword).password===password){
       setsuccess("Connexion réussie");
    }
    else{
      setpasswordErreur("Password incorect");
    }
   };
  return (
    <div class='stylediv'>
      <h3>Login Form</h3>
      
      <i class="fa fa-check-circle-o" aria-hidden="true"></i><div className='stylediv2'>{success}</div>
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
        textErreurEmail={emailErreur}
        textErreurPassword={passwordErreur}
      ></CustomInput>
      
       
    </div>
  );
};
export default Login;
