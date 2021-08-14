import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider' ;
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import './App.css';



const App = () => {
  return (
    <MuiThemeProvider>
      <div>
       <Navbar />
       <Search />
      </div>
    </MuiThemeProvider> 
  );
}

export default App;
