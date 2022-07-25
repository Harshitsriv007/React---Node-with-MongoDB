import React from 'react';
import { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [employeeList , setEmployeeList] = useState([]);
  const [active , setActive] = useState(false);
  const [employeePost , setEmployeePost] = useState([]);
  const [getdata ,setGetdata] = useState([]);

  const getEmployees = () => {
    Axios.get("/users").then((response) => {
      const result = Object.keys(response.data).map((key) => response.data[key]);
      // console.log(result[0]);
      setGetdata(result);
      setActive(true);
    });
  };
const SubmitData=()=>{
  console.log(employeePost);
  Axios.post("/add_user",employeePost)
  .then ((response )=>{
    setEmployeeList(response.data);
    setActive(true);
    console.log(response.data);
  });
};
  const postEmployees = (e)=>
  {
    if(e.target.name === 'Email')
    {
      setEmployeePost({
        ...employeePost ,
         [e.target.name]:e.target.value.trim()});
    }
    else
    {
      setEmployeePost({
        ...employeePost ,
        [e.target.name]:e.target.value});
    }
  };
 
  return (
    <div className="App">
      <header className="App-header">
        <label>
          Email
        </label>
        <input type="text" name ="Email" onChange={(e)=>postEmployees(e)}></input>
        <label>
          Password
        </label>
        <input type="password" name ="Password" onChange={(e)=>postEmployees(e)}></input>
          <button onClick={()=>SubmitData()}>Submit</button>
        <div>
          <button onClick={()=>getEmployees()}>Get data</button>
        </div>
        {
        (active)?
        getdata.map((datavalue)=>{
          return(<>
            <div key={datavalue['_id']}>{datavalue['Email']}{datavalue['Password']}</div>
            </>);
        })
        :''
        
        }
      </header>
    </div>
  );
}

export default App;
