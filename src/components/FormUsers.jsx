import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './formUsers.css'

const defaultValue = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    birthday: ''
}

const FormUsers = ({createNewUser, updateInfo, updateUserById, setUpdateInfo, setFormIsClose}) => {
    
    const {register, handleSubmit, reset} = useForm()

    useEffect(() => {
        if(updateInfo) {
            reset(updateInfo)
        }
    },[updateInfo])

    const submit = ( data ) => {
        if(updateInfo) {
            //Update
            updateUserById(updateInfo.id, data)
            setUpdateInfo()
        } else {
            //Create
            createNewUser(data)
            

        }
        reset(defaultValue)
        setFormIsClose(true)
    }

    const handleCloseForm = () => {
        setFormIsClose(true)
    }
  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
        <button  className='form__x' onClick={handleCloseForm}>X</button>
        <h3 className='form__title'>{updateInfo ? 'Update user' : 'Create new User'}</h3>
        <div className='form__div'>
            <label className='form__label' htmlFor="email">Email </label>
            <input className='form__input' type="email" id='email' {...register('email')}/>
        </div>
        <div className='form__div'>
            <label className='form__label' htmlFor="password">Password </label>
            <input className='form__input' type="password" id='password' {...register('password')}/>
        </div>
        <div className='form__div'>
            <label className='form__label' htmlFor="first_name">First Name </label>
            <input className='form__input' type="text" id='first_name' {...register('first_name')}/>
        </div>
        <div className='form__div'>
            <label className='form__label' htmlFor="last_name">Last Name </label>
            <input className='form__input' type="text" id='last_name' {...register('last_name')}/>
        </div>
        <div className='form__div'>
            <label className='form__label' htmlFor="birthday">Birthday </label>
            <input className='form__input' type='date' id='birthday' {...register('birthday')}/>
        </div>
        <button className='form__btn'>{updateInfo ? 'Update' : 'Create'}</button>
    </form>
  )
}

export default FormUsers