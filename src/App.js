import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/home/Home';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
    <div className="App">
       
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
      </Switch>
      <Footer/>
     </div>
     </Router>
     
    
  );
}

export default App;
