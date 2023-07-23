import "./App.css";
import { SginIn } from "./sginIn_user";
import { SginUp } from "./sginUP_user";
import { DefaultHome } from "./FirstHome";
import { ChooseSgin_in } from "./ChooseSgin_in";
import { SginUp_Company } from "./sginUp_Company";
import { SginIn_Company } from "./sginIn_Company";
import {ChooseSgin_up} from "./ChoosenSgin_up";
import {SavePage} from "./SavePage";
import {AppliedPage} from "./AppliedPage";
import {Profile_User} from "./Profile-User";
import {ProfessionalDetails} from "./ProfessionalDetails"
import {AboutUser} from "./AboutUser";
import {HomeUser} from "./HomeUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Job } from "./Job";
function App() {
  let [userData , setUserData] = useState([]);
  
  let [secondName , setSecondName] = useState("");
  let [userName , setUserName] = useState("");
  const getData=(data)=>{
      setUserName(data[0]);
      setSecondName(data[1])
      setUserData({...userData , ...data});
  }
  
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<DefaultHome />} />
          <Route  path="/sginIn" element={<ChooseSgin_in />} />
          <Route  path="/sginUp" element={<ChooseSgin_up />} />
          <Route  path="/sginUp/user" element={<SginUp getData={getData}/>} />
          <Route  path="/sginIn/user" element={<SginIn />} />
          <Route  path="/sginUp/company" element={<SginUp_Company />} />
          <Route  path="/sginIn/company" element={<SginIn_Company />} />    
          <Route path= "/sginUp/user/personalInfo" element={<AboutUser userName={userName} secondName={secondName} userData= {userData}  />} />
          <Route path="/sginUp/user/personalInfo/Professional" element={<ProfessionalDetails userName={userName}/>} />   
          <Route path="/sginUp/user/personalInfo/Professional/user_home" element={<HomeUser/>}></Route>
          <Route path="/sginUp/user/personalInfo/Professional/user_home/:jobId" element={<Job/>}></Route>
          <Route path="/sginUp/user/personalInfo/Professional/user_home/profile" element={<Profile_User userData = {userData} />}></Route>
          <Route path="/sginUp/user/personalInfo/Professional/Saved" element = {<SavePage/>}></Route>
          <Route path="/sginUp/user/personalInfo/Professional/Saved/:jobId" element = {<Job/>}></Route>
          <Route path="/sginUp/user/personalInfo/Professional/Applications" element = {<AppliedPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
