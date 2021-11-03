import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {  updateUser } from '../api/users'
import { toast, ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Clubmember({loggedUser,setLoggedUser}) {
    const notify=(msg='Your Card Member Now')=>toast(msg)
    const [user,setUser]=useState(loggedUser)
    const [message,setMessage]=useState({
        message1:'',
        message2:''
    })
    const handleGold=async()=>{
    
        if(user&&user.isGold){
        setMessage({message1:'You Already Have One',message2:message.message2})

            return
        }
        else
        { 
            notify()
           const a=await updateUser(user.id,{isGold:true})
           setLoggedUser(a.data)
            setUser(a.data)

        }
    }
    const handleRegular=async()=>{
     
    if(user.isRegular){
       setMessage({message1:message.message1,message2:'You Already Have One'})

    }
    else {
           notify()
        const a= await updateUser(user.id,{isRegular:true})
       setLoggedUser(a.data)
       setUser(a.data)
    }
    }

    return (<>
  <ToastContainer autoClose={1500}/>

{<span className="text-red-500 m-2 none text-2xl block w-full text-center">{message.message1?<>{notify(message.message2)?'':''}</>:''}</span>}
{   
    
    <div className="w-4/4 flex flex-wrap  justify-center align-center h-full">
        <div className="bg-gradient-to-br from-yellow-500 to-yellow-300 max-w-screen-md md:w-8/12
        sm:w-10/12 lg:w-7/12 h-96 rounded-md m-4 flex justify-between flex-col shadow-2xl ">
            <h3 className="text-white text-4xl text-center m-4">
                Gold member
            </h3>
            <span className="text-center m-4 text-white text-5xl  w-2/4 my-2
            p-2 rounded mx-auto ">
                Discount 20%
            </span>
            
            {user?
            <Link to='/clubmember' className="text-center m-4 text-white text-4xl border-2 w-2/4 my-2
            p-2 rounded mx-auto border-solid border-white cursor-pointer hover:bg-white hover:text-yellow-700" onClick={handleGold}>Buy Now</Link>:
              <Link to='/login' className="text-center border-white m-4 text-white text-4xl border-2 w-2/4 my-2
            p-2 rounded mx-auto border-solid border-white cursor-pointer hover:bg-white hover:text-yellow-700" >Buy Now</Link>

}

        </div>
        {<span className="text-red-500 m-2 text-2xl block w-full text-center">
     
            {message.messag2?notify(message.message2):null}</span>}
        <div className="lg:w-7/12 max-w-screen-md md:w-8/12   sm:w-10/12 h-96 bg-gradient-to-br from-green-700 to-green-300  rounded m-4 flex justify-between flex-col shadow-2xl">
                   <h3 className="text-white text-4xl text-center m-4">
                Regular member
            </h3>
            <span className="text-center m-4 text-white text-6xl  w-2/4 my-2
            p-2 rounded mx-auto ">
                Discount 10%
                
            </span>
         {user?
            <Link to={'/clubmember'}className="text-center m-4 text-white text-4xl border-2 w-2/4 my-2
            p-2 rounded mx-auto border-solid border-white cursor-pointer text-white border-white hover:bg-green-500 hover:text-white" onClick={handleRegular}>Buy Now</Link>:
              <Link to='/login' className="text-center m-4 text-white text-4xl border-2 w-2/4 my-2
            p-2 rounded mx-auto border-solid border-white cursor-pointer text-green-500 border-green-500 hover:bg-green-500 hover:text-white" >Buy Now</Link>
         }
        </div>
    </div>
}
 </>   )
}
