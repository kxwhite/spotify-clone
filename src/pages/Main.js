import "../styles/Main.css";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Main() {
  return (
    <div className="main--container">
      <Navbar />
      <div className="main--body">
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}
export default Main;
