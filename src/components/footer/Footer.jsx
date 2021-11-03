import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer({loggedUser}) {
    return (
   
   <footer className=" text-gray-600 body-font">
     {loggedUser&&loggedUser.username==="adminstrator"?null:
  <div
    className="
      container
      px-5
      py-24
      mx-auto
      h-auto
      flex
      md:items-center
      lg:items-start
      md:flex-row md:flex-nowrap
      flex-wrap flex-col
    "
  >
    
    <div
      className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left"
    >
      <Link
        to="/home"
        className="
          flex
          title-font
          font-medium
          items-center
          md:justify-start
          justify-center
          text-gray-900
        "
      >
        <i className="fas fa-cubes fa-lg text-purple-500"></i>
        <span className="ml-3 text-xl">A-L Library</span>
      </Link>
      <p className="mt-2 text-sm text-gray-500">
        Rated As #1 Depository In The World 
      </p>
    </div>
    <div
      className="
        flex-grow flex flex-wrap
        md:pl-20
        -mb-10
        md:mt-0
        mt-10
        md:text-left
        text-center
      "
    >
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        {/* <h2
          className="
            title-font
            font-medium
            text-gray-900
            tracking-widest
            text-sm
            mb-3
          "
        >
          CATEGORIES
        </h2> */}
        <ul className="list-none block  w-96 px-4  flex justify-between mb-10">

          <li>
            <Link to="/login" className="text-gray-600 hover:text-gray-800"
              >Login</Link
            >
          </li>
          <li>
            <Link to="/" className="text-gray-600 hover:text-gray-800"
              >About</Link
            >
          </li>
          <li>
            <Link to="/contact" className="text-gray-600 hover:text-gray-800"
              >Contact</Link>
            
          </li>
          <li>
            <Link to="/bestseller" className="text-gray-600 hover:text-gray-800"
              >BestSellers</Link
            >
          </li>
        </ul>
      </div>
      <div className="w-full flex justify-between absolute left-0 bottom-10 px-8 ">
      <p className="text-gray-500 text-sm text-center sm:text-left">
        © 2021 Copyright:
        <a
        rel="noreferrer"
          href="https://www.tailwind-elements.com/"
          className="text-gray-600 ml-1"
          target="_blank"
          >Ameer lala</a
        >
      </p>
      <span
        className="
          inline-flex
          sm:ml-auto sm:mt-0
          mt-2
          justify-center
          sm:justify-start
        "
      >
        <a href="https://www.facebook.com/ameer.lala.161" rel="noreferrer"
        target="_blank" className="text-gray-500">
          <i className="fa fa-facebook"></i>
        </a>
        <a rel="noreferrer" href="https://twitter.com/?lang=he" className="ml-3 text-gray-500 " target="_blank">
          <i className="fa fa-twitter"></i>
        </a>
        <a rel="noreferrer"
        href="https://www.linkedin.com/in/ameer-lala-b376bb1b2/" className="ml-3 text-gray-500" target="_blank">
          <i className="fa fa-linkedin"></i>
        </a>
    
      </span>
      </div>
    </div>
  </div>
     }
</footer>
    )
}
