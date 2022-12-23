import React, { useState } from 'react'

const UserCard = ({user, setUserUpdate, setUserDelete, setIsOpen}) => {
  const handleClick = (e) => {
    if(!!e.target.closest(".delete") ) {
      setUserDelete(user)
      setIsOpen(true)
    }
    if(!!e.target.closest(".edit") ){
      {
        setUserUpdate(user)
        setIsOpen(true)
      }
    }
  }
  
  return (
    <article className='user'>
      <h2 className='user__title'>{`${user.first_name} ${user.last_name}`}</h2>
      
      <ul className='user__list'>
        <li className='user__item'><span>Email:</span>{user.email}</li>
        <li className='user__item'>
          <span>
            <span className="material-symbols-outlined">
            redeem
            </span>Birthday:</span>{user.birthday}</li>
      </ul>
      <div className="user__container-btn">
        <button className="delete user__btn" onClick={handleClick}>
          <span className="material-symbols-outlined ">
            delete
          </span>
        </button>
        <button className="edit user__btn" onClick={handleClick}>
          <span className="material-symbols-outlined ">
            edit
          </span>
        </button>
      </div>
    </article>
  )
}

export default UserCard