import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Navbar from "./components/Nav/Navbar";
import PortfolioPage from "./Pages/Portfolio";
console.log('x: ', PortfolioPage)

function App() {
  return (
    <div>
      {/* <h1>Hello</h1>  */}
    
      <Router>
      <Navbar/>
        <Route exact path="/" component={AboutMe}/>
        <Route path="/AboutMe" component={AboutMe}/>
        <Route path="/Portfolio" component={PortfolioPage}/>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
