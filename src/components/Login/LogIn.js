import React, { useState, Fragment } from 'react'
import "./LogIn.css"

/*
Component LogIn: return a place to log in user name and password
props:
 handleLogInSucceed: check succeed or not
 handleRemember: check do you want to remember or not
*/ 
const LogIn = ({handleLogInSucceed,handleRemember}) => {
  const dataUser=[{uname:'hieu',psw:'1905'},{uname:'lam',psw:'0211'}];
  const [dataLogIn,setDataLogIn]=useState({uname:'',psw:''});
//   const [dataUser,setDataUser]=useState([{uname:'hieu',psw:'1905'},{uname:'lam',psw:'0211'}]);

  const handleDataLogIn=(event)=>{
    event.preventDefault();
    const fieldName=event.target.getAttribute('name');
    const fieldValue=event.target.value;

    const newDataLogIn={...dataLogIn};
    newDataLogIn[fieldName]=fieldValue;
    setDataLogIn(newDataLogIn);
    console.log(dataLogIn);
  }

  function containPassword(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].uname === obj.uname && list[i].psw === obj.psw) {
            return true;
        }
    }
    return false;
}


  function checkRemember() {
    var checkOrNot = document.getElementById("remember").checked;
    if(checkOrNot===true){
        return true
    }else{
        return false
    }
  }

  const handleLogin=(event)=>{
    event.preventDefault();
    if(containPassword(dataLogIn, dataUser)){ 
        handleLogInSucceed(); 
        if(checkRemember()===true){
            handleRemember(); 
        }
        
    }else{
        alert("wrong Username or Password !")
    }
    console.log(checkRemember());
  }

  return (
    <Fragment>
<h1>Login</h1>

<form >
  <div class="imgcontainer">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png" alt="Avatar" class="avatar"/>
    

  </div>

  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required="required" onChange={handleDataLogIn} />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required="required" onChange={handleDataLogIn}/>
        
    <button className='buttonLogIn' type="button" onClick={handleLogin}>Login</button>
    <br></br>
    <label>
      <input className="form-check-input" id='remember' type="checkbox" name="remember"/> Remember me
    </label>
  </div>

  {/* <div class="container" style={{"background-color":"#f1f1f1"}}>
    <button className='buttonLogIn' type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div> */}
</form>
</Fragment>
  )
}

export default LogIn