import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AdminComplaintList from "./Components/AdminComplaintList";
import StatusUpdateScreen from "./Components/StatusUpdateScreen";
import NavBar from "./Components/NavBar";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AddComplaint from "./Components/AddComplaint";
import ComplainList from "./Components/ComplainList";
import StudentDashboard from "./Components/StudentDashboard";
import AdminDashboard from "./Components/AdminDashboard";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
        <Route path="/" element={<AdminComplaintList />} />
        <Route path="/status-update" element={<StatusUpdateScreen />} />
         <>
     
      <Routes>
        <Route path='/'element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path = "/" element={<h1>Welcome to the Campus Complaint Management System</h1>} />
        <Route path = "/addcomplaint" element={<AddComplaint />} />
        <Route path = "/complaintlist" element={<ComplainList />} />
        <Route path="/StudentDashboard" element={<StudentDashboard />} />     
        <Route path="/AdminDashboard" element={<AdminDashboard />} />

      </Routes>    
    </BrowserRouter>
  );
}

export default App;


