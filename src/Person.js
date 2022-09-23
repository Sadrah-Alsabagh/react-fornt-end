// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { Stack } from "react-bootstrap";
// import axios from "axios";

// export default function Person() {
//   const [name, setName] = useState("Your name: ");
//   const [age, setAge] = useState("Your age: ");
//   const [gender, setGender] = useState("Your gender: ");
//   const [newAge, setNewAge] = useState("Your age + 5 Years");

//   function handleSubmit(e) {
//     e.preventDefault();
//     setName(e.target.formName.value)
//     setAge(e.target.formAge.value)
//     setGender(e.target.formGender.value)
//     getNewAge()
//     console.log(e.target.formName.value)
//   }


//   function handleNameChange(e) {
//     setName(e.target.value)
//   }

//   function handleAgeChange(e) {
//     setAge(e.target.value)
//   }

//   function handleGenderChange(e) {
//     setGender(e.target.value)
//   }


//   async function getNewAge() {
    
//     await axios.post(`${process.env.REACT_APP_SERVER_URL}/person?name=${name}&age=${age}&gender=${gender}`)
//     .then(res => {
//         setNewAge(res.data)
//         console.log(res.data)
//     })
//     .catch(err => {
//       console.log(err);
//     })
    
//   }

//   return (
//     <div data-testid="person">
//       <h2> Write Your information ...</h2>

//       <Form onSubmit={handleSubmit}>
//       <Stack gap={2} className="col-md-4 mx-auto">
//         <Form.Group>
//           <Form.Label>name</Form.Label>
//           <Form.Control type="text" placeholder="Enter Name" id="formName" data-testid="name-input" onChange={handleNameChange}/>
//         </Form.Group>

//         <Form.Group>
//           <Form.Label>age</Form.Label>
//           <Form.Control type="text" placeholder="Enter Age" id="formAge" data-testid="age-input" onChange={handleAgeChange}/>
//         </Form.Group>

     
//         <Form.Select id="formGender" data-testid="gender-input" onChange={handleGenderChange}>
//           <option>gender</option>
//           <option value="Male" >Male</option>
//           <option value="Female" >Female</option>
//         </Form.Select>

//         <Button variant="outline-dark" type="submit" data-testid="submit">
//           Submit
//         </Button>
//         </Stack>
//       </Form>

//         <div className="info">
//         <h2> Your Information</h2>
//         <br></br>
//         <p data-testid="name-output" >name: {name}</p>
//         <p data-testid="age-output" >age: {age}</p>
//         <p data-testid="gender-output" >gender: {gender}</p>
//         { newAge && <p data-testid="new-age-output" >New Age: {newAge}</p> }

//         </div>

//     </div>
//   );
// }



import axios from 'axios';
import React from 'react';
import {useState} from 'react';





export default function Person(){
const [info, setInfo] = useState({});
const [submitted, setSubmitted]=useState(false);


const handleChange = (e)=>{
  const value = e.target.vlaue;
  
  setInfo({
    ...info,
  [e.target.name]:value
  });
  }


  const handleSubmit =async (e)=>{
  e.preventDefault();
try{
  const res = await axios.post('http://localhost:3000/person', info);
  info.age = res.data;
  setSubmitted(true);
  }catch(e){
setInfo({});
setSubmitted(false);
  }
}
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type ="text" name ='name' onChange={handleChange}/>
        <input type ="text" name ='age' onChange={handleChange}/>
        <input type ="text" name ='gender' onChange={handleChange}/>
        <button type ="submit">Send</button>

        
      </form>

      <div>
      <p> name {info.name}</p>
      <p> age {info.age}</p>
      <p>gender {info.gender}</p>
      </div>
    </div>
  )
}