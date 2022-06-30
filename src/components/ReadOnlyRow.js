import React from 'react'

/**
Function: ReadOnlyRow
A component to show every data and button that we can see in each row

Props:
@param {object} data: value of a row 
@param {Function} handleEditClick: handle the button 'Edit'
@param {Function} handleDeleteClick: handle the button 'Delete'
@param {Function} handleRowMoveUp: handle the button 'Move Up'
@param {Function} handleRowMoveDown: handle the button 'Move Down'
@param {object} dataSubjects: general data
@param {number} index: index of this row in the general data
@param {Array} pickedDataIdsUU: list IDs of the picked rows
@param {Function} handlePickedDataIdsUU: handle with the list of id of picked rows

*/
const ReadOnlyRow = ({data, handleEditClick,handleDeleteClick,handleRowMoveUp,
  handleRowMoveDown,dataSubjects,index,pickedDataIdsUU,handlePickedDataIdsUU}) => {

//  if(dataSubjects.length===1){
//   return(
//     <tr>
//         <td>
//           <input 
//             type='checkbox' 
//             className='check-input'
//             onChange={()=>handlePickedDataIdsUU(data.id)}
//             checked={pickedDataIdsUU.includes(data.id)}
//           />
//         </td>
//         <td>{data.tema}</td>
//         <td>{data.ucebna}</td>
//         <td>{data.ucitel}</td>
//         {/* <td>{data.cas}</td>
//         <td>{data.den}</td> */}
//         <td>
//             <button type='button' onClick={(event)=>handleEditClick(event,data)}>Edit</button>
//             <button type="button" onClick={()=>handleDeleteClick(data.id)} >Delete</button>
//         </td>
       

//     </tr>
//     )
//  }

//   if(index===0){ 
//     return(
//     <tr>
//         <td>
//           <input 
//             type='checkbox' 
//             className='check-input'
//             onChange={()=>handlePickedDataIdsUU(data.id)}
//             checked={pickedDataIdsUU.includes(data.id)}
//           />
//         </td>
//         <td>{data.tema}</td>
//         <td>{data.ucebna}</td>
//         <td>{data.ucitel}</td>
//         {/* <td>{data.cas}</td>
//         <td>{data.den}</td> */}
//         <td>
//             <button type='button' onClick={(event)=>handleEditClick(event,data)}>Edit</button>
//             <button type="button" onClick={()=>handleDeleteClick(data.id)} >Delete</button>
//         </td>
//         <td>
//             <button type='button' onClick={()=>handleRowMoveDown(data.id)}>Move Down</button>
//         </td>

//     </tr>
//     )
//   }

//   else if(index===(dataSubjects.length-1)){
//     return(
//     <tr>
//         <td><input 
//             type='checkbox' 
//             className='check-input'
//             onChange={()=>handlePickedDataIdsUU(data.id)}
//             checked={pickedDataIdsUU.includes(data.id)}
//           /></td>
//         <td>{data.tema}</td>
//         <td>{data.ucebna}</td>
//         <td>{data.ucitel}</td>
//         {/* <td>{data.cas}</td>
//         <td>{data.den}</td> */}
//         <td>
//             <button type='button' onClick={(event)=>handleEditClick(event,data)}>Edit</button>
//             <button type="button" onClick={()=>handleDeleteClick(data.id)} >Delete</button>
//         </td>
//         <td>
//             <button type='button' onClick={()=>handleRowMoveUp(data.id)}>Move Up</button>
//         </td>

//     </tr>
//     )
//   }

//   else {
//     return (
//       <tr>
//           <td><input 
//             type='checkbox' 
//             className='check-input'
//             onChange={()=>handlePickedDataIdsUU(data.id)}
//             checked={pickedDataIdsUU.includes(data.id)}
//           /></td>
//           <td>{data.tema}</td>
//           <td>{data.ucebna}</td>
//           <td>{data.ucitel}</td>
//           {/* <td>{data.cas}</td>
//           <td>{data.den}</td> */}
//           <td>
//               <button type='button' onClick={(event)=>handleEditClick(event,data)}>Edit</button>
//               <button type="button" onClick={()=>handleDeleteClick(data.id)} >Delete</button>
//           </td>
//           <td>
//             <button type='button' onClick={()=>handleRowMoveUp(data.id)}>Move Up</button>
//             <button type='button' onClick={()=>handleRowMoveDown(data.id)}>Move Down</button>
//         </td>
  
//       </tr>
//     )
     
//   }

  return(
    <tr>
        <td>
          <input 
            type='checkbox' 
            className='check-input'
            onChange={()=>handlePickedDataIdsUU(data.id)}
            checked={pickedDataIdsUU.includes(data.id)}
          />
        </td>
        <td>{data.tema}</td>
        <td>{data.ucebna}</td>
        <td>{data.ucitel}</td>
        {/* <td>{data.cas}</td>
        <td>{data.den}</td> */}
        <td>
            <button className='btn btn-sm btn-outline-warning' type='button' onClick={(event)=>handleEditClick(event,data)}><i className="bi bi-pen">Edit</i></button>
            <button className='btn btn-sm btn-outline-danger' type="button" onClick={()=>handleDeleteClick(data.id)} ><i className="bi bi-trash">Delete</i></button>
        </td>
        {
        (dataSubjects.length===1)
        ||
        (index===0
        &&<td>
            <button className='btn btn-sm btn-outline-primary' type='button' onClick={()=>handleRowMoveDown(data.id)}><i className="bi bi-arrow-down-circle-fill">Move Down</i></button>
          </td>
        )
        ||
        (index===(dataSubjects.length-1)
        &&<td>
            <button className='btn btn-sm btn-outline-primary' type='button' onClick={()=>handleRowMoveUp(data.id)}><i className="bi bi-arrow-up-circle-fill">Move Up</i></button>
          </td>
        )
        ||
        (true
        &&<td>
            <button className='btn btn-sm btn-outline-primary' type='button' onClick={()=>handleRowMoveUp(data.id)}><i className="bi bi-arrow-up-circle-fill">Move Up</i></button>
            <button className='btn btn-sm btn-outline-primary' type='button' onClick={()=>handleRowMoveDown(data.id)}><i className="bi bi-arrow-down-circle-fill">Move Down</i></button>
          </td>
        )
        }

    </tr>
    )
}

export default ReadOnlyRow