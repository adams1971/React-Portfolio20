import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Navbar from "./components/Nav/Navbar";
import PortfolioPage from "./Pages/Portfolio";
import './style.scss' 
import Home from './Pages/Home'

console.log('x: ', PortfolioPage)

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Route exact path="/" component={AboutMe}/>
        <Route path="/Portfolio" component={PortfolioPage}/>
        <Route path="/AboutMe" component={AboutMe}/>
        <Route path="/Home" component={Home}/>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
