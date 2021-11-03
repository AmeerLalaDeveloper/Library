import React from 'react'
import { Link } from 'react-router-dom'

export default function AdvancedSearchButton() {

    return (
        <Link to="/advancedsearch" className="bg-blue-700 hover:bg-blue-400 text-white font-bold leading-10  px-4 rounded m-4">
           Advanced Search
        </Link>
    )
}
