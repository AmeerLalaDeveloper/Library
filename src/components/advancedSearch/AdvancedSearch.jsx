import React, { useState } from 'react'
import { Redirect } from 'react-router'
import {getBooksBySpecificParams} from '../api/books'
export default function AdvancedSearch({setfilteredBooks}) {
  const [input,setInput]=useState({})
  const [redirect,setRedirect]=useState(false)
  const handleInput=(e)=>{
    let temp={...input};
    temp[e.target.name]=e.target.value;
    setInput(temp);
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const res=await getBooksBySpecificParams(input);
    setfilteredBooks(res)
    setRedirect(true)
  }
  if(redirect)
  return <Redirect to="/displaysearch"></Redirect>
  else
    return (
        <div className="w-full flex flex-center items-center justify-center px-5 py-5">
     <form className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        Keyword
      </label>
      <input name="keyword" className="appearance-none block w-full bg-gray-400 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="book" onChange={e=>handleInput(e)}/>
      {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Author
      </label>
      <input name="author" className="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" onChange={e=>handleInput(e)}/>
    </div>
    <div className="w-full  px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Category
      </label>
      <input name="category" className="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" onChange={e=>handleInput(e)}/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
          Title
      </label>
      <input name="title" className="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" onChange={e=>handleInput(e)}/>
      {/* <p className="text-gray-600 text-xs italic">...</p> */}
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
          ISBN
      </label>
      <input  name="ISBN" className="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
       type="text" onClick={handleInput}>
      {/* <CardsByQuery books={filteredBooks}></CardsByQuery> */}
      </input>
      {/* <p className="text-gray-600 text-xs italic">...</p> */}
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    
    {/* <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        Price
      </label>
      <div className="relative">
        <select name={value} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" onSelect={e=>handleInput(e)}>
          <option value="0-50">0-50$</option>
          <option value="50-100">50$-100$</option>
          <option value="100+">100$+</option>
        </select>
      </div>

    </div> */}
          <div className="w-full md:w-3/3 px-3 mb-6 md:mb-0 flex">
        <button className="block uppercase w-full bg-gray-400 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="submit" onClick={e=>handleSubmit(e)}>Submit</button>
      </div>
  </div>
</form>
</div>
    )
}
