import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUsers } from '../api/users'
import { Redirect } from 'react-router'

export default function Login({setloggedUser}) {

    const [users,setUsers]=useState([])
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [message,setMessage]=useState('')
    const [redirect,setRedirect]=useState(false)
    useEffect(()=>{
        getUsers().then(res=>setUsers(res.data))
    },[])
    const handleSubmit=(e)=>{
      e.preventDefault()
      console.log(password,username);
       let user= users.find(user=>user.password===password&&user.username===username)
       if(user){
       setloggedUser(user)
      setRedirect(true)
       }
       else 
       setMessage('Wrong username/password')
    }
    if(redirect)
    return <Redirect to="/home"></Redirect>
    else
    return (

    <section className="min-h-screen flex items-stretch text-white ">
        <div className="lg:flex w-1/2 hidden bg-no-repeat bg-cover relative items-center">
            
            <div className="w-full px-24 z-10">
                <h1 className="text-5xl font-bold text-left tracking-wide">Keep it special</h1>
                <p className="text-3xl my-4">Capture your personal memory in unique way, anywhere.</p>
            </div>
        
        </div>
        <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0" >
            <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" >
                <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
            </div>
            <div className="w-full py-6 z-20">
                
                <div className="py-6 space-x-2">
                    <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">f</span>
                    <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">G+</span>
                    <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">in</span>
                </div>
               
                <form action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                    <div className="pb-2 pt-4">
                        <input type="text" name="username" id="" placeholder="Username" className="block w-full p-4 text-lg rounded-sm text-gray-800 rounded bg-gray-300 placeholder-gray-800" onChange={e=>setUsername(e.target.value)}/>
                    </div>
                   
                    <div className="pb-2 pt-4">
                        <input className="block w-full p-4 text-lg text-gray-800  rounded bg-gray-300
                        placeholder-gray-800" type="password" name="password" id="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                    </div>
                    <div className="text-right text-gray-400  hover:underline hover:text-gray-100">
                        <Link to="/register">Sign Up</Link>
                    </div>
                    <div className="px-4 pb-2 pt-4">
                        <button className="uppercase block w-full p-4 text-lg rounded-full bg-transparent border-2  hover:bg-white hover:text-gray-800 hover:text-2xl hover:text-red-500 focus:outline-none" onClick={handleSubmit}>sign in</button>
                         {message!==''?<span>{message}</span>:''}
                    </div>

                   
                </form>
            </div>
        </div>
    </section>
              
     
    )
}
