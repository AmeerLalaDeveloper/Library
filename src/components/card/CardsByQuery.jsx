import React from 'react'
import Card from './Card'
export default function CardsByQuery({books,loggedUser,setloggedUser,setBook}) {

    const handleBook=(value)=>{
        setBook({...value})

    }
    return (
      <div className="container  w-12/12 my-12 mx-auto px-4 m-2 md:px-12">
    <div className="flex flex-wrap w-auto -mx-1 lg:mx-0">
    {books.length>0?
    books.map((book)=>{
        return <Card key={book.ISBN} loggedUser={loggedUser} setloggedUser={setloggedUser} book={book} selectedBook={(val)=>
        handleBook(val)}></Card>

    })
    :<span className="text-black text-4xl ">No Book For This Search</span>
    }
            </div>
            </div>
           
            
    )
}
