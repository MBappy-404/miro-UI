
import Banner from "./components/Banner/Banner";
import BuildWork from "./components/BuildWork/BuildWork";
import Collaborate from "./components/Collaborate/Collaborate";
import Connect from "./components/Connect/Connect";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import BuildTeams from "./components/Teams/BuildTeams/BuildTeams";
import Testimonials from "./components/Teams/Testimonials/Testimonials";
import Work from "./components/Work/Work";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Collaborate />
      <Work />
      <Connect/>
      <BuildWork/>
      <BuildTeams/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
