 

import Header from './Header';  
import "../styles/layout.css";
import Sidebar from "./Sidebar"; 
import { useState } from 'react'; 

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
     <div className="layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="main-content">
        <Header onHamburgerClick={() => setSidebarOpen(true)} />
        <div className="content">
          <div className="card">    
            <div className="card-content">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Layout;