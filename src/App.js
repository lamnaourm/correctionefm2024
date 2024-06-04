import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Authentification from './components/Authentification';
import Menu from './components/Menu';
import Historique from './components/Historique';
import { useState } from 'react';

function App() {

  const [client, setClient] = useState()

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/auth' element={<Authentification setclient={setClient}/>}  />
          <Route path='/historique' element={<Menu client={client} />} >
            <Route index element={<Historique client={client} />} />
          </Route>
          <Route path='/chambre' element={<Menu client={client} />} >
            <Route index element={<Historique />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
