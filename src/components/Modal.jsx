import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import useEscapeKey from '../hooks/useEspKey'
import MessageDelete from './MessageDelete'
import FormUsers from './FormUsers'

const Modal = ({createUser, updateUser, userUpdate, setUserUpdate, setIsOpen, isOpen, userDelete, setUserDelete, deleteUser}) => {
  const onEscPress = () => {
      setIsOpen(false)
      setUserUpdate()
      setUserDelete()
  }

  useEscapeKey(onEscPress)
  
  const handleClose = (e) => {
    if(e.target.matches(".close")){
      setIsOpen(false)
      setUserUpdate()
      if(userDelete){
        setUserDelete()
      }
    }
  }

  return (
  <div onClick={ handleClose }
    className={`close container-modal ${isOpen ? "" : "disable"}`}>
    <span className="close form__x material-symbols-outlined">
      close
    </span>
    { userDelete ? 
      <MessageDelete 
        userDelete={userDelete}   
        deleteUser={deleteUser} 
        setUserDelete={setUserDelete} 
        handleClose={handleClose}
      /> 
    : 
      <FormUsers 
        createUser={createUser}
        updateUser={updateUser}
        userUpdate={userUpdate}
        setUserUpdate={setUserUpdate}
      />
    }

  </div>
  )
}

export default Modal