import React from "react";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";

function AppLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className='font-Poppins'>{children}</div>
      <Footer />
    </>
  );
}

export default AppLayout;
