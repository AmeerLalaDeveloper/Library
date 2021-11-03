import React, { useState } from 'react'

export default function Contact() {
    const [input,setInput]=useState({})


    const [message,setMessage]=useState(
        {
           firstname:null, 
           lastname:null, 
           email:null
        }
    )
    const sendEmail=()=>{

     
    }

    const validateEmail=(email)=>{
        console.log(email);
     return !(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/).test(email)
    }
    const handleInput=(e)=>{
        const temp={...input}
        temp[e.target.name]=e.target.value;
        setInput({...temp})
    }
    const handleSubmit=(e)=>{
        const msg={}
       if(!input['firstname'])
       msg['firstname']='You Must Fill First Name'
        if(!input['lastname'])
       msg['lastname']='You Must Fill First Name'
      if(!input['email'])
       msg['email']='You Must Fill First Name'
       else if(validateEmail(input['email']))
       msg['email']='Wrong Email Address'
       setMessage({...msg})

       if(Object.keys(msg).length===0){
           sendEmail()
       }


       
    }
    return (
       <div className="flex justify-center align-center mt-8">
            <form className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" htmlFor="grid-first-name">
        First Name
      </label>
      <input className="appearance-none block w-full bg-gray-300 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name" name="firstname" onChange={e=>handleInput(e)}/>
      <p className="text-red-500 text-xs italic">{message['firstname']}</p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Last Name
      </label>
      <input className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Last Name" name="lastname" onChange={e=>handleInput(e)}/>
       <p className="text-red-500 text-xs italic">{message['lastname']}</p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" htmlFor="grid-password">
        E-mail
      </label>
      <input className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" name="email" onChange={e=>handleInput(e)}/>

       <p className="text-red-500 text-xs italic">{message['email']}</p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" htmlFor="grid-password">
        Message
      </label>
      <textarea className=" no-resize appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" name="text" onChange={e=>handleInput(e)}></textarea>
    </div>
  </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3">
      <button className="block shadow py-2 px-6 bg-blue-700 hover:bg-blue-200 hover:text-gray-800 focus:shadow-outline focus:outline-none text-gray-200 font-bold rounded" type="button" onClick={e=>handleSubmit(e)}>
        Send
      </button>
    </div>
    <div className="md:w-2/3"></div>
  </div>
</form>
       </div>
    )
}
