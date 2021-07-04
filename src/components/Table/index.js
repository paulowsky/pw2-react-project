import './index.css'

function Table(props) {
  const { dados } = props

  return (
    <table className="table">
      <thead>
        <tr>
          <th>IMC</th>
          <th>Classificação</th>
          <th>Grau de Obesidade</th>
        </tr>
      </thead>

      <tbody>
        {
          dados.map((d,index) => {
            return (
              <tr key={index}>
                <td>{d['IMC']}</td>
                <td>{d['Classificacao']}</td>
                <td>{d['GrauObesidade']}</td>
              </tr>
            )
          })
        }
      </tbody>

    </table>
  )
}

export default Table
