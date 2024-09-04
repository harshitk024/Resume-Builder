


const Text = ({id, elementType,data,val,style}) => {
    return (
         elementType === "h" ? (
        <h2 id = {id} style={style}>{data.trim() === "" ? val: data}</h2> )
         : (
           <p id = {id} style={style}>{data.trim() == "" ? val : data}</p>
         )
        
    )
}
const ResumeHeader = ({data}) => {

      return (
        <>
        <div className = "header-resume">
             <div id = "name-container">
                <Text id = "resume-name" elementType={"h"} data = {data.name} val = "ExampleName"/>
             </div>
             <div id = "gen-info-container">
                <Text id = "resume-phone" data = {data.phone} val = "Examplephone" />
                <Text id = "resume-email" data = {data.email} val = "ExampleEmail" />
                <Text id = "resume-address" style={{border: 0}} data = {data.address} val = "ExampleAddress" />
             </div>
        </div>
        </>
      )
}


const ResumeEducation = ({data}) => {
   return (
    <>
     <div className = "resume-section" id = "resume-education">
     <div className = "section-title">
        <h3>Education</h3>
     </div>
     <div className = "section-body">
       <div className = "body-container">
          <div className = "resume-college">
             <Text data = {data.college} val = {"ExampleCollege"} />
          </div>
          <div className = "resume-college-location">
          <Text data = {data.location} val = {"ExampleLocation"} />
          </div>
       </div>
       <div className = "body-container">
          <div className = "resume-college-degree">
          <Text data = {data.degree} val = {"ExampleDegree"} />
          </div>
          <div className = "resume-college-duration">
          <Text data = {data.duration} val = {"ExampleDuration"} />
          </div>
       </div>
     </div>
     </div>
    </>
   )
}

const ResumeExperience = ({data}) => {
    return (
     <>
      <div className = "resume-section" id = "resume-education">
      <div className = "section-title">
         <h3>Experience</h3>
      </div>
      <div className = "section-body">
        <div className = "body-container">
           <div className = "resume-company">
           <Text data = {data.company} val = {"ExampleCompany"} />
           </div>
           <div className = "resume-company-location">
           <Text data = {data.location} val = {"ExampleLocation"} />
           </div>
        </div>
        <div className = "body-container">
           <div className = "resume-company-role">
           <Text data = {data.position} val = {"ExamplePosition"} />
           </div>
           <div className = "resume-company-duration">
           <Text data = {data.duration} val = {"ExampleDuration"} />
           </div>
        </div>
        <div className = "company-description">
        <Text data = {data.description} val = {"Description...."} />
        </div>
      </div>
      </div>
     </>
    )
 }


const Section = ({title,data}) => {

}


export default function Resume({data}){
    return (
        <div id = "resume">
            <div id = "resume-body">
               <ResumeHeader data = {data[0]}/>
               <ResumeEducation data = {data[1]}/>
               <ResumeExperience data = {data[2]} />
            </div>
 
        </div>
    )
}