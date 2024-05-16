import{ BrowserRouter,Routes,Route,} from "react-router-dom";
// import Daycare from "./Daycare";
// import Bookfordaycare from "./Bookfordaycare.js";
// import Daycare from 'first'
// import Location from "./Location.js";
// import Location1 from "./Location1.js";
// import Location2 from "./Location2.js";
// import Location3 from "./Location3.js";
// import Location4 from "./Location4.js";
// import Location5 from "./Location5.js";

// import Userlogin from "./Userlogin";
// import Doctornav from "./Doctornav.js";
// import Vendornavbar from "./Vendornavbar.js";
// import Trainingdashboard from "./Trainingdashboard.js";
// import PopupForm from "./Popform.js";
// import Addrestable from "./Addrestable.js";
// import Footer from "./Footer.js";
// import Users from "./Users.js";
// import Navside from "./navside.js";
import Addslot from "./Addslot";
import TrainerList from "./TrainerList";
import Tviewselectedemployee from "./Tviewselectedemployee";
import AllDetailsPage from "./AllDetailsPage";
import Employslot from "./Employslot";
  


import ReportsCharts from "./ReportsCharts";

import Day from "./Day";



// import Login from "./Login (1).js";
// import ProfilePage from "./ProfilePage.js";




function App() {
  return (
    <div >

     <BrowserRouter>
     <Routes>
     {/* <Route path="/" element = {<Navside/>}/> */}
     {/* <Route path="/side"element ={<Side/>}/> */}
    
     {/* <Route path="/" element={<Login/>}/>
     <Route path="/Profile" element={<ProfilePage/>}/>  */}
     {/* <Route path="/Bookfordaycare" element = {<Bookfordaycare/>}/>
     <Route path ="/" element={<Daycare/>}/> */}
    
      {/* <Route path ="/Daycare" element ={<Daycare/>}/> */}
     
     {/* <Route path="/Location" element = {<Location/>}/>
     <Route path="/Location1" element ={<Location1/>}/>
   
     <Route path="/Location3" element ={<Location3/>}/>
     <Route path="/Location4" element = {<Location4/>}/>
     <Route path="/Location5" element ={<Location5/>}/>
       */}
     {/* <Route path="/" element={<Userlogin/>}/> */}
     {/* <Route path="/footer" element={< Footer/>}/>
     <Route path="/" element= {<Doctornav/>}/>
    
    
     <Route path="/users" element={<Users/>}/>
     <Route path="/"element={<Vendornavbar/>}/>
    
      */}
       {/* <Route path="/"element={<Trainingdashboard/>}/> */}
       {/* <Route path="/popup"element={<PopupForm/>}/> */}
        {/* <Route path="/"element={<Addrestable/>}/>  */}
      <Route path="/Addslot" element = {<Addslot/>}/>
       <Route path ="/Tranier"element ={<TrainerList/>}/> 
       <Route path="/Tviewselectedemployee" element ={<Tviewselectedemployee/>}/>
       <Route path="/AllDetailsPage" element ={<AllDetailsPage/>}/>
       <Route path="/Employslot" element ={<Employslot/>}/>
     
     
     
    
       <Route path="/ReportsCharts" element ={<ReportsCharts/>}/>
      
       <Route path="./Day" element={<Day/>}/>

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
