// import logo from './logo.svg';

import React, { useState, Fragment } from "react";
import "./App.css";
import data from "./mock-data.json"
import dataSuggests from "./suggests.json"
import PlanOfStudy from "./components/PlanOfStudy";
import Navbar from "./components/Navbar";
import LogIn from "./components/Login/LogIn";

function LabelAndTable({dataSubs,indexSubject}){
  const [showInformatika,setShowInformatika]=useState(false);
  const [showMatematika,setShowMatematika]=useState(false);
  const [showTG,setShowTG]=useState(false);
  const [showEnglish,setShowEnglish]=useState(false);
  if(indexSubject===0){
    return(
      <Fragment>
        <button style={{"margin":'auto','display':'flex','font-size':'50px','margin-bottom':'5px'}} type='button' onClick={()=>setShowInformatika(!showInformatika)}>Informatika</button>
        {showInformatika&&<PlanOfStudy dataSubs={dataSubs} indexSubject={indexSubject} dataSuggests={dataSuggests}/>}
      </Fragment>
    )
  }else if(indexSubject===1){
    return(
      <Fragment>
        <button style={{"margin":'auto','display':'flex','font-size':'50px','margin-bottom':'5px'}} type='button' onClick={()=>setShowMatematika(!showMatematika)}>Matematika</button>
        {showMatematika&&<PlanOfStudy dataSubs={dataSubs} indexSubject={indexSubject} dataSuggests={dataSuggests}/>}
      </Fragment>
    )
  }else if(indexSubject===2){
    return(
      <Fragment>
        <button style={{"margin":'auto','display':'flex','font-size':'50px','margin-bottom':'5px'}} type='button' onClick={()=>setShowTG(!showTG)}>Teorie Graf</button>
        {showTG&&<PlanOfStudy dataSubs={dataSubs} indexSubject={indexSubject} dataSuggests={dataSuggests}/>}
      </Fragment>
    )
  }else{
    return(
      <Fragment>
        <button style={{"margin":'auto','display':'flex','font-size':'50px','margin-bottom':'5px'}} type='button' onClick={()=>setShowEnglish(!showEnglish)}>English</button>
        {showEnglish&&<PlanOfStudy dataSubs={dataSubs} indexSubject={indexSubject} dataSuggests={dataSuggests}/>}
      </Fragment>
    )
  }
}

const Main=()=>{

      // const [bigData,setBigData]=useState(data);
      const bigData=data;

      return(     
        <div style={{'margin':'auto'}}>
          <Navbar/>
          {bigData.map((dataSubject,index)=>(                                  
             <LabelAndTable dataSubs={dataSubject} indexSubject={index} dataSuggests={dataSuggests} />
           )          
        )}
        </div>
      )

}

const App=()=>{
  const [startStav,setStartStav]=useState(false) ;
  const handleLogInSucceed=()=>{
    setStartStav(true);
  }
  return(
    startStav===false? <LogIn handleLogInSucceed={handleLogInSucceed}/> : <Main/> 
  )
}




export default App;


