import React, { useEffect, useState  } from 'react'
import SearchInput from './SearchInput'
import AdvancedSearchButton from './AdvancedSearchButton'
import SearchButton from './SearchButton'
import {getBooks, getBooksByRandomSearch} from '../api/books'
import { Link} from 'react-router-dom'

export default function Usernav({setfilteredBooks,books,loggedUser,signOut}) {
    const [input,setInput]=useState('')
    const [user,setUser]=useState(loggedUser)
    const handleSearch=async()=>{
        if(input!==''){
        setfilteredBooks(getBooksByRandomSearch(books,input));  
        }
     else setfilteredBooks(await getBooks())
    }
    const handleSignOut=(e)=>{
      signOut(null)
    }
    
    useEffect(()=>{
      setUser(loggedUser)
      
    },[loggedUser])
    return (
      
   <nav className={user&&user.username==='adminstrator'?"flex items-center flex-col shadow-inner	py-4  bg-gray-500 px-2 ":"flex items-center justify-between flex-wrap bg-gray-500 	p-6"}>
  <div className={user&&user.username==='adminstrator'?"flex items-center  px-4 align-items flex-shrink-0 text-white":"flex  px-4 flex-shrink-0 text-white mr-6"}>
  <Link to="/" className="font-semibold text-xl tracking-tight">A-L Library</Link>
  </div>

  <div className={user&&user.username==='adminstrator'?"flex align-items w-full  px-4 m-0   h-2/4 justify-between flex-col":"w-full block px-4  flex-grow lg:flex lg:items-center  lg:w-auto"}>
    {user&&user.username==='adminstrator'?<div className="w-full flex text-center h-full justify-around flex-col md:w-3/4 sm:w-3/4 lg:flex lg:flex-col flex flex-col">
      <Link to="/purchaseditems" className={user.username==='adminstrator'?"text-white block w-full  lg:text-2xl-red-200 hover:text-blue-300 ml-4":"text-white block w-full bg-green-300 lg:inline-block lg:mt-2 text-2xl-red-200 hover:text-blue-300 ml-4"}>
        Purchased Items
      </Link>
       <Link to="/users" className={user.username==='adminstrator'?"text-white block w-full lg:inline-block lg:mt-0 text-2xl-red-200 hover:text-blue-300 ml-4":"text-white block mt-4 lg:inline-block lg:mt-0 text-2xl-red-200 hover:text-blue-300 ml-4"}>
        Users
      </Link>
       <Link to="/manageBooks" className=" text-white block mt-4 lg:inline-block lg:mt-0 text-2xl-red-200 hover:text-blue-300 ml-4">
        Books
      </Link>
    </div>:
    <div className="text-sm lg:flex-grow">
      <div className="w-full md:w-3/4 sm:w-3/4 lg:flex lg:flex-row flex flex-col">
        <SearchInput onChangeInput={setInput}></SearchInput>
        <SearchButton handleSearch={handleSearch}/>
        <AdvancedSearchButton></AdvancedSearchButton>
        </div>
      <Link to="/bestseller" className=" text-white block mt-4 lg:inline-block lg:mt-0 text-2xl-red-200 hover:text-blue-300 ml-4">
        Best Sellers
      </Link>
       <Link to="/contact" className=" text-white block mt-4 lg:inline-block lg:mt-0 text-2xl-red-200 hover:text-blue-300 ml-4">
        Contact Us
      </Link>
       <Link to="/clubmember" className=" text-white block mt-4 lg:inline-block lg:mt-0 text-2xl-red-200 hover:text-blue-300 ml-4">
        Club
      </Link>
      {/* <Link to="/rent" className="block text-white mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-300 ml-4">
        Rent Book
      </Link> */}
      {
     <Link to={loggedUser?'/wishlist':'/login'} className="text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-300 ml-4">
        WishList
      </Link>
      
      }
    </div>
}
    <div>

     {
       user?
     <Link  to="/login" className={user.username==="adminstrator"?"inline-block text-center text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-blue-300 mt-4 lg:mt-0 w-full":"inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-blue-300 mt-4 lg:mt-0"} onClick={e=>handleSignOut(e)}>Sign Out</Link>
      :
    <Link to="/login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-blue-300 mt-4 lg:mt-0">Sign In</Link>
     }
     
    </div>
  </div>
</nav>
    )
}
