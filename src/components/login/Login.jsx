import React, { useEffect, useState } from 'react'
import { Link,useHistory } from 'react-router-dom'
import { getUsers } from '../api/users'

export default function Login({setloggedUser}) {

    const [users,setUsers]=useState([])
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [message,setMessage]=useState('')
    let history=useHistory()
    useEffect(()=>{
        getUsers().then(res=>setUsers(res.data))
    },[])
    const handleSubmit=(e)=>{
       let user= users.find(user=>user.password===password&&user.username===username)
       if(user){
        console.log('AA');
       setloggedUser(user)
        history.push('/')
       }
       else setMessage('Wrong username/password')
    }
    return (
    <div className="flex h-96 justify-center my-9 py-4 content-center">
      <div className="max-w-xs w-96 block  ">
  <form className="bg-white block w-96 shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={e=>setUsername(e.target.value)}/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={e=>setPassword(e.target.value)}/>
      {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={e=>handleSubmit(e)}>
        Sign In
      </button>
      
      <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/register">
        Sign Up
      </Link>
    </div>
    <p>{message}</p>
  </form>

</div></div>
    )
}
