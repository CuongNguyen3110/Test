import React from 'react';
import './App.css';
import Posts from './posts/Posts';
import PostForm from './posts/PostForm';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact={true} component={PostForm} />
        <Route path='/posts' component={Posts} />
      </BrowserRouter>
    </div>
  );
}

export default App;
