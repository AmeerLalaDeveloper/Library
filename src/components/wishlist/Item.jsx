import React from 'react'
import { removeWishListItem } from '../api/users'
import img from '../img/book.jpg'
export default function Item({book,user,setloggedUser}) {
    const handleItem=async(e)=>{
      const removedItem=await removeWishListItem(user.id,book)
      const updatedUser=removedItem.data
      setloggedUser(updatedUser)
    }
    return (
            <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                  <img className="object-cover w-full h-full rounded-full" src={img} alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold text-black">{book.keyword}</p>
        
                </div>
              </div>
            </td>
            <td className="px-4 py-3 text-ms font-semibold border">{book.title}</td>
            <td className="px-4 py-3 text-xs border">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> {book.price} </span>
            </td>
            <td className="px-4 py-3 text-sm border">{book.createdAt.slice(0,10)}</td>
            <td className="px-4 py-3 text-xs border text-center">
              <span className="px-2 text-xl text-center py-1 font-semibold leading-tight text-green-700  rounded-sm cursor-pointer" onClick={handleItem}><i className="fa fa-trash w-full"></i></span>
            </td>
          </tr>
    )
}
