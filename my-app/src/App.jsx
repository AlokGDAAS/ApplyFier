import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Home_footer from "./components/pages_sub_parts/Home_footer";

function App() {
  return (
    <div className="App back text-[#2A2A2A] bg-[#EDEEF8] px-[5vw] md:px-0">
      <Navbar />
      <div className="">
        <Home />
        <Footer/>

      </div>
    </div>
  );
}

export default App;
