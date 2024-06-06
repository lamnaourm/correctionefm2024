import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {ajouter} from '../redux/hotelSlice'
import { useParams } from 'react-router-dom'

export default function Reservation() {
    const [id, setId] = useState()
    const [rdate, setRdate] = useState()
    const [nb_jour, setNbJour] = useState()
    const {idClient,  num_chambre} = useParams()

    const dispatch = useDispatch()
  return (
    <div>
        Id Reservation : <input type="number" name="id" id="id" value={id} onChange={(e) => setId(e.target.value)} />
        Date Reservation : <input type="date" name="id" id="id" value={rdate} onChange={(e) => setRdate(e.target.value)}/>
        Nombre de jour : <input type="number" name="id" id="id" value={nb_jour} onChange={(e) => setNbJour(e.target.value)}/>
        <button onClick={() => dispatch(ajouter({idRes:id, num_chambre, idClient, date_reservation:rdate, nombre_jour:nb_jour}))}>Ajouter Reservation</button>
    </div>
  )
}
