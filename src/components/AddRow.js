import React from 'react'

/*
Function: AddRow 
A component to set the data we want to add, save them to the general data and add them to a new row.

Props:
handleDataAdd: handle the adding data
handleDataAddConfirm: allow to add the 'adding' data to the general data(dataSubjects)
dataSuggests: suggesting data list
index: index of the suggesting data list.

*/
const AddRow = ({handleDataAdd,handleDataAddConfirm,dataSuggests,index}) => {
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
            list={'temas' + index}
         />
              <datalist id={'temas' + index}>
                  {dataSuggests[index].suggestTema.map((tema)=>(<option value={tema} />))}
              </datalist>
      </td>
              
      <td>
        <input
            type="text"
            name="ucebna" 
            required="required" 
            placeholder="Enter the room..."
            onChange={handleDataAdd}
            list={'rooms' + index}
        />
           <datalist id={'rooms' + index}>
               {dataSuggests[index].suggestUcebna.map((ucebna)=>(<option value={ucebna} />))}        
            </datalist>
      </td>

      <td>
        <input                
            type="text"
            name="ucitel" 
            required="required" 
            placeholder="Enter the lecturer..."
            onChange={handleDataAdd}
            list={'teachers' + index}
        />
            <datalist id={'teachers' + index}>
               {dataSuggests[index].suggestUcitel.map((ucitel)=>(<option value={ucitel} />))}             
            </datalist>
      </td>   
      <td>
          <button type="submit" className="btn btn-sm btn-outline-success" onClick={handleDataAddConfirm}><i className="bi bi-clipboard-plus">Add</i></button>             
      </td>
      <td></td> 
    </tr>
  )
}

export default AddRow