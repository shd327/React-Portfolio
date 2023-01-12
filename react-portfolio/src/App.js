import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Portfolio from './components/Portfolio/Portfolio'
import 'bootstrap/dist/css/bootstrap.min.css';
{/* <Router>
  <Switch>
    <Route exact path='/'>
      <Home />
    </Route>
    <Route exact path='/Skills'>
      <Skills />
    </Route>
    <Route exact path='/Projects'>
      <Projects />
    </Route>
  </Switch>


</Router> */}
// import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
{/* // <Portfolio /> */ }
function App() {
  return (

    <>

      <Portfolio />
    </>


  );
}

export default App;
