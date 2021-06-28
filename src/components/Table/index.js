import { useEffect } from 'react'

import './index.css'

function Table(props) {
  const { cabecalho, dados, showAlert } = props

  useEffect(() => {
    console.log(props)
  }, [])

  return (
    <table className="table">
      <thead>
        <tr>
          {
            cabecalho.map(c => {
              return <th key={c}>{c}</th>
            })
          }
        </tr>
      </thead>

      <tbody>
          {
            dados.map(d => {
              return (
                <tr key={d.nome}>
                  <td>{d.nome}</td>
                  <td>{d.idade}</td>
                  <td className="action"><button onClick={() => showAlert(JSON.stringify(d, null, 2))}>show data</button></td>
                </tr>
              )
            })
          }
      </tbody>

    </table>
  )
}

export default Table
