
import React, { useState, Fragment } from 'react'
import "./LogIn.css"

const LogIn = ({handleLogInSucceed}) => {
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

  function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].uname === obj.uname && list[i].psw === obj.psw) {
            return true;
        }
    }

    return false;
}

  const handleLogin=(event)=>{
   
    if(containsObject(dataLogIn, dataUser)){
        handleLogInSucceed();
    }else{
        alert("wrong name or number !")
    }
     
  }


  return (
    <Fragment>
<h2>Login</h2>

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
      <input type="checkbox" name="remember"/> Remember me
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