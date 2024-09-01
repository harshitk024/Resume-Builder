

const ResumeHeader = ({data}) => {
      return (
        <>
        <div class = "header-resume">
             <div>
                <h3 id = "resume-name">{data.name}</h3>
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
            </div>
        </div>
    )
}