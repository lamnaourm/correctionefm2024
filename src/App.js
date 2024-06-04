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
        <Routes>
          <Route path='/' element={<Menu client={client} />} >
            <Route path='/historique' element={<Historique client={client} />} />
            <Route path='/chambre' element={<Chambres />} />
          </Route>
          <Route path='/auth' element={<Authentification setclient={setClient} />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
