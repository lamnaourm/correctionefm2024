import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Authentification from './components/Authentification';
import Menu from './components/Menu';
import Historique from './components/Historique';
import { useState } from 'react';
import Chambres from './components/Chambres';

function App() {

  const [client, setClient] = useState()

  return (
    <div>
      <BrowserRouter>
        <Route path='/' element={<Authentification setclient={setClient} />} />
        <Route path='/historique/:idclient' element={<Historique />} />
        <Route path='/chambres/:idclient' element={<Chambres />} />
        <Route path='/reservation/:idclient/:idchambre' element={<Chambres />} />
      </BrowserRouter>

    </div>
  );
}

export default App;
