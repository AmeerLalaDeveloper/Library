import React from 'react'
import { removeWishListItem } from '../api/users'

export default function Item({book,user,setloggedUser}) {
    const handleItem=async(e)=>{
      const removedItem=await removeWishListItem(user.id,book)
      const updatedUser=removedItem.data
      setloggedUser(updatedUser)
    }
    return (
        <tr>
            <td className="border px-6 py-4 text-center">{book.title}</td>
            <td className="border px-6 py-4 text-center">{book.author}</td>
            <td className="border px-6 py-4 text-center">{book.price}</td>
            <td className="border px-6 py-4 text-center hover:bg-red-200" onClick={e=>handleItem(e)}><i className="fa fa-trash hover:cursor-pointer w-full h-full"></i></td>
        </tr>
    )
}
