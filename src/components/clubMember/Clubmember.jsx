import React, { useState } from 'react'
import {  updateUser } from '../api/users'
import { toast, ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { Redirect } from 'react-router';

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
         notify('You Already Have One')
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
         notify('You Already Have One')
    }
    else {
           notify()
        const a= await updateUser(user.id,{isRegular:true})
       setLoggedUser(a.data)
       setUser(a.data)
    }
    }
    if(!user){
        return <Redirect to="/login"></Redirect>
    }
    else
    return (
        <section className="w-full pt-16 pb-20 bg-gray-800">
            <ToastContainer/>
    <div className="px-10 mx-auto text-center max-w-7xl">
        <h2 className="text-5xl font-bold text-gray-500">
            Card <span className="text-yellow-600">Member</span>
        </h2>
     
        <div className="grid gap-5 mt-12 lg:grid-cols-3 md:grid-cols-2">


            <div className="relative flex flex-col justify-between p-8 lg:p-6 xl:p-8 rounded-2xl">

                <div className="absolute inset-0 w-full h-full transform translate-x-2 translate-y-2 bg-gray-500 rounded-2xl"></div>
                <div className="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-2xl"></div>
                <div className="relative flex pb-5 space-x-5 border-b border-gray-200 lg:space-x-3 xl:space-x-5">
                 
                    <div className="relative flex flex-col items-start">
                        <h3 className="text-xl text-white font-bold">Regular Card</h3>
                        <p className="tracking-tight text-gray-500">
                            <span className="text-sm transform inline-block -translate-y-2.5 relative text-white">$</span>
                            <span className="text-3xl font-bold text-white">10</span>
                            <span className="text-white -translate-y-0.5 inline-block transform">/ user</span>
                        </p>
                    </div>
                </div>

                <ul className="relative py-12 space-y-3 text-white">
                    <li className="flex items-center space-x-2 text-sm font-medium text-gray-500">
                       
                        <span>Custom Design &amp; Features</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm font-medium text-gray-500">
                   
                        <span className="text-white">Special Notifications</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm font-medium text-white">
                     
                        <span>Discount 10%</span>
                    </li>
                </ul>

                <button className="relative flex items-center justify-center w-full px-5 py-5 text-lg font-medium text-white rounded-xl  group">
                    <span className="w-full h-full absolute inset-0 transform translate-y-1.5 translate-x-1.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ease-out duration-200 rounded-xl bg-gray-200"></span>
                    <span className="absolute inset-0 w-full h-full border-2 border-gray-500 bg-gray-500 rounded-xl"></span>
                    <span className="relative " onClick={handleRegular} >Choose Plan</span>
                  
                </button>

            </div>
        
            <div className="relative p-8 lg:p-6 xl:p-8  rounded-2xl">

                <div className="absolute inset-0  w-full h-full transform translate-x-2 translate-y-2 bg-yellow-500 rounded-2xl"></div>
                <div className="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-2xl"></div>
                <div className="relative flex pb-5 space-x-5 border-b border-gray-200 lg:space-x-3 xl:space-x-5">
                    
                    <div className="relative flex flex-col items-start">
                        <h3 className="text-xl font-bold">Gold Plan</h3>
                        <p className="tracking-tight text-gray-500">
                            <span className="text-sm transform inline-block -translate-y-2.5 relative">$</span>
                            <span className="text-3xl font-bold text-gray-800">25</span>
                            <span className="text-sm -translate-y-0.5 inline-block transform">/ user</span>
                        </p>
                    </div>
                </div>

                <ul className="relative py-12 space-y-3">
                    <li className="flex items-center space-x-2 text-sm font-medium text-gray-500">
                        
                        <span>Dedicated Design Team</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm font-medium text-gray-500">
                       
                        <span>Custom Design &amp; Features</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm font-medium text-gray-500">
                        
                        <span>Access to 200+ Components</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm font-medium text-gray-500">
                       
                        <span>Priority Email &amp; Chat Support</span>
                    </li>
                </ul>

                <button  className="relative flex items-center justify-center w-full px-5 py-5 text-lg font-medium text-white rounded-xl group">
                    <span className="w-full h-full absolute inset-0 transform translate-y-1.5 translate-x-1.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ease-out duration-200 rounded-xl bg-yellow-500"></span>
                    <span className="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-xl"  onClick={handleGold}></span>
                    <span className="relative" >Choose Plan</span>
                   
                </button>

            </div>

        


        </div>
    </div>
</section>
    // <>
 /* { <ToastContainer autoClose={1500}/>

{<span className="text-red-500 m-2 none text-2xl block w-full text-center">{message.message1?<>{notify(message.message2)?'':''}</>:''}</span>}
{   
    
    <div className="w-4/4 flex flex-wrap justify-center align-center h-full">
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
            p-2 rounded mx-auto border-solid border-white cursor-pointer hover:bg-white hover:text-yellow-700" onClick={handleGold}>Buy Now</Link>

}

        </div>
        {<span className="text-red-500 m-2 text-2xl block w-full text-center">
     
            {message.messag2?notify(message.message2):null}</span>}
        <div className="lg:w-7/12 max-w-screen-md md:w-8/12   sm:w-10/12 h-96 bg-gradient-to-br from-gray-700 to-gray-300  rounded m-4 flex justify-between flex-col shadow-2xl">
                   <h3 className="text-white text-4xl text-center m-4">
                Paltinum member
            </h3>
            <span className="text-center m-4 text-white text-6xl  w-2/4 my-2
            p-2 rounded mx-auto ">
                Discount 10%
                
            </span>
         {user?
            <Link to={'/clubmember'}className="text-center m-4 text-white text-4xl border-2 w-2/4 my-2
            p-2 rounded mx-auto border-solid border-white cursor-pointer text-white border-white hover:bg-gray-500 hover:text-white" onClick={handleRegular}>Buy Now</Link>:
              <Link to='/login' className="text-center m-4 text-white text-4xl border-2 w-2/4 my-2
            p-2 rounded mx-auto border-solid border-white cursor-pointer text-green-500 border-green-500 hover:bg-gray-500 hover:text-white" onClick={handleRegular}>Buy Now</Link>
         }
        </div>
    </div>
}
//  </>   ) }*/
    )

}
