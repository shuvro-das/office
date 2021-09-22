import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import CostTable from "./components/CostTable";
import KpiTemplate from "./components/KpiTemplate";
import './components/KpiTemplate.css'



function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            

            <Link className="brand" to="/">
              KPI Employee
            </Link>
          </div>
          <div>
             <Link to="/">Sign In</Link> 
         </div>
         
          <div>
            
          
            
          </div>
        </header>
     
        <main>
        <Route path="/" component={CostTable} exact></Route>
        </main>
        <footer className="row center">
         
          <div style={{marginLeft: "170rem"}}>All right reserved</div>{" "}
        </footer>
      </div>
    </BrowserRouter>
  );
}


export default App;
// import React from 'react'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     useParams,
//   } from "react-router-dom";
//   import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
//   import Home from './components/KpiTemplate.js';
//   import EmpList from './components/SearchBox.js';

 

// class BootstrapNavbar extends React.Component{

//     render(){
//         return(
//             <div>
//                 <div className="row">
//                     <div className="col-md-12">
//                         <Router>
//                             <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
//                                 <Navbar.Brand href="#home">KPI Employee</Navbar.Brand>
//                                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                                 <Navbar.Collapse id="basic-navbar-nav">
//                                     <Nav className="mr-auto">
//                                     <Nav.Link href="/">Home</Nav.Link>
//                                     <Nav.Link href="/emp-list">Employee List</Nav.Link>
                                   
//                                     {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                                         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                                         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//                                         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                                         <NavDropdown.Divider />
//                                         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//                                     </NavDropdown> */}
//                                     </Nav>
//                                     <Form inline>
                                   
//                                     </Form>
//                                 </Navbar.Collapse>
//                             </Navbar>
//                             <br />
//                             <Switch>
//                                 <Route exact path="/">
//                                     <Home />
//                                 </Route>
//                                 <Route path="/emp-list">
//                                     <EmpList />
//                                 </Route>
                                    
//                             </Switch>
//                         </Router>
//                     </div>
//                 </div>
//             </div>
//         )  
//     }
// }

// export default BootstrapNavbar;












// // import logo from './logo.svg';
// // import './App.css';
// // import KpiTemplate from './components/KpiTemplate';
// // import { BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom'
// // import KpiTemplateTwo from './components/KpiTemplateTwo';

// // function App() {
// //   return (
// //    <Router>
// //      <Switch>
// //        <Route path="/" exact>
// //          <KpiTemplate />
// //        </Route>

// //         </Switch>
// //      <Switch>
// //        <Route path="/step2">
// //           <KpiTemplateTwo />
// //        </Route>
// //      </Switch>
// //    </Router>
// //   );
// // }

// // export default App;
