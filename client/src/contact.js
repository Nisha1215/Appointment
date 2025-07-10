import {useContext} from "react";
import LocationContext from "./locationcontext";
function MyContacts(){
    const {location,updateLocation}= useContext(LocationContext);

    return(
        <div> 
            <h1> Contacts </h1>
            <p> Lists of contacts are listed here.</p>
            {location}

        </div>



    );
}
export default MyContacts;
