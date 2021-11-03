import axios from "axios";

const URL='https://617e607d2ff7e600174bd79c.mockapi.io/pruchaseditems/';


export const postPurchase=async(item)=>{

    return await axios.post(URL,item)
}

export const getPruchasedItems=async()=>{
     return await axios.get(URL)
}
export const getSales=(number,items)=>{
    //eslint-disable-next-line
    const nowDate=new Date();
    let arrayOfBooks=[]
    items.filter(item=>parseInt(( nowDate-new Date(item.date))/86400000)<=number)
    .filter(item=>
      arrayOfBooks.push(...item.wishlist)
    )
    arrayOfBooks=arrayOfBooks.map(book=>{
        return {
            ISBN:book.ISBN,
            title:book.title
        }
    }).sort((a,b)=>a.ISBN-b.ISBN)
    return arrayOfBooks;
}

export const deleteUserItems=async(id)=>{

    const data =await getPruchasedItems();
    console.log(data);

}