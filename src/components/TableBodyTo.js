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



function RowAdd({nameSubject,handleDataAdd,handleDataAddConfirm}){
   if(nameSubject===0){
    return <AddRow0 handleDataAdd ={handleDataAdd} handleDataAddConfirm={handleDataAddConfirm}/>
   }else if(nameSubject===1){
    return <AddRow1 handleDataAdd ={handleDataAdd} handleDataAddConfirm={handleDataAddConfirm}/>
   }else if(nameSubject===2){
    return <AddRow2 handleDataAdd ={handleDataAdd} handleDataAddConfirm={handleDataAddConfirm}/>
   }else{
    return <AddRow3 handleDataAdd ={handleDataAdd} handleDataAddConfirm={handleDataAddConfirm}/>
   }

//    switch(nameSubject){
//        case 0:
//            return <AddRow0 handleDataAdd ={handleDataAdd} handleDataAddConfirm={handleDataAddConfirm}/>
//            break;
//        case 1:   
//            return <AddRow1 handleDataAdd ={handleDataAdd} handleDataAddConfirm={handleDataAddConfirm}/>
//            break;
//        case 2:
//           return <AddRow2 handleDataAdd ={handleDataAdd} handleDataAddConfirm={handleDataAddConfirm}/>
//           break;
//        case 3:
//           return <AddRow3 handleDataAdd ={handleDataAdd} handleDataAddConfirm={handleDataAddConfirm}/>

//    }
}

const TableBodyTo = ({dataSubs,indexSubject}) => {
  
    const [dataSubjects,setDataSubjects]=useState(dataSubs);              //STATE
    const [dataAdd,setDataAdd]=useState({             //STATE
     tema:'',
     ucebna:'',
     ucitel:'',
     cas:'',
     den:''
    })    

    const [dataChange,setDataChange]=useState({            //STATE
     tema:'',
     ucebna:'',
     ucitel:'',
     cas:'',
     den:''
    })

    const [dataPickedUU,setDataPickedUU]=useState({   //STATE giữ kiện lưu chung dùng để úp ào những hàng đã chọn
      ucebna:'',
      ucitel:''
    })

    const [editDataId,setEditDataId]=useState(null);//edit Id chỉ vào mỗi dòng        //STATE
    const [pickedDataIdsUU,setPickedDataIdsUU]=useState([]);   //State danh sách dòng đc chọn
   


    const handlePickedDataIdsUU=(datID)=>{ //bấm vào các check box để xác định dòng được chọn
      
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

    const handleDataPickedUU=(event)=>{         //Dữ kiện UU quản lý
      //  event.preventDefault();

       const fieldName=event.target.getAttribute('name');
       const fieldValue=event.target.value;

       const newData={...dataPickedUU};
       newData[fieldName]=fieldValue;
       
       setDataPickedUU(newData);
      //  console.log(dataPickedUU);
    }

    const handleDataPickedUUConfirm=(event)=>{   //Set Data xác nhận thay đổi với dữ kiện UU
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
    
    const handleDataAdd=(event)=>{   //nhập vào để thêm dòng            
      event.preventDefault();

      const fieldName=event.target.getAttribute('name');
      const fieldValue=event.target.value;

      const newData={...dataAdd};
      newData[fieldName]=fieldValue;

      setDataAdd(newData);
      // console.log(dataAdd);
    }

    const handleDataChange=(event)=>{   //nhập vào sửa nội dung dòng
      event.preventDefault();
      const fieldName=event.target.getAttribute('name');
      const fieldValue=event.target.value;

      const newData={...dataChange};
      newData[fieldName]=fieldValue;

      setDataChange(newData);

    }

    const handleDataAddConfirm=(event)=>{   //click vào nút add trong chỗ thêm dòng
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
    //   setDataAdd({             
    //     tema:'',
    //     ucebna:'',
    //     ucitel:'',
    //     cas:'',
    //     den:''
    //    })


    }

    const handleDataChangeConfirm=(event)=>{
      event.preventDefault();      //nếu ko preventdefault, onSubmit sẽ reflesh lại trang
      console.log('cc');

      const DataChanged={
        // id:nanoid(),
        id:editDataId,
        tema:dataChange.tema,
        ucebna:dataChange.ucebna,
        ucitel:dataChange.ucitel,
        cas:dataChange.cas,
        den:dataChange.den
      };

      const newDataSubjects=[...dataSubjects];
      // newDataSubjects[index]=DataChanged;
      const index=dataSubjects.findIndex((data)=>data.id===editDataId);
      newDataSubjects[index]=DataChanged;
      setDataSubjects(newDataSubjects);
      setEditDataId(null);

    }

   const handleEditClick=(event,dat)=>{  //click vào nút edit ở mỗi dòng để chỉnh sửa dòng đó
     event.preventDefault();
     setEditDataId(dat.id);

     const formValue={ //ko dùng spread ??
       tema:dat.tema,
       ucebna:dat.ucebna,
       ucitel:dat.ucitel,
       cas:dat.cas,
       den:dat.den

     }
     setDataChange(formValue);

   }

   const handleCancelClick=(event)=>{
     event.preventDefault();
     setEditDataId(null);
   }

   const handleDeleteClick=(dataIdtoDelte)=>{
     const newDataSubjects=[...dataSubjects];

     const index=dataSubjects.findIndex((dat)=>dat.id===dataIdtoDelte);

     newDataSubjects.splice(index,1);  //index là vị trí, 1 là số phần tử muốn xóa
     setDataSubjects(newDataSubjects);
   }

   const handleRowMoveDown=(dataIdToMoveDown)=>{
    const newDataSubjects=[...dataSubjects];

    const index=dataSubjects.findIndex((dat)=>dat.id===dataIdToMoveDown);
    const temData=newDataSubjects[index];
    newDataSubjects[index]=newDataSubjects[index+1];
    newDataSubjects[index+1]=temData;
    setDataSubjects(newDataSubjects);

    

   }

   const handleRowMoveUp=(dataIdToMoveUp)=>{
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