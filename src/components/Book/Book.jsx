import React from 'react'

export default function Book({book}) {
    return (
        <div className="container w-auto flex justify-center align-center flex-col text-center p-4 py-4 m-4">
            <h1 className="text-4xl py-4">{book?book.title:null}</h1>
            <p className="text-lg w-3/4 m-auto">
           {book?book.description:null}
           </p>
        </div>
    )
}
