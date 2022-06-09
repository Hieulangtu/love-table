import React from 'react'

// Add những input và gợi ý cho môn 1 là : Math
const AddRow1 = ({handleDataAdd,handleDataAddConfirm}) => {
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
            list="temas1"
         />
              <datalist id="temas1">
                  <option value="Náhodné jevy"/>
                  <option value="Empirický pojem pravděpodobnosti"/>
                  <option value="Jevy a množiny"/>
                  <option value="Náhodné veličiny"/>
                  <option value="Náhodné vektory"/>
                  <option value="Matematická statistika"/>
                  <option value="Testy statistických hypotéz"/>
                  <option value="Statistické tabulky"/>
              </datalist>
      </td>
              
      <td>
        <input
            type="text"
            name="ucebna" 
            required="required" 
            placeholder="Enter the room..."
            onChange={handleDataAdd}
            list="rooms1"
        />
           <datalist id="rooms1">
                <option value="Š8/44"/>
                <option value="Š8/43"/>
                  
            </datalist>
      </td>

      <td>
        <input                
            type="text"
            name="ucitel" 
            required="required" 
            placeholder="Enter the lecturer..."
            onChange={handleDataAdd}
            list="teachers1"
        />
        <datalist id="teachers1">
              <option value="Mayerová, Šảka"/>
              <option value="Šindlář,Vojtěch"/>                 
          </datalist>
      </td>
      
      {/* <td>
        
        <select 
               name="cas" 
               id="time-select"
               placeholder='choose the times'
               required="required" 
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
{/* type='button' là để tránh mặc định submit */}
export default AddRow1