import './style/app.scss'
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import { 
  Section,
  Header,
  Menu,
  Cover, 
  Title, 
  PostGrid,
  Button,
  Article,
  DecorEllipse,
  Logo
} from "./components"

import Home from './pages/Home';
import Privileges from './pages/Privileges';
import UserAccount from './pages/UserAccount';


function App() {
 
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route exact path='/Privileges' element={<Privileges />} />
          <Route exact path='/UserAccount' element={<UserAccount />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
