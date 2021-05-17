import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";

// import components
import Feelings from '../Feelings/Feelings';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success'

function App() {

  return (
    <div className='App'>
      
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router >
        <Route path="/" exact>
          <Feelings />
        </Route>
        <Route path="/Understanding">
          <Understanding />
        </Route>
        <Route path="/Support">
          <Support />
        </Route>
        <Route path="/Comments">
          <Comments />
        </Route>
        <Route path="/Review">
          <Review />
        </Route>
        <Route path="/Success">
          <Success />
        </Route>
      </Router>

    </div>
  );
}

export default App;
