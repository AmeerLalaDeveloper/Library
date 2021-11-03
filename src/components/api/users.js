import axios from "axios"
const URL='https://617e607d2ff7e600174bd79c.mockapi.io/users/'

export const getUsers=async()=>{

    return (await axios.get(URL));
}
export const postUser=async(user)=>{
return await axios.post(URL,user)
}
export const updateWishList=async(id,book)=>{
    const res=await getUsers();
    const users=res.data;
    const user=users.find(user=>user.id===id)
    user.wishlist=[...user.wishlist,book]
    return await axios.put(URL+'/'+id,user)
}

export const removeWishListItem=async(id,book)=>{

    const res=await getUsers();
    const users=res.data;
    const user=users.find(user=>user.id===id)
    const item=user.wishlist.find(item=>item.ISBN===book.ISBN)
    user.wishlist.splice(user.wishlist.indexOf(item),1)
   return await axios.put(URL+'/'+id,{wishlist:[...user.wishlist]})
}

export const updateUser=async(id,updateCard)=>{

return await axios.put(URL+id,updateCard)
}

export const postCard=async(id)=>{
    return await axios.post(URL+id+`/clubMember`)
}
export const putUser=async(id,user)=>{

    return await axios.put(URL+id,user)
}
export const deleteUser=async(id)=>{
    return await axios.delete(URL+id)
}