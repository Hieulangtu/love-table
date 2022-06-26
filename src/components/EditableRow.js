import React from 'react'

const EditableRow = ({dataChange,handleDataChange,handleCancelClick,handleDataChangeConfirm}) => {
  return (
    <tr style={{'backgroundColor':'rgb(245, 182, 66)'}}>
      <td></td>
        <td>
            <input 
              type="text"
              name="tema" 
              required="required" 
              placeholder="Enter the topic..."
              value={dataChange.tema}
            //   value="helo con cac"   value là giá trị. Áp dụng : có cmnr sẵn trên ô input cho mình sửa adu adu
              onChange={handleDataChange}
            ></input>
        </td>
        <td>
            <input 
              type="text"
              name="ucebna" 
              required="required" 
              placeholder="Enter the room..."
              value={dataChange.ucebna}
              onChange={handleDataChange}
             ></input>
        </td>
        <td>
            <input 
              type="text"
              name="ucitel" 
              required="required" 
              placeholder="Enter the lecturer..."
              value={dataChange.ucitel}
              onChange={handleDataChange}
            ></input>
        </td>
        {/* <td>
        
          <select 
               name="cas" 
               id="time-select"
               required="required"
               placeholder='choose the times'
               value={dataChange.cas}
               onChange={handleDataChange}> 
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
              value={dataChange.den}
              onChange={handleDataChange}
            ></input>
        </td> */}
        <td>
            <button type="submit" className="btn btn-sm btn-outline-success" onClick={handleDataChangeConfirm}><i className="bi bi-clipboard-plus">Save</i></button>
            <button type="button" className="btn btn-sm btn-outline-danger" onClick={handleCancelClick}><i class="bi bi-x-octagon-fill">Cancel</i></button>
        </td>
    </tr>
  )
}

export default EditableRow