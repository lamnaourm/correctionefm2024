import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {supprimer} from '../redux/hotelSlice'

export default function Historique() {

  const {idclient} = useParams()
  const dispatch = useDispatch()
  const reservations = useSelector(state => state.reservations.filter(r => r.idclient==idclient))
  const clients = useSelector(state => state.clients)
  const chambres = useSelector(state => state.chambres)

  const calcul_total = () => {
    let som = 0; 

    reservations.forEach(element => {
      const montant = chambres.find(c => c.num == element.num_chambre).montant
      som += montant * element.nombre_jours
    });

    return som;
  }

  
  return (
    <div>
      <table>
        <tr>
          <th>Id Reservation</th>
          <th>Nom Client</th>
          <th>type Chambre</th>
          <th>Date reservation</th>
          <th>Nombre de jour</th>
          <th>Supprimer</th>
        </tr>
        <tr>
          {reservations.map(r => <tr> 
            <td>{r.idRes}</td>
            <td>{clients.find(c => c.idclient == r.idclient).nom}</td>
            <td>{chambres.find(c => c.num == r.num_chambres).type}</td>
            <td>{r.date_reservation}</td>
            <td>{r.nombre_jours}</td>
            <td><button onClick={() => dispatch(supprimer(r.idRes))}>Supprimer</button></td>
          </tr>)}
        </tr>
      </table>
      Total : {calcul_total()}
    </div>
  )
}
