import React from 'react'

export default function Searchinput({onChangeInput}) {
    return (
        <input className="lg:w-4/12 border-2 border-gray-300 bg-white h-10 px-5 pr-0 rounded-lg text-sm focus:outline-none mt-4 my-5  sm:w-8/12 block-sm lg:inline md:w-6/12 md:block"
          type="search" name="search" placeholder="Search for books by keyword / title / author / ISBN" onChange={e=>onChangeInput(e.target.value)}/>
    )
}
