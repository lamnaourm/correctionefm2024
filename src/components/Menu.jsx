import React, { useEffect } from 'react'
import { Link, navigate, Outlet, useNavigate } from 'react-router-dom'

export default function Menu({client}) {

  const navigate = useNavigate()

  useEffect(() => {

    if(!client)
      navigate('/')

  },[])

  return (
    <div>
      <ul>
        <li><Link to='historique'>Historique des reservations</Link> </li>
        <li><Link to='Chambres'>Chambres</Link> </li>
        <li><Link to='/'>Deconnexion</Link> </li>
      </ul>

      <Outlet />
    </div>
  )
}
