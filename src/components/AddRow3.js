import React from 'react'

// Add những input và gợi ý cho môn 3 là : English

const AddRow3 = ({handleDataAdd,handleDataAddConfirm}) => {
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
            list="temas3"
         />
              <datalist id="temas3">
                  <option value="Cinemas"/>
                  <option value="Musics"/>
                  <option value="Vietnamese Curses"/>
                  <option value="Cuisine of Europe"/>
                  <option value="Đẹp trai là ai ?"/>              
              </datalist>
      </td>
              
      <td>
        <input
            type="text"
            name="ucebna" 
            required="required" 
            placeholder="Enter the room..."
            onChange={handleDataAdd}
            list="rooms3"
        />
           <datalist id="rooms3">
                <option value="K251"/>
                <option value="K253"/>
                <option value="K256"/>
                <option value="K258"/>
                  
            </datalist>
      </td>

      <td>
        <input                
            type="text"
            name="ucitel" 
            required="required" 
            placeholder="Enter the lecturer..."
            onChange={handleDataAdd}
            list="teachers3"
        />
        <datalist id="teachers3">
              <option value="Mulerova"/>
              <option value="Ivana"/>
              <option value="kolackova"/>
                               
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
export default AddRow3