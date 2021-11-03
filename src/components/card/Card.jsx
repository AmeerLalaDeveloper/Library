import React, { useState } from 'react'
// import images  from '../img/'
import { updateWishList } from '../api/users';
  import 'react-toastify/dist/ReactToastify.css';
import { decreaseBookAmount } from '../api/books';
import { toast, ToastContainer } from 'react-toastify';
import { Redirect } from 'react-router';
export default function Card({book,loggedUser,setloggedUser,selectedBook}) {
    const notify=()=>toast('Added Successfully')
    const [message,setMessage]=useState(null);
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
        setMessage('No More In Stock')
       setTimeout(()=>{
           setMessage('')
       },1500)   
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
        
          <div className="my-2 rounded-t-3xl bg-gray-600 opacity-80 text-2xl m-3 min-h-80 text-white  md:w-5/12 sm:w-2/4 md:h-full  sm:h-full lg:w-3/12">
              
            <article className="overflow-hidden  rounded-t-xl shadow-lg">
                <button className="block w-full "  onClick={e=>handleBook(e)}>
                    <img alt="Placeholder" className="block h-80 w-full" src={images[rand].default}/>
                   
                </button>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="">
                        <button className="no-underline hover:underline " onClick={e=>handleBook(e)}>
                           {book?book.title:null}
                        </button>
                    </h1>
                    <p className="">
                        {book!=='undefined'?book.createdAt.slice(0,10):null}
                    </p>
                    
                </header>
            <p className=" text-center ">{book?book.price:null}$</p>
              <p className=" text-center ">{book?book.category:null}</p>
                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <button className="flex items-center no-underline hover:underline " onClick={e=>handleBook(book)}>
                        <img alt="Placeholder" className="block shadow-lg rounded-full" src={book?book.avatar:null}/>
                        <p className="ml-2" onClick={e=>handleBook(e)}>
                           {book?book.keyword:null}
                        </p>
                    </button>
                    
                </footer>
        {loggedUser?   <button className="block m-auto w-full bg-blue-200 py-4 m-4  flex items-center justify-center no-underline text-blue-500 hover:text-red-dark" >
                        <span className="" onClick={e=>handleCart(e)}>Add to cart</span>
                         <ToastContainer autoClose={1500}/>

                        <p>{message}</p>
                    </button>:null}
                     {loggedUser?   <button className="block m-auto w-full bg-blue-100 py-4  flex items-center justify-center no-underline text-blue-500 hover:text-red-dark" >
                        <span className="" onClick={e=>handleBook(e)}>Read More</span>
                        <p>{message}</p>
                    </button>:null}
            </article>
         </div>

       
    )
}
