import React, { useState } from 'react'


/**
Navbar: 
* navigation bar, Click to go to another page : Home, Authors and Introduction
                                   also return a switch button Darkmode
* @component
*/
const Navbar = (props) => {

  // Function darkLightMode to set className for the tag to decide if they are dark or white
  function darkLightMode() {
    var element = document.body;
    var kt=document.getElementById("mySwitch");
    var rows=document.getElementsByTagName('table');
     
    if(kt.checked===true ){
      element.className="dark-mode";
      for(let row of rows ){
        row.className="table table-hover table-dark";
      }
      
     
    }else{
      element.className="light-mode";
      for(let row of rows ){
        row.className="table table-hover table-bordered table-striped";
      }
   
    }
  }

 
  return (
    // <div style={{'background-color':'rgb(117, 201, 250)', 'height':'250px','width':'100%','text-align':'center','display': 'flex'}}>
    // <h1 style={{'font-size': '100px','margin': 'auto'}}>SPRÁVU TÉMAT V PŘEDMĚTU</h1>
    // </div>
    <nav className='nav'>
    <a style={{"margin":"0 auto"}} href='/' className='site-title'><h1 style={{"font-size":"60px"}} >SPRÁVU TÉMAT V PŘEDMĚTU</h1> </a>
    
    
    <ul>           
      <div style={{"margin-top":"5%"}} class="form-check form-switch">
         <input class="form-check-input" type="checkbox" id="mySwitch" name="darkmode" style={{"margin-top":"34%","width":"89%"}} onClick={darkLightMode} />
         <label class="form-check-label" for="mySwitch">Dark Mode</label>
      </div>
      
      <li>
        <a href="/introduction">introduction</a> 
      </li>

      <li>
        <a href="/authors">Authors</a>
        </li>
    </ul>

  </nav>
  )
}

export default Navbar