import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React,{useState, useEffect} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/home/Home';
import Footer from './components/layout/Footer';

function App() {
  const [user,setUser] = useState(null);
    return (
      <Provider store={store}>
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
     </Provider>
     
    
  );
}

export default App;
