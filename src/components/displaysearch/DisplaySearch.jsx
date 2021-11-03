import React from 'react'
import CardsByQuery from '../card/CardsByQuery'
export default function DisplaySearch({filterdBooks,user,setUser,setSelectedBook}) {
    
    return (
        <div className="min-w-full">
        <CardsByQuery books={filterdBooks} loggedUser={user} 
                    setloggedUser={setUser} 
                    setBook={setSelectedBook}></CardsByQuery>
       
        </div>
    )
}
