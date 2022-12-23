import React from 'react'

const MessageDelete = ({userDelete, deleteUser}) => {
  const handleDelete = (e) => {
      deleteUser(userDelete.id)
  }
  return (
    <div className='message-delete'>
      <h2>Eliminar Usuario</h2>
      <p> ¿Seguro que deseas eliminar a <b> { userDelete.first_name} { userDelete.last_name}</b>?</p>
      <div className='buttons'>
        <button className='btn MD__btn close' onClick={handleDelete}>Si, deseo borrarlo.</button>
        <button className='btn MD__btn close'>No, no lo borres please.</button>
      </div>
    </div>
  )
}

export default MessageDelete