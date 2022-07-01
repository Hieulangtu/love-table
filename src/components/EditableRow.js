import React from 'react'

/**
EditableRow:
* A component to take the data from the 'editing' row, save them instead of the old data in that row.
* @component
* @param {object} dataChange: data we set to change
* @param {Function} handleDataChange: handle the dataChange
* @param {Function} handleCancelClick: cancel adding the 'editing' data and keep the old data
* @param {Function} handleDataChangeConfirm: allow to use dataChange (data which was edited) instead of the old data
*/
const EditableRow = ({dataChange,handleDataChange,handleCancelClick,handleDataChangeConfirm}) => {
  return (
    <tr style={{'backgroundColor':'rgb(245, 182, 66)'}}>
        <td style={{'backgroundColor':'rgb(245, 182, 66)'}}></td>
        <td style={{'backgroundColor':'rgb(245, 182, 66)'}}>
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
        <td style={{'backgroundColor':'rgb(245, 182, 66)'}}>
            <input 
              type="text"
              name="ucebna" 
              required="required" 
              placeholder="Enter the room..."
              value={dataChange.ucebna}
              onChange={handleDataChange}
             ></input>
        </td>
        <td style={{'backgroundColor':'rgb(245, 182, 66)'}}>
            <input 
              type="text"
              name="ucitel" 
              required="required" 
              placeholder="Enter the lecturer..."
              value={dataChange.ucitel}
              onChange={handleDataChange}
            ></input>
        </td>
        
        <td style={{'backgroundColor':'rgb(245, 182, 66)'}}>
            <button type="submit" className="btn btn-sm btn-outline-success" onClick={handleDataChangeConfirm}><i className="bi bi-clipboard-plus">Save</i></button>
            <button type="button" className="btn btn-sm btn-outline-danger" onClick={handleCancelClick}><i class="bi bi-x-octagon-fill">Cancel</i></button>
        </td>
        <td style={{'backgroundColor':'rgb(245, 182, 66)'}}>

        </td>
    </tr>
  )
}

export default EditableRow