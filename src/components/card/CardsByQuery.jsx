import React from 'react'
import Card from './Card'
export default function CardsByQuery({books,loggedUser,setloggedUser,setBook}) {

    const handleBook=(value)=>{
        setBook({...value})

    }
    return (
    
           <div className="w-full min-h-screen bg-gray-800">
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
         
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
           
           
           {books.length>0?
    books.map((book)=>{
        return <Card key={book.ISBN} loggedUser={loggedUser} setloggedUser={setloggedUser} book={book} selectedBook={(val)=>
        handleBook(val)}></Card>

    })
    :<span className="text-white text-4xl ">No Book For This Search</span>}
        
        </div>
    </section>
</div>
            
    )
}
