import "../styles/Main.css";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import React from "react";
import BodySkeleton from "../components/common/BodySkeleton";

function Main() {
  return (
    <div className="main--container">
      <div className="main--body">
        <Sidebar />
        <Navbar />
        <BodySkeleton />
      </div>
      <Footer />
    </div>
  );
}
export default Main;
