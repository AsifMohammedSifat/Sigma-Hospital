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
import AuthProvider from './Context/AuthProvider';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
     <AuthProvider>
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
          <PrivateRoute path="/healthtips">
            <HealthTips></HealthTips>
          </PrivateRoute>

          {/* details  */}
          <PrivateRoute path="/calldoctor">
            <CallDoctor></CallDoctor>           
          </PrivateRoute>
          <PrivateRoute  path="/details/:detailsId">
            <Details></Details>
            
          </PrivateRoute>

          {/* log in  */}
          <Route path="/login">
            <Login></Login>

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

     
     </AuthProvider>
    </div>
  );
}

export default App;
