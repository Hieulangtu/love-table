// import logo from './logo.svg';

import React, { useState, Fragment } from "react";
import "./App.css";
import data from "./mock-data.json"
import dataSuggests from "./suggests.json"
import PlanOfStudy from "./components/PlanOfStudy";
import Navbar from "./components/Navbar";
import LogIn from "./components/Login/LogIn";
import PageIntroduction from "./components/PageIntroduction";
import PageAuthors from "./components/PageAuthors";


/**
Component LabelAndTable: Return a button has name of the subject. Klick to that button and the 
                         editable table will appear
props: 
 dataSubs: data of subjects
 indexSubject: index of dataSubs in the list
*/
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


/**
Component Main : main page of home page, return Navigation Bar and list of Label and Table

*/
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

/**
Component App: Return Login page and all page
*/
const App=()=>{
  const storageUser=JSON.parse(localStorage.getItem('historyUser'))
  const [startStav,setStartStav]=useState(storageUser?? false) ;
  
  // function handleLogInSucceed: set Start Stav = true, so we can log in
  const handleLogInSucceed=()=>{
    setStartStav(true);
  }


  //function handleRemember : save the Stav = true to local storage
  const handleRemember=()=>{
    const jsonHistoryUser=JSON.stringify("true");
    localStorage.setItem('historyUser',jsonHistoryUser);
    
  }
  
  let page;
  switch(window.location.pathname){
    case "/":
      page=<Main/>
      break;
    case "/introduction":
      page=<PageIntroduction/>
      break;
    case "/authors":
      page=<PageAuthors/>
      break;
  }
  return(
    startStav===false? <LogIn handleLogInSucceed={handleLogInSucceed} handleRemember={handleRemember}/> : <div>{page}</div>
  )
  // return(
  //   startStav===false? <LogIn handleLogInSucceed={handleLogInSucceed} handleRemember={handleRemember}/> : <Main/> 
  // )
}


export default App;


