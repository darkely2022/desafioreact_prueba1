import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import TurnoPage from "./pages/TurnoPage";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import pildora from './assets/imgs/pildora.jpg';

function App() {
  return (
   <>
   <Header/>

    <Router>
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              
              <Link  to="/HomePage">Inicio</Link>
            </a>
            <a className="nav-link" href="#">
              <Link to="/TurnoPage">Acerca De</Link>
            </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="grid-container">

        <div className="row">
          <div className="col-4">
          <div className="imagen-pildora" ><img className="pildora" src={pildora} /></div>
          </div>
          <div className="col-8">
          <Switch>        
            <Route path="/HomePage">
              <HomePage/>
            </Route>
            <Route path="/TurnoPage">
              <TurnoPage/>
            </Route>
          </Switch>
          </div> 
          </div>
        </div>
    </div>
    </Router>
    
   <Footer/>
   </>
  );
}

export default App;
