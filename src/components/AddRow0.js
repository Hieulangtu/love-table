import React from 'react'


// Add những input và gợi ý cho môn 0 là : Informatika thu nghiem ty 123
const AddRow0 = ({handleDataAdd,handleDataAddConfirm}) => {
  return (
    <tr>  
      <td></td>         
      <td>
        <input
            type="text"
            name="tema" 
            required="required" 
            placeholder="Enter the topic..."
            onChange={handleDataAdd}
            list="temas0"
         />
              <datalist id="temas0">
                  <option value="Pascal"/>
                  <option value="Python"/>
                  <option value="PHP"/>
                  <option value="Server webové aplikace"/>
                  <option value="Základní techniky"/>
                  <option value="Architektura webové aplikace"/>
                  <option value="Protokoly"/>
                  <option value="Klient webové aplikace"/>
                  <option value="Jazyky třídy Javascript"/>
                  <option value="Podpůrné prvky webové aplikace"/>
              </datalist>
      </td>
              
      <td>
        <input
            type="text"
            name="ucebna" 
            required="required" 
            placeholder="Enter the room..."
            onChange={handleDataAdd}
            list="rooms0"
        />
           <datalist id="rooms0">
                <option value="Š8/20"/>
                <option value="Š6/20"/>
                  
            </datalist>
      </td>

      <td>
        <input                
            type="text"
            name="ucitel" 
            required="required" 
            placeholder="Enter the lecturer..."
            onChange={handleDataAdd}
            list="teachers0"
        />
        <datalist id="teachers0">
              <option value="Štefek, Alexandr"/>
              <option value="Františ, Petr"/>                 
          </datalist>
      </td>
      
      {/* <td>
       
        <select 
               name="cas" 
               id="time-select"
               required="required"
               placeholder='choose the times'
               onChange={handleDataAdd}> 
            <option value="">--choose the time--</option> 
            <option value="8:00-9:30">8:00-9:30</option>
            <option value="9:50-11:20">9:50-11:20</option>
            <option value="11:40-13:10">11:40-13:10</option>
            <option value="14:30-16:00">14:30-16:00</option>
            <option value="16:20-17:50">16:20-17:50</option>
            <option value="18:10-19:40">18:10-19:40</option>
        </select>
      </td>

      <td>
        <input                
            type="date"
            name="den" 
            required="required" 
            placeholder="Enter the day..."
            onChange={handleDataAdd}
        />
      </td> */}
      
      <td>
          <button type="submit" onClick={handleDataAddConfirm}>Add</button> 
                
      </td>
      <td></td> 
    </tr>
  )
}

export default AddRow0