import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AddBook from './components/Books/AddBook';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Book Catalog</h1>
        <Switch>
          <Route exact path="/addbook" component={AddBook} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
