import React from "react";
import Sidebar from "../components/common/sidebar";

function DashboardLayout({ children }) {
  return (
    <Sidebar>
      <div className='font-Poppins'>{children}</div>
    </Sidebar>
  );
}

export default DashboardLayout;
