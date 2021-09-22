import React, { useEffect, useState, useRef } from "react";
import "./KpiTemplate.css";
import { Link } from "react-router-dom";

function KpiTemplate(props) {
  const keyRef = useRef(null);
  const [division, setDivision] = useState();
  const [empset, empsetSelection] = useState();
  const [target, setTarget] = useState(5);
  const [room, setRoom] = useState("");
  const [name, setFullname] = useState("");
  const customKeyValue = "customKey";

  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   console.log(setDivision)
  // }

  // const divisionHandleChange = (e) => {
  //   e.preventDefault();
  //   setDivision(e.target.value);
  //   console.log(setDivision);
  // };

  // const formOnSubmit = (e) => {
  //   e.preventDefault();
  //   history.push('/step2')

  // }
  // useEffect(() => {
  //   if (empset === customKeyValue) {
  //     if (keyRef.current) {
  //       keyRef.current.focus();
  //     }
  //   }
  // }, [empset, keyRef]);

  return (
    <div>
    <form className="">
    <div>
        <h1>KPI Performance</h1>
      </div>
     <div className="kpiForm__maindiv"> 
     
      
      <div>
        <label htmlFor="empDivision" className="joinLabel">Employee Division</label>
        <select onChange={(e) => setDivision(e.target.value)} value={division}  className="joinInput">
              <input type="text" />
               <option>Select Division</option>
              <option>HR</option>
              <option>Development</option>
              <option>Sales</option>
              <option>Delivery Team</option>
              <option>Staffing</option>
              <option value={customKeyValue} >&lt;Enter New Division&gt;</option>
            </select>
      </div>
      <div>
        <label className="joinLabel"> Employee Set Selection </label>
      <select
              onChange={(e) => empsetSelection(e.target.value)}
              className="joinInput"
              value={empset}
            >
              <option>Select Set</option>
              <option>1</option>
              <option>2</option>
            </select>
      </div>
      <div>
            <label> Employee name </label>
            <input className="joinInput" />
          </div>
     </div>
      <div>
      <div className="kpi__down">
          
         <div>
         <label> KPI A </label>
          <input />
         </div>
         <div>
         <label>  Weightage </label>
          <input />
         </div>
         <div>
         <label> Target </label>
          <input />
         </div>
         </div>
      </div>
     
      {/* <div>
        <label />
        <button className="primary" type="submit">
          Submit
        </button>
      </div> */}
      
    </form>
  </div>
  );
}

export default KpiTemplate;
