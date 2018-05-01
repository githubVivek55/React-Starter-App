import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './components/common/navbar';
import MainContent from './components/Home/default';
import Footer from './components/common/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        
        <MainContent/>
        <Footer/>
      </div>
    );
  }
}

export default App;
