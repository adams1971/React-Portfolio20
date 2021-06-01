import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Navbar from "./components/Nav/Navbar";
import PortfolioPage from "./Pages/Portfolio";
import './style.scss' 
import Home from './Pages/Home'
import About from './Pages/About'

console.log('x: ', PortfolioPage)

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Route exact path="/" component={AboutMe}/>
        <Route path="/Portfolio" component={PortfolioPage}/>
        <Route path="/About" component={About}/>
        <Route path="/Home" component={Home}/>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
