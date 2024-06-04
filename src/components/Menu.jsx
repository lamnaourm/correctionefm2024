import React, { useEffect } from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'

export default function Menu({client}) {

  useEffect(() => {

    if(!client)
      Navigate('/auth')

  },[])

  return (
    <div>
      <ul>
        <li><Link to='historique'>Historique des reservations</Link> </li>
        <li><Link to='Chambres'>Chambres</Link> </li>
        <li><Link to='auth'>Deconnexion</Link> </li>
      </ul>

      <Outlet />
    </div>
  )
}
