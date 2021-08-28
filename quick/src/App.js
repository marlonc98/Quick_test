import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import RoutesComponent from './routes/Routes';
import { ModalContext } from './context/ModalContext';
import { UserContext } from './context/UserContext';
import ModalAlert from './components/subcomponents/Modal';
import AuthService from './services/AuthService';
import Header from './components/subcomponents/Header';

function App() {
  const [modal, setModal] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(()=>{
    //check user
    AuthService.getUser().then(setUser);
  },[]);

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
      <Header/>
        <ModalContext.Provider value={{ modal, setModal }}>
          <RoutesComponent typeUser={user?.type_user} />
          <ModalAlert />
        </ModalContext.Provider >
      </UserContext.Provider>
    </Router >
  );
}

export default App;
