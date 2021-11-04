import React, { useEffect, useState } from 'react'
import { getUsers,postUser } from '../api/users';
import { Redirect } from 'react-router';
export default function Register() {
    const [input,setInput]=useState({});
    const [redirect,setRedirect]=useState(false)
    const [invalidMessage,setInvalidMessage]=useState({
        first:null,
        last:null,
        password:null,
        username:null,
        submit:null
    })
    const [users,setUsers]=useState([])
   
    useEffect(()=>{
        const func=async()=>{

            getUsers().then(res=>{
                setUsers(res.data)
            })
        }
        func();
    },[])

    const handleInputChange=(e)=>{
        const temp={...input}
        temp[e.target.id]=e.target.value;
        setInput({...temp})
    }
    const validateName=(firstname)=>{
       return /^[a-z ,.'-]+$/i.test(firstname)
    }
 
    const handleSubmit=async(e)=>{
        e.preventDefault();
        let flag=true;
        const temp={...invalidMessage}
        if(!input['firstname'])
        temp['firstname']='First Name Missing'
        else if(!validateName(input['firstname']))
        temp['firstname']='Wrong First Name'
        if(!input['lastname'])
        temp['lastname']='last Name Missing'
        else if(!validateName(input['lastname']))
        temp['lastname']='Wrong last Name'
        if(!input['username'])
         temp['username']='username Missing'
        else if(input['username'].length<6)
        temp['username']='username Should Be Atleast 6 Characters'
        else if(users.find(user=>user['username']===input['username']))
         temp['username']='username Already Exist'
        if(!input['password'])
         temp['password']='password Missing'
        else if(input['password'].length<6)
        temp['password']='password Should Be Atleast 8 Characters'

        for(let key in temp)
            if(temp[key])
            flag=false


        //incase all fields clear
        if(flag){
        temp['submit']='Submitted Successfully'
        await postUser(input)
        console.log('im here yzlme');
        setRedirect(!redirect)
        }
        else
         temp['submit']='Check Fields'
        setInvalidMessage({...temp})
        setTimeout(()=>{
            setInvalidMessage({ first:null,
        last:null,
        password:null,
        username:null,
        submit:null})
        },1500)
    }
    if(redirect)
       return <Redirect to="/login"></Redirect> 
    else return (
        
         <div className="container my-7 mx-auto py-5 flex  content-center justfity-center ">
      <form className="w-auto  max-w-lg m-auto py-5 px-5">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" htmlFor="grid-first-name">
        First Name
      </label>
      <input className="appearance-none block w-full bg-gray-300 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="firstname" type="text" placeholder="fname" onChange={e=>handleInputChange(e)}/>
      <p className="text-red-500 text-xs italic">{invalidMessage['first']}</p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Last Name
      </label>
      <input className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="lastname" type="text" placeholder="lname" onChange={e=>handleInputChange(e)}/>
      <p className="text-red-500 text-xs italic">{invalidMessage['last']}</p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" htmlFor="grid-first-name">
        Username 
      </label>
      <input className="appearance-none block w-full bg-gray-300 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="username" type="text" placeholder="username10" onChange={e=>handleInputChange(e)}/>
      <p className="text-red-500 text-xs italic">{invalidMessage['username']}</p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Password
      </label>
      <input className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="password" type="password"  onChange={e=>handleInputChange(e)}/>
      <p className="text-red-500 text-xs italic">{invalidMessage['password']}</p>
    </div>
  </div>
  
  <div className="flex flex-wrap -mx-3 mb-2">
    <button type="submit" className="appearance-none block w-full bg-gray-300 text-gray-700 py-3 px-4" onClick={e=>handleSubmit(e)}>submit</button>
     <p className="text-red-500 text-xs italic text-center w-full my-2">{invalidMessage['submit']}</p>
  </div>
</form>
</div>
    )
}
