import React, {Component} from 'react'

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Remove</th>
        </tr>
      </thead>
    )
  }
  function TableBody(props) {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>
}

class Table extends Component {
  render() {
    const {characterData} = this.props
    const {removeCharacter} = this.props
    return (
      <table>
        <TableHeader/>
        <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
      </table>
    )
  }
}

export default Table