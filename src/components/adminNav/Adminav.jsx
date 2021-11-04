import React from 'react'
import { Link } from 'react-router-dom'

export default function Adminav({signOut}) {
    return (
      <div className=" min-h-screen   flex flex-col lg:flex  flex-auto flex-shrink-0 antialiased bg-gray-800 text-gray-800">
    <div className="fixed flex flex-col top-0 left-0 w-64 bg-gray-900 h-full shadow-lg">
        <div className="flex items-center pl-6 h-20 border-b border-gray-800">
          
            <div className="ml-1">
                <p className="ml-1 text-md font-medium tracking-wide truncate text-gray-100 font-sans">AMEER LALA</p>
                <div className="badge">
                       <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-800 bg-blue-100 rounded-full">Admin</span>
                </div>
            </div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
        <ul className="flex flex-col py-6 space-y-1">
            <li className="px-5">
                <div className="flex flex-row items-center h-8">
                    <div className="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">Dashboard</div>
                </div>
            </li>
           
            <li>
                <Link to="/users" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                    <span className="inline-flex justify-center items-center ml-4">
                   <i className="fa fa-user"></i>
                    </span>
                    <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Users</span>
             
                </Link>
            </li>
     
            <li>
            <Link to="/purchaseditems" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
             <i className="fa fa-book"></i>
                </span>
                <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Books</span>
            </Link>
            </li>
           
            <li>
            <Link onClick={()=>signOut(null)} to="/login" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-red-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4 text-red-400">
              <i className="fa fa-loginout"></i>
                </span>
                <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Sign Out</span>
            </Link>
            </li>
        </ul>
        </div>
    </div>
    </div>
    )
}
