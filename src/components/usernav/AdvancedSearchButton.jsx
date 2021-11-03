import React from 'react'
import { Link } from 'react-router-dom'

export default function AdvancedSearchButton() {

    return (
        <Link to="/advancedsearch" className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
           Advanced Search
        </Link>
    )
}
