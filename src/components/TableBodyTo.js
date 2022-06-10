import React, { useState, Fragment } from 'react'
import {nanoid} from 'nanoid'
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import Tablehead from './Tablehead';
import AddRow0 from './AddRow0';
import AddRow1 from './AddRow1';
import AddRow2 from './AddRow2';
import AddRow3 from './AddRow3';
import PickedRowUU from './PickedRowUU';



function RowAdd({nameSubject,handleDataAdd,handleDataAddConfirm}){ //nameSubjects : 0-Informatika, 1-Math, 2-Teorie Graf, 3-English
   if(nameSubject===0){ 
    return <AddRow0 handleDataAdd ={handleDataAdd} handleDataAddConfirm={handleDataAddConfirm}/>
   }else if(nameSubject===1){
    return <AddRow1 handleDataAdd ={handleDataAdd} handleDataAddConfirm={handleDataAddConfirm}/>
   }else if(nameSubject===2){
    return <AddRow2 handleDataAdd ={handleDataAdd} handleDataAddConfirm={handleDataAddConfirm}/>
   }else{
    return <AddRow3 handleDataAdd ={handleDataAdd} handleDataAddConfirm={handleDataAddConfirm}/>
   }


}

const TableBodyTo = ({dataSubs,indexSubject}) => {
  
    const [dataSubjects,setDataSubjects]=useState(dataSubs);              //STATE: main data - Informations for each subject
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

    const handleDataPickedUU=(event)=>{         // handle data we set for PICKED rows //Fill information you want to add in Input tags
      //  event.preventDefault();

       const fieldName=event.target.getAttribute('name');
       const fieldValue=event.target.value;

       const newData={...dataPickedUU};
       newData[fieldName]=fieldValue;
       
       setDataPickedUU(newData);
      //  console.log(dataPickedUU);
    }

    const handleDataPickedUUConfirm=(event)=>{   // Set dataSubjects with new data we set for PICKED rows //Click button 'Save Change' to save
      event.preventDefault();
      const newDataSubjects=[...dataSubjects];
      newDataSubjects.map((dat,index)=>{
        if(pickedDataIdsUU.includes(dat.id)){
          if(dataPickedUU.ucebna !== ''){newDataSubjects[index].ucebna=dataPickedUU.ucebna;}
          if(dataPickedUU.ucitel !== ''){newDataSubjects[index].ucitel=dataPickedUU.ucitel;}                    
        }
      })

      setDataSubjects(newDataSubjects);
      setPickedDataIdsUU([]);
      setDataPickedUU({ucebna:'',ucitel:''});

    }
    
    const handleDataAdd=(event)=>{   // handle data that we set to add (data of new row)  //Fill information you want to add in Input tags        
      event.preventDefault();

      const fieldName=event.target.getAttribute('name');
      const fieldValue=event.target.value;

      const newData={...dataAdd};
      newData[fieldName]=fieldValue;

      setDataAdd(newData);
    }

    const handleDataChange=(event)=>{   // handle data we set to edit/change for each row //Fill information you want to change in Input tags
      event.preventDefault();
      const fieldName=event.target.getAttribute('name');
      const fieldValue=event.target.value;

      const newData={...dataChange};
      newData[fieldName]=fieldValue;

      setDataChange(newData);

    }

    const handleDataAddConfirm=(event)=>{   //Set dataSubjects with new data  //Click button Add in first row to add new row
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
      setDataSubjects(newDataSubjects);
    }

    const handleDataChangeConfirm=(event)=>{   //Set dataSubjects with new data (edit change a row) //Click button Save to save chnages
      event.preventDefault();      //nếu ko preventdefault, onSubmit sẽ reflesh lại trang
      console.log('cc');

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
      setDataSubjects(newDataSubjects);
      setEditDataId(null);

    }

   const handleEditClick=(event,dat)=>{  //click button edit in each row to edit change in that row
     event.preventDefault();
     setEditDataId(dat.id);

     const formValue={ 
       tema:dat.tema,
       ucebna:dat.ucebna,
       ucitel:dat.ucitel,
       cas:dat.cas,
       den:dat.den

     }
     setDataChange(formValue);

   }

   const handleCancelClick=(event)=>{ //Click button Cancel in each row to cancel the editing
     event.preventDefault();
     setEditDataId(null);
   }

   const handleDeleteClick=(dataIdtoDelte)=>{
     const newDataSubjects=[...dataSubjects];

     const index=dataSubjects.findIndex((dat)=>dat.id===dataIdtoDelte);

     newDataSubjects.splice(index,1);  //index là vị trí, 1 là số phần tử muốn xóa
     setDataSubjects(newDataSubjects);
   }

   const handleRowMoveDown=(dataIdToMoveDown)=>{ //Click button Move down to change the position of the row
    const newDataSubjects=[...dataSubjects];

    const index=dataSubjects.findIndex((dat)=>dat.id===dataIdToMoveDown);
    const temData=newDataSubjects[index];
    newDataSubjects[index]=newDataSubjects[index+1];
    newDataSubjects[index+1]=temData;
    setDataSubjects(newDataSubjects);

    

   }

   const handleRowMoveUp=(dataIdToMoveUp)=>{ //Click button Move up to change the position of the row
    const newDataSubjects=[...dataSubjects];

    const index=dataSubjects.findIndex((dat)=>dat.id===dataIdToMoveUp);
    const temData=newDataSubjects[index];
    newDataSubjects[index]=newDataSubjects[index-1];
    newDataSubjects[index-1]=temData;
    setDataSubjects(newDataSubjects);

   }

   
 
  return(
      <div className="app-container">
        <form >
          <table>
              <thead>
                  <Tablehead/>
              </thead>

              <tbody>
                  <RowAdd nameSubject={indexSubject} handleDataAdd={handleDataAdd} handleDataAddConfirm={handleDataAddConfirm}/>
                  
                  
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

export default TableBodyTo