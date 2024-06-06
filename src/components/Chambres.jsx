import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

export default function Chambres() {

  const chambres = useSelector(state => state.chambres)
  const [type, setType] = useState()
  const navigate = useNavigate()
  const {idClient} = useParams()

  const getAlltypes = () => {
    let types = [];

    chambres.forEach(element => {
      if(types.find(t => t == element.type))
        types.push(t)
    });

    return types;
  }

  return (
    <div>
      <select name="type" id="type" value={type} onChange={(e) => setType(e.target.value)}>
        {getAlltypes().map(t => <option>
          {t}
        </option>)}
      </select>
      <table>
        <tr>
          <th>Num chambre</th>
          <th>Type chambre</th>
          <th>Prix chambre</th>
          <th>Reserver</th>
        </tr>
        {
          chambres.filter(c => c.type == type).map(ch => <td>
            <td>{ch.num}</td>
            <td>{ch.type}</td>
            <td>{ch.prix}</td>
            <td><button onClick={() => navigate(`/reservation/${idClient}/${ch.num}`)}>Reserver</button> </td>
          </td>)
        }
      </table>
    </div>
  )
}
