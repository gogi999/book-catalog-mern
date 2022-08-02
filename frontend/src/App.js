import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AddBook from './components/Books/AddBook';
import Books from './components/Books/Books';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/books" component={Books} />
          <Route exact path="/addbook" component={AddBook} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
