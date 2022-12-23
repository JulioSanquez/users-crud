import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Modal from './components/Modal'
import UserCard from './components/UserCard'

const BASE_URL = "https://users-crud.academlo.tech/"

function App() {
  const [users, setUsers] = useState()
  const [userUpdate, setUserUpdate] = useState()
  const [userDelete, setUserDelete] = useState()  
  const [isOpen, setIsOpen] = useState(false)

  const getAllUsers = () => {
    const URL = `${BASE_URL}users/`
    axios.get(URL)
      .then( ({data}) => {
        setUsers(data)
        console.log(data)
      })
      .catch( err => console.log(err))
  }

  const createUser = (info, reset, DEFAULT_VALUES) => {
    const URL = `${BASE_URL}users/`
    console.log(URL,info)
    axios.post(URL, info)
      .then( ({data}) => {
        console.log(data) 
        reset(DEFAULT_VALUES)
        getAllUsers()
      })
      .catch( err => console.log(err) )
  }

  useEffect(() => {
    getAllUsers()
  }, [])  

  const deleteUser = (id) => {
    const URL = `${BASE_URL}users/${id}`

    axios.delete(URL, id)
      .then( ({data}) => {
        console.log(data)
        getAllUsers()
      })
      .catch( err => console.log(err))
  }

  const updateUser = ( id,user, reset, DEFAULT_VALUES) => {
    const URL = `${BASE_URL}users/${id}/`

    axios.patch(URL, user)
      .then( ({data}) => {
        console.log(data)
        setUserUpdate()
        reset(DEFAULT_VALUES)
        getAllUsers()
      })
      .catch( err => console.log(err))
  }
  return (
    <div  className="App">
      <header className='header'>
        <h1>CRUD Users</h1>
        <button className='header__btn btn' onClick={() => setIsOpen(true)}> Crear Usuario </button>
      </header>
      <Modal 
        createUser={createUser} 
        userUpdate={userUpdate}
        updateUser={updateUser}
        setUserUpdate={setUserUpdate}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        userDelete={userDelete}
        setUserDelete={setUserDelete}
        deleteUser={deleteUser}

      />
      <hr />
      <div className="users-container">
        {
          users?.map(user => <UserCard 
            key={user.id} 
            user={user} 
            setUserUpdate={setUserUpdate}
            setIsOpen={setIsOpen}
            setUserDelete={setUserDelete}
          />)
        }
      </div>
    </div>
  )
}

export default App
