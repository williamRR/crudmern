import React from 'react'
import Table from 'react-bootstrap/Table'

const UsersList = ({
  tasks, 
  handleEdit,
  handleDelete,
}) => {

  return (
    <Table striped bordered hover size="sm">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">PRIMER NOMBRE</th>
          <th scope="col">SEGUNDO NOMBRE</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((user) => {
          return (
            <tr key={user._id} className="task">
              <td>
                {tasks.indexOf(user) + 1}
              </td>
              <td>
                {user.firstName}
              </td>
              <td>
                {user.secondName}
              </td>
              <td>
                <button
                  type="submit"
                  className="btn btn-info btn-sm"
                  onClick={() =>
                    handleEdit(user._id)
                  }
                >
                  EDITAR
                      </button>
              </td>
              <td>
                <button
                  type="submit"
                  className="btn btn-danger btn-sm"
                  onClick={() =>
                    handleDelete(user._id)
                  }
                >
                  ELIMINAR
                      </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default UsersList
