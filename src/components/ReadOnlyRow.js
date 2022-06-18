import React from 'react'

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