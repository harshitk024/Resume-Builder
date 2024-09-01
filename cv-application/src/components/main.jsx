
import Panel from "./Panel"

export default function Body({data,handlers}){
   
     return (
        <div id = "body">
            <div id = "info-section">
            <Panel title = "General Information" data = {data[0]} handler = {handlers[0]} />
            <Panel title = "Education" data = {data[1]} handler = {handlers[1]} />
            <Panel title = "Experience"data = {data[2]} handler = {handlers[2]} />
            </div>
        </div>
     )
}