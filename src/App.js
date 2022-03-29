import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Icons from "./components/Icons";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/blogs" exact component={Blogs}/>
        </Switch>
          <Icons/>
        <Footer/>
      </Router>
    </div> 
  );
}

export default App;
