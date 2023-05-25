import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Footer from './components/Footer';
import menuList from './pages/Menu'
import about from './pages/About'
import contact from './pages/Contact'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={menuList} />
          <Route path="/about" exact component={about} />
          <Route path="/contact" exact component={contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
