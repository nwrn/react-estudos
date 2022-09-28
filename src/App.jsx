import { useState } from "react";

export default function App(){

  /*
  const[name,setName] = useState("Gustavo Matheus")
  const[email,setEmail] = useState("gmnp98@gmail.com")
  const handleNameChange = (e)=>{
    console.log("*** handleNameChange", e.target.value)
    setName(e.target.value)
  }
  const handleEmailChange=(e)=>{
    console.log("*** handleEmailChange", e.target.value);
    setEmail(e.target.value);
  }; */

  const[formValue, setFormValue] = useState({});

  const handleInputChange = (e)=>{
    const {name, value} = e.target;
    console.log("*** handleInputChange", name, value);
    
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log("*** handleSubmit: ",data);
  };

  return(
    <>
      <h1>Formulário React</h1>

      <form onSubmit={handleSubmit}>
          <input type="text" name="input" placeholder="input" onChange={handleInputChange}/>
          <button type="submit">Enviar</button>
      </form>
    </>
  );

}