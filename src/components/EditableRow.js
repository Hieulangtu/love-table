import React from 'react'

/*
Function: EditableRow 
A component to take the data from the 'editing' row, save them instead of the old data in that row.

Props:
dataChange: a place to save the changing data
handleDataChange: handle the editing data
handleCancelClick: cancel adding the 'editing' data and keep the old data
handleDataChangeConfirm: allow to add the 'editing' data instead of the old data
*/
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
        
        <td>
            <button type="submit" className="btn btn-sm btn-outline-success" onClick={handleDataChangeConfirm}><i className="bi bi-clipboard-plus">Save</i></button>
            <button type="button" className="btn btn-sm btn-outline-danger" onClick={handleCancelClick}><i class="bi bi-x-octagon-fill">Cancel</i></button>
        </td>
    </tr>
  )
}

export default EditableRow