
import { useState } from "react"
import Form from "./form"

const Caret = (props) => {

    if(props.active){
        return (
            <>
           <svg onClick = {props.handleClick} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
             <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
           </svg>
            </>
        )
    }
    return (
        <>
        <svg onClick = {props.handleClick} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
         <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
        </svg>
        </>
    )
}

function Header(props){


    return (
        <div className = "body-headers">
        <h1>{props.title}</h1>
        <Caret handleClick = {props.setCaretClick} active = {props.isActive}/>
        </div>
    )
}

const InfoPanelLine = ({label,value}) => {
    return (
        <p><strong>{label}:</strong> {value}</p>
    )
}
 
const GeneralInfoPanel = ({ data , handleEdit,handleDelete}) => {

    return(
        <>
        <div className="info-card">
          <InfoPanelLine label = "Name" value = {data.name} />
          <InfoPanelLine label = "Email" value = {data.email} />
          <InfoPanelLine label = "Phone Number" value = {data.phone} />
          <InfoPanelLine label = "Address" value = {data.address} />
          <EditButton handleEdit = {handleEdit} handleDelete={handleDelete} />
        </div>
        </>
    )
    
}

const EducationInfoPanel = ({ data , handleEdit, handleDelete}) => {

    return(
        <>
        <div className="info-card">
          <InfoPanelLine label = "School" value = {data.college} />
          <InfoPanelLine label = "Degree" value = {data.degree} />
          <InfoPanelLine label = "Duration" value = {data.duration} />
          <InfoPanelLine label = "Address" value = {data.location} />
          <EditButton handleEdit = {handleEdit} handleDelete={handleDelete}/>
        </div>
        </>
    )
    
}

const ExperienceInfoPanel = ({ data,handleEdit, handleDelete }) => {

    return(
        <>
        <div className="info-card">
          <InfoPanelLine label = "Company" value = {data.company} />
          <InfoPanelLine label = "Job title" value = {data.position} />
          <InfoPanelLine label = "Duration" value = {data.duration} />
          <InfoPanelLine label = "Location" value = {data.location} />
          <InfoPanelLine label = "Description" value = {data.description} />
          <EditButton handleEdit = {handleEdit} handleDelete={handleDelete}/>
        </div>
        </>
    )
    
}

const InfoPanel = ({title,data,handleEdit,handleDelete}) => {
    
    if(title === "General Information"){

        return (
            <>
            <GeneralInfoPanel data = {data} handleEdit = {handleEdit} handleDelete = {handleDelete} />
            </>
        )

    }

    if(title === "Education"){
        return (
            <>
            <EducationInfoPanel data = {data} handleEdit = {handleEdit} handleDelete = {handleDelete} />
            </>
        )
    }

    return (
        <>
        <ExperienceInfoPanel data = {data} handleEdit = {handleEdit} handleDelete = {handleDelete}/>
        </>
    )
}

const EditButton  = ({handleEdit, handleDelete}) => {
    return (
        <div id = "buttons">
            {/* <button class = "btn btn-light" id  = "delete" onClick={handleDelete}><strong>Delete</strong></button> */}
            <button class = "btn btn-light" id = "edit" onClick={handleEdit}><strong>Edit</strong>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
           <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
           </svg></button>
        </div>
    )
}


const handleCancel = () => {
   setIsActive(false)
}



const Panel = ({title,data,handler}) => {



    const [isActive,setIsActive] = useState(false)
    const [isSubmitted,setIsSubmitted] = useState(false)
    const [isEdit,setIsEdit] = useState(false)


    const handleEdit = () => {
        setIsEdit(true)        
    }


    const setCaretClick = () => {
        isActive ? setIsActive(false) : setIsActive(true)
    }



    const runHandlers = (title) => {

        if(title === "General Information"){

            handler(
             {
                 "name" : document.getElementById("full-name").value,
                 "email" : document.getElementById("email").value,
                 "phone" : document.getElementById("phone").value,
                 "address" : document.getElementById("address").value
             }
             )
     
            }else if(title === "Education"){
     
            handler(
             {
                 "college" : document.getElementById("college").value,
                 "degree" : document.getElementById("degree").value,
                 "duration" : document.getElementById("start-college").value,
                 "location" : document.getElementById("loc-college").value
             }
            )
           }else{
     
            handler(
             {
                 "company" : document.getElementById("company").value,
                 "position" : document.getElementById("pos").value,
                 "duration" : document.getElementById("start-company").value,
                 "location" : document.getElementById("loc-company").value,
                 "description" : document.getElementById("des").value
             }
            )
           }

    }



    const handleSubmit = (e,title) => {
       e.preventDefault()

       setIsSubmitted(true)
       setIsEdit(false)

       runHandlers(title)

      
    }



    return (
        <>
         <Header title = {title} setCaretClick = {setCaretClick}  isActive  = {isActive} />
         {isActive ? ( isSubmitted && !isEdit ? (<><InfoPanel title = {title} data = {data} handleEdit = {handleEdit}  /></>) : <Form title = {title} handleSubmit = {(e) => handleSubmit(e,title)} data = {data} handleCancel = {handleCancel}/> ) : <></>}
        </>
    )

}

export default Panel;