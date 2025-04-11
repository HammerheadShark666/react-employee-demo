import { BriefcaseBusiness, Calendar1, CircleUserRound, House } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && <div className="overlay" onClick={onClose} />}

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h1 className="title-side-bar">WoldsHR</h1>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <ul className="sidebar-menu">     

           {/* <li><NavLink to="/employees" ><CircleUserRound /><span>Employees</span></NavLink></li>   
          <li><NavLink to="/employment" > <Calendar1 /><span>Employment</span></NavLink></li>           
          <li><NavLink to="/jobs" > <BriefcaseBusiness /><span>Jobs</span></NavLink></li>     */}
          <li><NavLink to="/" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"} ><House /><span>Home</span></NavLink></li>   
          <li><NavLink to="/employees" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"} ><CircleUserRound /><span>Employees</span></NavLink></li>   
          <li><NavLink to="/employment" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}> <Calendar1 /><span>Employment</span></NavLink></li>           
          <li><NavLink to="/jobs" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}> <BriefcaseBusiness /><span>Jobs</span></NavLink></li>   
       
          {/* <li><NavLink to="/employees" style={({ isActive }) => ({background: isActive ? "rgba(134, 133, 172, 0.4)" : "white"})} ><CircleUserRound /><span>Employees</span></NavLink></li>   
          <li><NavLink to="/employment" style={({ isActive }) => ({background: isActive ? "rgba(134, 133, 172, 0.4)" : "white"})}> <Calendar1 /><span>Employment</span></NavLink></li>           
          <li><NavLink to="/jobs" style={({ isActive }) => ({background: isActive ? "rgba(134, 133, 172, 0.4)" : "white"})}> <BriefcaseBusiness /><span>Jobs</span></NavLink></li>   */}
      </ul>
      </aside>
    </>
  );
};

export default Sidebar;