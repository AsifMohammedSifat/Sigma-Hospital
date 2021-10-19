import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import AboutUs from './Components/AboutUs/AboutUs';
import NotFound from './Components/NotFound/NotFound';
import Navbarr from './Components/Navbarr/Navbarr';
import HealthTips from './Components/HealthTips/HealthTips';
import Footer from './Components/Footer/Footer';
import Details from './Components/Details/Details';
import CallDoctor from './Components/CallDoctor/CallDoctor';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbarr></Navbarr>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          {/* service  */}
          <Route path="/services">
            <Services></Services>
          </Route>

          {/* about us  */}
          <Route path="/aboutus">
            <AboutUs></AboutUs>
          </Route>

          {/* health tips  */}
          <Route path="/healthtips">
            <HealthTips></HealthTips>
          </Route>

          {/* details  */}
          <Route path="/calldoctor">
            <CallDoctor></CallDoctor>           
          </Route>
          <Route  path="/details/:detailsId">
            <Details></Details>
            
          </Route>

          {/* by default  */}
          <Route  exact path="/">
            <Home></Home>
          </Route>

          {/* wrong search  */}
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
