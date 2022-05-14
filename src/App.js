import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Checkout } from './components/Checkout';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

const App = () => {
  const [_, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="App">       
          <Routes>
              <Route exact path='/' element={ <Home />} />      
              <Route exact path='/checkout' element={ <Checkout /> } />
              <Route exact path='/login' element={ <Login /> } />            
          </Routes>        
      </div>
    </Router>
  );
}

export default App;
