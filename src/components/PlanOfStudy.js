import React, { useState, Fragment } from 'react'
import {nanoid} from 'nanoid'
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import Tablehead from './Tablehead';
import PickedRowUU from './PickedRowUU';
import AddRow from './AddRow';

// alo :)))) may co the tim buc anh nao dep hon khong?
//Tak nepotrebuji this component - RowAdd
//nameSubjects : 0-Informatika, 1-Math, 2-Teorie Graf, 3-English
// function RowAdd({nameSubject,handleDataAdd,handleDataAddConfirm}){ 
//    if(nameSubject===0){ 
//     return <AddRow0 handleDataAdd ={handleDataAdd} handleDataAddConfirm={handleDataAddConfirm}/>
//    }else if(nameSubject===1){
//     return <AddRow1 handleDataAdd ={handleDataAdd} handleDataAddConfirm={handleDataAddConfirm}/>
//    }else if(nameSubject===2){
//     return <AddRow2 handleDataAdd ={handleDataAdd} handleDataAddConfirm={handleDataAddConfirm}/>
//    }else{
//     return <AddRow3 handleDataAdd ={handleDataAdd} handleDataAddConfirm={handleDataAddConfirm}/>
//    }

// }


/**
PlanOfStudy: 
* main component, return a table that we can add, change the topics of a subject
* @component
@param {object} dataSubs : data of subjects in mock-data.json
@param {number} indexSubjects: index of dataSubs
@param {object} dataSuggests: data suggests in addRow
*/
const PlanOfStudy = ({dataSubs,indexSubject,dataSuggests}) => {
   const storageDataSubjects=JSON.parse(localStorage.getItem('subject'+indexSubject))
  
    const [dataSubjects,setDataSubjects]=useState(storageDataSubjects?? dataSubs);              //STATE: main data - Informations for each subject
    //const [dataSubjects,setDataSubjects]=useState(dataSubs);
    const [dataAdd,setDataAdd]=useState({             //STATE : The data we set to add to main data
     tema:'',
     ucebna:'',
     ucitel:'',
     cas:'',
     den:''
    })    

    const [dataChange,setDataChange]=useState({            //STATE : the data we set in each row to edit, then use this data to replace the one we want to edit 
     tema:'',
     ucebna:'',
     ucitel:'',
     cas:'',
     den:''
    })

    const [dataPickedUU,setDataPickedUU]=useState({   //STATE : the data we set for PICKED row ( only ucebna and ucitel) // UU means Ucebna-Ucitel
      ucebna:'',
      ucitel:''
    })

    const [editDataId,setEditDataId]=useState(null);   //STATE: the id of the row when we click edit in that row 
    const [pickedDataIdsUU,setPickedDataIdsUU]=useState([]);   //State: List of PICKED rows
   


    
    ///////////////////////  function in AddRow
    /**
    handleDataAdd:
    * Handle data that we set to add (data of new row)
    * @function
    */
    const handleDataAdd=(event)=>{          
      event.preventDefault();

      const fieldName=event.target.getAttribute('name');
      const fieldValue=event.target.value;

      const newData={...dataAdd};
      newData[fieldName]=fieldValue;

      setDataAdd(newData);
    }

    /**
    handleDataAddConfirm:
    * Click button 'Add', it will take the data from the 'dataAdd' and show them in a new row
      Save them to the general data (dataSubjects)
    * @function
    */
    const handleDataAddConfirm=(event)=>{    
      event.preventDefault(); //nếu ko preventdefault, onSubmit sẽ reflesh lại trang

      const newData={
        id:nanoid(),
        tema:dataAdd.tema,
        ucebna:dataAdd.ucebna,
        ucitel:dataAdd.ucitel,
        cas:dataAdd.cas,
        den:dataAdd.den
      };
     
      const newDataSubjects=[...dataSubjects,newData]

      //Save to local Storage
      const jsonDataSubjects=JSON.stringify(newDataSubjects);
      localStorage.setItem('subject'+indexSubject,jsonDataSubjects);

      setDataSubjects(newDataSubjects);
    }

    ///////////////////// function in ReadOnlyRow
    /**
    handleEditClick:
    * Click button 'Edit' in each row to change the data in that row
     The changing data will be saved in the 'dataChange' by useState
    * @function
    * @param {object} data: data from the 'readOnlyRow', that we use to define the id of the changing row,
     and use data for the 'foemValue'
    */
   const handleEditClick=(event,data)=>{  
    event.preventDefault();
    setEditDataId(data.id);

    const formValue={ 
      tema:data.tema,
      ucebna:data.ucebna,
      ucitel:data.ucitel,
      cas:data.cas,
      den:data.den

    }
    setDataChange(formValue);

  }

  /**
  handleDeleteClick:
  * Click button 'Delete' in each row to delete the data in that row
  * @function
  * @param {number} dataIdtoDelte: the id of the row that we want to delete.
    we'll make a copy of 'dataSubjects' as 'newDataSubjects'.
    And then delete the data in the 'newDataSubjects' then save it in 'dataSubjects' by useState
    */
  const handleDeleteClick=(dataIdtoDelte)=>{
    const newDataSubjects=[...dataSubjects];

    const index=dataSubjects.findIndex((dat)=>dat.id===dataIdtoDelte);

    newDataSubjects.splice(index,1);  //index là vị trí, 1 là số phần tử muốn xóa
    //Save to local Storage
    const jsonDataSubjects=JSON.stringify(newDataSubjects);
    localStorage.setItem('subject'+indexSubject,jsonDataSubjects);
    setDataSubjects(newDataSubjects);
  }

  /**
  handleRowMoveDown:
  * Click button 'Move Down' to move the position of the row down 
  * @function
  * @param {number} dataIdToMoveDown: the id of the row that we want to move down.
   use 'temData' as an intermediate variable to swap them.
  */
  const handleRowMoveDown=(dataIdToMoveDown)=>{ 
   const newDataSubjects=[...dataSubjects];

   const index=dataSubjects.findIndex((dat)=>dat.id===dataIdToMoveDown);
   const temData=newDataSubjects[index];
   newDataSubjects[index]=newDataSubjects[index+1];
   newDataSubjects[index+1]=temData;
   //Save to local Storage
   const jsonDataSubjects=JSON.stringify(newDataSubjects);
   localStorage.setItem('subject'+indexSubject,jsonDataSubjects);
   setDataSubjects(newDataSubjects);

   

  }

  /**
  handleRowMoveUp:
  * Click button 'Move Up' to move the position of the row up
  * @function 
  * @param {number} dataIdToMoveUp: the id of the row that we want to move up.
    use 'temData' as an intermediate variable to swap them.
  */
  const handleRowMoveUp=(dataIdToMoveUp)=>{ //Click button Move up to change the position of the row
   const newDataSubjects=[...dataSubjects];

   const index=dataSubjects.findIndex((dat)=>dat.id===dataIdToMoveUp);
   const temData=newDataSubjects[index];
   newDataSubjects[index]=newDataSubjects[index-1];
   newDataSubjects[index-1]=temData;
   //Save to local Storage
   const jsonDataSubjects=JSON.stringify(newDataSubjects);
   localStorage.setItem('subject'+indexSubject,jsonDataSubjects);
   setDataSubjects(newDataSubjects);

  }

/////////////////////////// function in EditableRow

    /**
    handleDataChange:
    * Handle data that we set to change 
    * Save them to the 'newData' and then add them to the 'dataAdd' by useState
     (similar to the function 'handleDataAdd')
    * @function 
    */
    const handleDataChange=(event)=>{   // handle data we set to edit/change for each row //Fill information you want to change in Input tags
      event.preventDefault();
      const fieldName=event.target.getAttribute('name');
      const fieldValue=event.target.value;

      const newData={...dataChange};
      newData[fieldName]=fieldValue;

      setDataChange(newData);

    }

    
    /**
    handleDataChangeConfirm:
    * Click button 'Save', it will save the changing data to the 'DataChanged'.
    * find the id of the changing row, save the changing data instead of the old data.
     Save them to the general data (dataSubjects)
    * @function 
    */
    const handleDataChangeConfirm=(event)=>{   //Set dataSubjects with new data (edit change a row) //Click button Save to save chnages
      event.preventDefault();      //nếu ko preventdefault, onSubmit sẽ reflesh lại trang
      const DataChanged={
        id:editDataId,
        tema:dataChange.tema,
        ucebna:dataChange.ucebna,
        ucitel:dataChange.ucitel,
        cas:dataChange.cas,
        den:dataChange.den
      };

      const newDataSubjects=[...dataSubjects];
      const index=dataSubjects.findIndex((data)=>data.id===editDataId);
      newDataSubjects[index]=DataChanged;
      //Save to local Storage
      const jsonDataSubjects=JSON.stringify(newDataSubjects);
      localStorage.setItem('subject'+indexSubject,jsonDataSubjects);


      setDataSubjects(newDataSubjects);
      setEditDataId(null);

    }

    /**
    handleCancelClick:
    * Click the button 'Cancel' to cancel the editing.
     setEditDataId = null
    * @function
    */
   const handleCancelClick=(event)=>{ 
     event.preventDefault();
     setEditDataId(null);
   }


   ///////////// function in PickedRowUU
   /**
    handlePickedDataIdsUU:
    * Find the IDs of the picked rows and save them to the 'pickedDataIdsUU' by useState
    * @function
    */
   const handlePickedDataIdsUU=(datID)=>{ // handle list of PICKED rows //Click checkbox of each row to indentify the rows to change Ucebna and Ucitel
      
    // const isPicked=pickedDataIdsUU.includes(datID);
    var newPickedDataIdsUU=[...pickedDataIdsUU];

    if(pickedDataIdsUU.includes(datID)){
      newPickedDataIdsUU = newPickedDataIdsUU.filter(item=>item !== datID);
    }else{
      newPickedDataIdsUU =[...newPickedDataIdsUU,datID];
    }
    console.log('here',pickedDataIdsUU);
    setPickedDataIdsUU(newPickedDataIdsUU);

    

  }
    
  /**
    handleDataPickedUU:
    * Handle data that we set in the picked rows
      Save them to the 'newData' and then add them to the 'dataPickedUU' by useState
      (similar to the function 'handleDataAdd')
    * @function
    */
  const handleDataPickedUU=(event)=>{         // handle data we set for PICKED rows //Fill information you want to add in Input tags
    //  event.preventDefault();

     const fieldName=event.target.getAttribute('name');
     const fieldValue=event.target.value;

     const newData={...dataPickedUU};
     newData[fieldName]=fieldValue;
     
     setDataPickedUU(newData);
    
  }

  /**
    handleDataPickedUUConfirm
    * Click button 'Save Change' to save the data to the picked rows.
      save them in the general data (dataSubjects)
    * @function
    */
  const handleDataPickedUUConfirm=(event)=>{   // Set dataSubjects with new data we set for PICKED rows 
    event.preventDefault();
    const newDataSubjects=[...dataSubjects];
    newDataSubjects.map((dat,index)=>{
      if(pickedDataIdsUU.includes(dat.id)){
        if(dataPickedUU.ucebna !== ''){newDataSubjects[index].ucebna=dataPickedUU.ucebna;}
        if(dataPickedUU.ucitel !== ''){newDataSubjects[index].ucitel=dataPickedUU.ucitel;}                    
      }
    })
    //Save to local Storage
    const jsonDataSubjects=JSON.stringify(newDataSubjects);
    localStorage.setItem('subject'+indexSubject,jsonDataSubjects);

    setDataSubjects(newDataSubjects);
    setPickedDataIdsUU([]);
    setDataPickedUU({ucebna:'',ucitel:''});

  }

   
  // className={kt.checked===true? "table table-dark":'table table-hover table-bordered table-striped'}
  // className='table table-hover table-bordered table-striped'
  var kt=document.getElementById("mySwitch");
  return(
      // <div className="app-container">
      <div className="app-container" >
        <form >
          <table  className={kt.checked===true? "table table-hover table-dark":'table table-hover table-bordered table-striped'} >
              <thead>
                  <Tablehead/>
              </thead>

              <tbody>
                  {/* <RowAdd nameSubject={indexSubject} handleDataAdd={handleDataAdd} handleDataAddConfirm={handleDataAddConfirm}/> */}
                  <AddRow index={indexSubject} handleDataAdd={handleDataAdd} handleDataAddConfirm={handleDataAddConfirm} dataSuggests={dataSuggests}/>
                  
                  
                  {dataSubjects.map((data,index)=>(
                    
                    <Fragment key={index}> 
                      
                      {editDataId===data.id?(
                      <EditableRow 
                              dataChange={dataChange} 
                              handleDataChange={handleDataChange} 
                              handleCancelClick={handleCancelClick}
                              handleDataChangeConfirm={handleDataChangeConfirm} />
                      ):(
                      <ReadOnlyRow 
                              data={data} 
                              handleEditClick={handleEditClick}
                              handleDeleteClick={handleDeleteClick}
                              dataSubjects={dataSubjects}
                              index={index} 
                              handleRowMoveDown={handleRowMoveDown}
                              handleRowMoveUp={handleRowMoveUp}
                              pickedDataIdsUU={pickedDataIdsUU}
                              handlePickedDataIdsUU={handlePickedDataIdsUU} />
                      )}                                                
                       
                    </Fragment> 
                    //Fragment để bọc các thẻ con, JSX ko cho phép trả về các thẻ con tự do
                    //Fragment khác với div vì div sẽ thêm div vào Dom trong khi Fragment ko màng danh vọng               
                  ))}
                  
                  {pickedDataIdsUU.length !== 0 && <PickedRowUU handleDataPickedUU={handleDataPickedUU} handleDataPickedUUConfirm={handleDataPickedUUConfirm}/>}
                  
                  
              </tbody>
          </table>
        </form>            
      </div>
  )
}

export default PlanOfStudy