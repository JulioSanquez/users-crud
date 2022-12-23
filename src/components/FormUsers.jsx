import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const DEFAULT_VALUES = {
  email:"",
  password:"",
  first_name:"",
  last_name:"",
  birthday:""
}
const REG_EX = "/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i"

let validationEmail = {
  required: "Email requerido",
  minLength: {
    message:"Email is too short",
    value:3
  },
  // maxLength: {
  //   message:"Email is too long",
  //   value:10
  // },
  pattern: {
    message:"Write a valid email",
    value: REG_EX
  }
} 

const FormUsers = ({createUser, updateUser, userUpdate, setUserUpdate }) => {
  const {handleSubmit, register, reset, formState:{errors}} = useForm()


  const submitForm = (data) => {
    if(userUpdate){
      updateUser(userUpdate.id, data, reset, DEFAULT_VALUES)
    }else{
      createUser(data, reset, DEFAULT_VALUES)
    }
  }

  const handleClear = () => {
    setUserUpdate()
    reset(DEFAULT_VALUES)
  }

  useEffect(() => {
    if(!userUpdate) return reset(DEFAULT_VALUES)
    
    reset(userUpdate)

  }, [userUpdate])

  return (
      <form className='form'  onSubmit={handleSubmit(submitForm)} >
        <h2>{userUpdate ? "Edit User" : "Create User"}</h2>
        <div className='form__div'>
          <label className='form__label'>Email</label>
          <input className='form__input' type="email" 
            {...register("email", validationEmail)}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className='form__div'>
          <label className='form__label'>Password</label>
          <input className='form__input' type="password" {...register("password")} />
        </div>
        <div className='form__div'>
          <label className='form__label'>First Name</label>
          <input className='form__input' type="text" {...register("first_name")} />
        </div>
        <div className='form__div'>
          <label className='form__label'>Last Name</label>
          <input className='form__input' type="text" {...register("last_name")} />
        </div>
        <div className='form__div'>
          <label className='form__label'>Birthday</label>
          <input className='form__input' type="date" {...register("birthday")} />
        </div>
        <button className='btn' type='button' onClick={ handleClear }> Clear Form </button>
        <button className='btn' type='submit'>{userUpdate ? "Save Changes" : "Add User"}</button>
      </form>
  )
}

export default FormUsers