import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Main from "./container/Main";
import WebtoonHome from "./container/WebtoonHome";
import Viewer from "./container/Viewer";

class App extends React.Component{
  render(){
    return(
    <Router>
      <div>   
        <Route exact path="/" component={Main}/>
        <Route path="/webtoon/:webtoonId" component={WebtoonHome}/>
        <Route path="/viewer/:epiodeId" component={Viewer}/>

      </div>
    </Router>
    );
  }
}

export default App;

