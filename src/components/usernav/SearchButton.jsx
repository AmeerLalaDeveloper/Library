import React from 'react'
import { Link } from 'react-router-dom'

export default function SearchButton({handleSearch}) {
    return (
        <Link to="/displaysearch" className="bg-transparent hover:bg-blue-300 text-blue-300 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-4 "
        onClick={e=>handleSearch()}>
    Search
    </Link>
    )
}
