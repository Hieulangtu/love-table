import React from 'react'

// Add những input và gợi ý cho môn 2 là : Teorie Graf
const AddRow2 = ({handleDataAdd,handleDataAddConfirm}) => {
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
            list="temas2"
         />
              <datalist id="temas2">
                  <option value="Grafy - základní pojmy"/>
                  <option value="Podgrafy"/>
                  <option value="Cesty a cykly v grafu"/>
                  <option value="Stromy, cykly a bipartitní grafy"/>
                  <option value="Izomorfismus grafů"/>
                  <option value="Vrcholová a hranová souvislost"/>
                  <option value="Párování a pokrytí"/>
                  <option value="Hranová barvení grafů"/>
                  <option value="Vrcholová barvení grafů"/>
                  <option value="Planární grafy, Neplanární grafy"/>
                  <option value="Eulerovské a hamiltonovské grafy"/>
                  <option value="Orientované grafy"/>
                  <option value="Toky v sítích"/>
                  <option value="Síťová analýza"/>
              </datalist>
      </td>
              
      <td>
        <input
            type="text"
            name="ucebna" 
            required="required" 
            placeholder="Enter the room..."
            onChange={handleDataAdd}
            list="rooms2"
        />
           <datalist id="rooms2">
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
            list="teachers2"
        />
        <datalist id="teachers2">
              <option value="Potůček, Radovan"/>
                               
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
export default AddRow2