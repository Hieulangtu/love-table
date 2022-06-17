// import logo from './logo.svg';

import React, { useState, Fragment } from "react";
import "./App.css";
import data from "./mock-data.json"
import TableBodyTo from "./components/TableBodyTo";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

const App=()=>{

      // const [bigData,setBigData]=useState(data);
      const bigData=data;
      return(     
        <div style={{'margin':'auto'}}>
          <div style={{'background-color':'rgb(117, 201, 250)', 'height':'250px','width':'100%','text-align':'center','display': 'flex'}}>
            <h1 style={{'font-size': '100px','margin': 'auto'}}>SPRÁVU TÉMAT V PŘEDMĚTU</h1>
          </div>
        {bigData.map((dataSubject,index)=>(                          
          <Fragment >         
           {/* <TableBodyTo dataSubs={dataSubject} indexSubject={index}/> */}
             <LabelAndTable dataSubs={dataSubject} indexSubject={index} />
             <br/>
           </Fragment>
           )          
        )}
        </div>
      )

}

function LabelAndTable({dataSubs,indexSubject}){
  const [showInformatika,setShowInformatika]=useState(false);
  const [showMatematika,setShowMatematika]=useState(false);
  const [showTG,setShowTG]=useState(false);
  const [showEnglish,setShowEnglish]=useState(false);
  if(indexSubject===0){
    return(
      <Fragment>
        <button style={{"margin":'auto','display':'flex','font-size':'50px','margin-bottom':'5px'}} type='button' onClick={()=>setShowInformatika(!showInformatika)}>Informatika</button>
        {showInformatika&&<TableBodyTo dataSubs={dataSubs} indexSubject={indexSubject}/>}
      </Fragment>
    )
  }else if(indexSubject===1){
    return(
      <Fragment>
        <button style={{"margin":'auto','display':'flex','font-size':'50px','margin-bottom':'5px'}} type='button' onClick={()=>setShowMatematika(!showMatematika)}>Matematika</button>
        {showMatematika&&<TableBodyTo dataSubs={dataSubs} indexSubject={indexSubject}/>}
      </Fragment>
    )
  }else if(indexSubject===2){
    return(
      <Fragment>
        <button style={{"margin":'auto','display':'flex','font-size':'50px','margin-bottom':'5px'}} type='button' onClick={()=>setShowTG(!showTG)}>Teorie Graf</button>
        {showTG&&<TableBodyTo dataSubs={dataSubs} indexSubject={indexSubject}/>}
      </Fragment>
    )
  }else{
    return(
      <Fragment>
        <button style={{"margin":'auto','display':'flex','font-size':'50px','margin-bottom':'5px'}} type='button' onClick={()=>setShowEnglish(!showEnglish)}>English</button>
        {showEnglish&&<TableBodyTo dataSubs={dataSubs} indexSubject={indexSubject}/>}
      </Fragment>
    )
  }
}

// function App1(props){
//   const [infoShow,setInfoShow]=useState(false)
//   return(
//     <Fragment>
//       <button type='button' onClick={()=>setInfoShow(true)}>Informatika</button>
//       {infoShow&&<App/>}
//     </Fragment>
//   )
// }


export default App;


