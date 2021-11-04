import React, { useState } from 'react'
// import images  from '../img/'
import { updateWishList } from '../api/users';
  import 'react-toastify/dist/ReactToastify.css';
import { decreaseBookAmount } from '../api/books';
import { toast, ToastContainer } from 'react-toastify';
import { Redirect } from 'react-router';
export default function Card({book,loggedUser,setloggedUser,selectedBook}) {
    const notify=(msg='Added Successfully')=>toast(msg)
   
    const [bookIsSelected,setBookIsSelected]=useState(false)
    function importAll(r) {
    return r.keys().map(r);
    }
    const images = importAll(require.context('../', true, /\.(png|jpe?g|svg)$/));
    let rand=Math.floor(Math.random()*images.length)
    const handleBook=(e)=>{
    selectedBook(book)
    setBookIsSelected(true)
    }
    const handleCart=async(e)=>{

        if(book.amount<3){
        notify('No More In Stock')
        return;
        }
        notify();
        const res=await updateWishList(loggedUser.id,book)
        decreaseBookAmount(book.ISBN,book)
        setloggedUser(res.data)
       

    }
    if(bookIsSelected)
    return <Redirect to="/book"></Redirect>
    else
    return (
        <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">

            <div className="mb-8">
                <button onClick={e=>handleBook(e)}>
                <img className="object-center object-cover rounded-full h-44 w-44" src={images[rand].default} alt=""/>
                </button>
            </div>
            <div className="text-center">
                <p className="text-xl cursor-pointer hover:underline text-white font-bold mb-2" onClick={e=>handleBook(e)}>{book.title}</p>
                <p className="text-base text-gray-400 font-normal">{book.price}$</p>
                <p className="text-base text-gray-400 font-normal">{book.category}</p>
            </div>
            <div className="w-full text-center ">
                {loggedUser? <><span className="block  cursor-pointer w-full bg-gray-500 p-4 my-1 rounded hover:opacity-80" onClick={e=>handleCart(e)}>Add to cart</span> <span className="block w-full bg-gray-500 p-4 cursor-pointer my-1 rounded hover:opacity-80" onClick={e=>handleBook(e)}>Read More</span>
                 <ToastContainer autoClose={1500}/></>:null}
            </div>
        </div>
        
       
       
    )
}
