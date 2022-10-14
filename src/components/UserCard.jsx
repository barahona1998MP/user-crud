import React from 'react'
import './userCard.css'
const UserCard = ({user, deleteUserById, setUpdateInfo, setFormIsClose}) => {

  const handleEdit = () => {
    setUpdateInfo(user)
    setFormIsClose(false)
  }
  return (
    <articlev className="card">
        <h3 className='card__name'>{`${user.first_name} ${user.last_name}`}</h3>
        <ul className='card__item'>
            <li className='card__list'>Email<span className='card__span'>{user.email}</span></li>
            <li className='card__list'>Birthday<span className='card__span'>{user.birthday}</span></li>
        </ul>
        <footer className='card__footer'>
        <i onClick={() => deleteUserById(user.id)} className="card__btn fa-regular fa-trash-can"></i>
        <i onClick={handleEdit} className="card__btn  fa-regular fa-pen-to-square"></i>
        </footer>
    </articlev>
  )
}

export default UserCard