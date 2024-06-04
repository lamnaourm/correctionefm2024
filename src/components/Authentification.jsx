import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Authentification({setClient}) {

  const [login, setLogin] = useState()
  const [pass, setPass] = useState()
  const clients = useSelector(state => state.clients)
  const navigate = useNavigate()

  const handleClick = () => {
    clients.foreach(cl => {
      if(cl.login == login && cl.password == pass) {
        setClient(cl);
        navigate('/historique')
        return;
      }
    })

    alert("Client n'existe pas");
  }

  return (
    <div>
      Login : <input type="text" name="login" id="login" value={login} onChange={(e) => setLogin(e.target.value)}/>
      Password : <input type="password" name="pass" id="pass" value={pass} onChange={(e) => setPass(e.target.value)}/>
      <button onClick={handleClick}>Se connecter</button>
    </div>
  )
}
