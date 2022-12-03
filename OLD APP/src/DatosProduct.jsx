
import React from 'react'

export const DatosProduct = ({value}) => {

  console.log(value)
  return (
        <tr>
          <th scope="row">{value.entry_id}</th>
          <td>{value.field1}</td>
          <td>{value.field2}</td>
          <td>{value.field3}</td>
          <td>{value.field4}</td>
        </tr>
  )
}
