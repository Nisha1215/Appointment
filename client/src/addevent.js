import {useState,useEffect,useContext} from "react";
import LocationContext from "./locationcontext";
const MyEvents=()=>{
    const {location,updateLocation}=useContext(LocationContext);
    const[eventType,setEventType]=useState('Sports');
    const[eventName,setEventName]=useState('Cricket Match');
    const[eventDesc,setEventDesc]=useState('Test');
    const handleEventTypeChange=()=>{
        setEventType('Conference');
    }
    
    useEffect(()=>{
        console.log('Trigerred useEffects');


    },[]); // ComponentDidMount Equivalent
    return(
        <div> 
             <div className="container"></div>
            <h1> My Events</h1>
            <hr/>
            <p> Location: {location}</p>
           
            <form> 
                Name:<input type="text"></input><br/><br/>
                Type:<input type="text"></input><br/><br/>
                Desc:<input type="text"></input><br/><br/>

            </form>
           
            <button onClick={handleEventTypeChange}> Change Event type</button>
        </div>
    )
   

   
}
export default MyEvents;