import React, { useEffect, useState } from 'react'
import { postPurchase } from '../api/pruchasedItems';
import { putUser } from '../api/users';
import Item from './Item';

export default function Wishlist({loggedUser,setloggedUser}) {
    const [user,setUser]=useState(loggedUser);
    const [message,setMessage]=useState(null)
   
    useEffect(()=>{
        setloggedUser(user);
    },[user,message,loggedUser,setloggedUser])
    const returnMemberStatus=()=>{

        if(user.wishlist.length>0){
            if(user.isGold){
                if(user.isRegular){
                 return   <span>
            <h3 className="text-blue-500">Your VIP   Member</h3>
                {calculateTotal()} - {calculateTotal()*20/100} - {calculateTotal()*10/100}={calculateTotal()*70/100}
            </span>
                }
                else{
                         return   <span>
            <h3 className="text-blue-500">Your Gold   Member</h3>
                {calculateTotal()} - {calculateTotal()*20/100}={calculateTotal()*70/100}
            </span>
                }


            }
            else if(user.isRegular){

                     return   <span>
            <h3 className="text-blue-500">Your Regular   Member</h3>
                {calculateTotal()} - {calculateTotal()*10/100}={calculateTotal()*70/100}
            </span>
            }
            else {
                     return   <span>
                        {calculateTotal()}
            </span>
            }


        }
    }
    const calculateTotal=()=>{
        let sum=0;
        for(let i=0;i<user.wishlist.length;i++)
            sum+=parseInt(user.wishlist[i].price);
           return sum.toFixed(2); 
    }
    const handleBuy=async(e)=>{
       setTimeout(async()=>{
            const temp={...user};
        if(user.wishlist.length===0){
            setMessage('You Have No Books To Buy')
            setTimeout(()=>{    setMessage(null)},1500)
            return
        }
        else{
        temp.wishlist=[];
        await postPurchase({userId:user.id,wishlist:user.wishlist})
        setUser({...temp})
        setloggedUser({...temp})
        await putUser(user.id,temp)
        }
       },1000)
    }
    return (
        <div className="justify-items-start m-4 p-4 py-4 relative">
        {   message?
            <div className="w-full h-full flex  absolute top-50 left-50">{message}</div>
            :null
        }
       
        {/* // <table className="w-full justify-start whitespace-nowrap px-4 py-4">  
        // <thead>
        //     <tr>
        //     <th>Book Title</th>
        //     <th>Author</th>
        //     <th>Price</th>
        //     <th>Remove book</th>
        //     </tr>
        //     </thead>
        //     <tbody>  
        //     {user.wishlist.map((item,idx)=>{
        //         return <Item key={idx} setloggedUser={setUser} user={loggedUser} book={item}></Item>
        //     })}
        // </tbody>    
      
      // </table>:null} */}
       {user&&user.wishlist.length>0?
        <section className="container mx-auto p-6 font-mono">
  <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
    <div className="w-full ">
      <table className="w-full">
        <thead>
          <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Title</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Remove Book</th>
          </tr>
        </thead>
        <tbody className="bg-white">
     
          {user.wishlist.map((item,idx)=>{
                return <Item key={idx} setloggedUser={setUser} user={loggedUser} book={item}></Item>
            })}
        </tbody>
      </table>
    </div>
  </div>
</section>
:''}
          {user&&user.wishlist.length>0?<div className="flex justify-evenly w-full align-center py-2 mt-2 px-12">
            <button className="text-center h-12 w-1/12 bg-blue-700 hover:bg-blue-500 text-white font-bold  rounded" value="submit" onClick={e=>handleBuy(e)}>Buy</button>
            <div className="w-4/12">
                {/* <h4 className="text-center">Enter Code</h4> 
             <input type="text"className="shadow appearance-none border border-red-500 rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"/> */}
            </div>
            <span className="inline-block text-gray-500">Total : {
            returnMemberStatus()
            }
            </span>
        </div>:<span className="text-4xl text-gray-200">No Items In Your WishList</span> }
        </div>
    )
}
