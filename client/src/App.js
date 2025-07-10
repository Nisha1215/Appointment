import 'bootstrap/dist/css/bootstrap.min.css';
import{Link,Routes,Route} from 'react-router-dom'
import AddMovie from "./addmovie";
import Menubar from "./menubar";
import MyBookings from "./addbookings";
import MyEvents from "./addevent";
import MyContacts from "./contact";
import MyHome from './home';
import { useContext,useState } from 'react';
import LocationContext from './locationcontext';
import Login from './login';

function App(){
  const [location,setLocation]= useState('Bangalore');
  const updateLocation=(newLocation)=>{
    setLocation(newLocation);
  };
  return(
    <LocationContext.Provider value={{location,updateLocation}}>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">My Show {location}</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
     
      <li class="nav-item active">
        <Link class="nav-link" to="/bookings">Booking <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/contacts">Contacts <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/movies">Movies</Link>
      </li>
      {(location==='Bangalore')?
      <li class="nav-item active">
        <Link class="nav-link" to="/events">Events <span class="sr-only">(current)</span></Link>
      </li>:''}
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      
      <Link type="button" to="/login" class="btn btn-outline-success my-2 my-sm-0" >Login</Link>
    </form>
  </div>
</nav>
<Routes>
  <Route path="/"element={<MyHome></MyHome>}/>
  <Route path="/movies"element={<AddMovie title="Movies"></AddMovie>}/>
  <Route path="/events"element={<MyEvents></MyEvents>}/>
  <Route path="/bookings"element={<MyBookings></MyBookings>}/>
  <Route path="/contacts"element={<MyContacts></MyContacts>}/>
  <Route path="/login" element={<Login/>}/>
</Routes>
    
    
    </div>
    </LocationContext.Provider>);
}
export default App;