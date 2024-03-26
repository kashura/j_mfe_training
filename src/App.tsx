import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import TransacTable from './components/TransacTable';


function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <TransacTable />
    </div>
  );
}

export default App;
