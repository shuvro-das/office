import React from 'react'

function KpiTemplateTwo() {
    return (
        <div>
          
          <label for="ice-cream-choice">Choose a flavor:</label>
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

<datalist id="ice-cream-flavors"/>
    <option value="Chocolate"/>
    <option value="Coconut"/>
    <option value="Mint"/>
    <option value="Strawberry"/>
    <option value="Vanilla"/>
<datalist/>

        </div>
    )
}

export default KpiTemplateTwo






{/* <div className="joinOuterContainer">
      <div className="joinInnerCountainer">
        <h1 className="heading">KPI Template</h1>

        <div className="kpi__top">
          <div>
            {/* <label> Select Your Division </label>
            <select onChange={(e) => setDivision(e.target.value)} value={division}  className="joinInput">
              <input type="text" />
               <option>Select Division</option>
              <option>HR</option>
              <option>Development</option>
              <option>Sales</option>
              <option>Delivery Team</option>
              <option>Staffing</option>
              <option value={customKeyValue} >&lt;Enter New Division&gt;</option>
            </select> */}
            {/* <label for="myBrowser" className="joinLabel">Choose a browser from this list:</label>
            <input list="browsers" id="myBrowser" name="myBrowser" /> */}
            // <label for="browser">Choose your browser from the list:</label>
  
    //       </div>
    //       <div>
    //         <label> Select Set </label>
    //         <select
    //           onChange={(e) => empsetSelection(e.target.value)}
    //           className="joinInput"
    //           value={empset}
    //         >
    //           <option>Select Set</option>
    //           <option>1</option>
    //           <option>2</option>
    //         </select>
    //       </div>
    //     </div>
    //     <div className="kpi__down">
    //       <div>
    //         <label className="joinLabel">Employee Name</label>
    //         <input className="joinInput" />
    //       </div>
    //       <div>
    //         <label className="joinLabel">Weightage</label>
    //         <input className="joinInput" />
    //       </div>
    //       <div>
    //         <label className="joinLabel">Target</label>
    //         <input className="joinInput" value={target} />
    //       </div>
    //     </div>

    //     <Link
    //       onClick={(event) => (!name || !room ? event.preventDefault() : null)}
    //       to={`/chat?name=${name}&room=${room}`}
    //     >
    //       <button className="button mt-20" type="submit">
    //         Submit
    //       </button>
    //     </Link>
    //   </div>
    // </div> */}