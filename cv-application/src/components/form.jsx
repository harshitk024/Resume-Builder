import { useState } from "react";

const Buttons = () => {
    return (
     <div class = "col-md-4" id ="buttons">
       <button class = "btn btn-danger">Cancel</button>
       <button type="submit" class = "btn btn-success">Save</button>
    </div>
    )
}


const FormField = ({label,type,id,placeholder,elementType = "input",value}) => {

    return (
        <div className = "col-md-4">
            <label htmlFor = {id}>{label}</label>
            {elementType === "input" ? (
                <input type = {type} className = "form-control" placeholder = {placeholder} id = {id}  defaultValue = {value} />
            ) : (
                <textarea className="form-control" placeholder={placeholder} id = {id}>{value}</textarea>
            )}
        </div>
    )

}

const FormGeneral = ({handleSubmit,data}) => {
    console.log(data);
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row">
            <FormField label="Name" type="text" id="full-name" placeholder="Full name" value = {data.name} />
            <FormField label="Email" type="email" id="email" placeholder="Enter your Email" value = {data.email}/>
            <FormField label="Phone Number" type="text" id="phone" placeholder="Enter Phone Number" value = {data.phone}/>
            <FormField label="Address" type="text" id="address" placeholder="Enter Address" value = {data.address}/>
            <Buttons />
            </div>
        </form>
    )
}


const FormEducation = ({ handleSubmit,data}) => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <FormField label="School" type="text" id="college" placeholder="College/University" value = {data.college} />
          <FormField label="Degree" type="text" id="degree" placeholder="Enter Degree" value={data.degree}/>
          <FormField label="Start Date - End Date" type="text" id="start-college" placeholder="Start - End" value = {data.duration}/>
          <FormField label="Location" type="text" id="loc-college" placeholder="Location" value = {data.location}/>
          <Buttons />
        </div>
      </form>
    );
};

const FormExperience = ({handleSubmit , data}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <FormField label = "Company" type = "text" id = "company" placeholder= "Enter Company Name" value = {data.company}/>
                <FormField label = "Position Title" type = "text" id = "pos" placeholder= "Enter Position Title" value = {data.position}/>
                <FormField label="Start Date - End Date" type="text" id="start-company" placeholder="Start - End" value = {data.duration}/>
                <FormField label = "Location" type = "text" id = "loc-company" placeholder= "Enter Company Location" value = {data.location}/>
                <FormField label = "Description" type = "text" id = "des" placeholder= "Write Description" elementType="textArea" value = {data.description}/>
                <Buttons />

            </div>
        </form>
    )
}


const Form = ({title,handleSubmit,data}) => {
    
    console.log(data);
    

    if(title === "General Information"){
        return (
            <>
            <FormGeneral handleSubmit = {handleSubmit} data = {data}/>
            </>
        )
    }

    if(title == "Education"){
        return (
            <>
            <FormEducation handleSubmit={handleSubmit} data = {data}/>
            </>
        )
    }

    return (
        <>
        <FormExperience handleSubmit={handleSubmit} data = {data}/>
        </>
    )

}

export default Form;
