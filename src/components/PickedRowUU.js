import React from 'react'

/**
PickedRowUU:
* A component to use the changing data to fill in the picked rows, save them instead of the data in those rows.
* @component
* @param {Function} handleDataPickedUU: handle the changing data
* @param {Function} handleDataPickedUUConfirm: allow to save the 'changing' data instead of the old data 
*/
const PickedRowUU = ({handleDataPickedUU,handleDataPickedUUConfirm}) => {
  return (
    <tr>
       <td style={{'background-color': 'aquamarine'}}></td>
       <td style={{'background-color': 'aquamarine'}}><strong>Change Ucebna , Ucitel</strong></td>
       <td style={{'background-color': 'aquamarine'}}>
       <input 
              type="text"
              name="ucebna" 
              required="required" 
              placeholder="Enter the topic..."
            
            //   value="helo con cac"   value là giá trị. Áp dụng : có cmnr sẵn trên ô input cho mình sửa
              onChange={handleDataPickedUU}
            ></input>
       </td>
       <td style={{'background-color': 'aquamarine'}}>
       <input 
              type="text"
              name="ucitel" 
              required="required" 
              placeholder="Enter the lecturer..."
            
              onChange={handleDataPickedUU}
            ></input>
       </td>
       <td style={{'background-color': 'aquamarine'}}>
          <button type='button' className="btn btn-bm btn-outline-success" onClick={handleDataPickedUUConfirm} ><i className="bi bi-clipboard-plus">Save Changes</i></button>
       </td>
       <td>

       </td>
       {/* <td style={{'background-color': 'aquamarine'}}></td> */}
    </tr>
  )
}

export default PickedRowUU