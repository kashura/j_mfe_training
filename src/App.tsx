import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Menu/Header';
import Search from './components/Search';
import TransacTable from './components/TransacTable';
import Country from './components/Country/Country';


function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <TransacTable />
      <Country />
    </div>
  );
}

export default App;
