import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import AboutUs from './Components/AboutUs/AboutUs';
import NotFound from './Components/NotFound/NotFound';
import Navbarr from './Components/Navbarr/Navbarr';
import HealthTips from './Components/HealthTips/HealthTips';
import Shop from './Components/Shop/Shop';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbarr></Navbarr>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/aboutus">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/healthtips">
            <HealthTips></HealthTips>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route  exact path="/">
            <Home></Home>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>



        </Switch>
        <Footer></Footer>
      </Router>

     
    </div>
  );
}

export default App;
