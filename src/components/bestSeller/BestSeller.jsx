import React, { useEffect, useState } from 'react'
import { getBestSellers, getCategories} from '../api/books'
import CardsByQuery from '../card/CardsByQuery'


export default function BestSeller({books,loggedUser,setLoggedUser,setBook}) {
    
    const [bestSellers,setBestSellers]=useState(books)
    const [filteredSellers,setFilteredSellers]=useState([])
    const [input,setInput]=useState('')
    const [categories,setCategories]=useState([])
    const [priceRange,setPriceRange]=useState({min:null,max:null})
    const [category,setCategory]=useState(null)
    const [howManyToSlice,setHowManyToSlice]=useState(10)

    useEffect(()=>{
        const func=async()=>{
         const getBooks=await getBestSellers(books)
         setBestSellers(getBooks)
         setCategories(getCategories(getBooks))
        
        }
     func()

    },[bestSellers,books,setLoggedUser,setBook,filteredSellers])
    useEffect(()=>{
        setFilteredSellers(bestSellers)
    },[bestSellers])
    const handleInput=(e)=>{
        setInput(e.target.value)
    }
    const handlePrice=(e)=>{
        if(e.target.value==="0-50"){
            setPriceRange({min:0,max:50})
        }
           else  if(e.target.value==="50-100"){
                 setPriceRange({min:50,max:100})
        }
        else if(e.target.value==="100"){
            setPriceRange({min:100,max:10000})
        }
    
        else setPriceRange({min:null,max:null})
    }
    const handleCategory=(e)=>{
        setCategory(e.target.value)
    //    const temp=getBooksByCategory(books,e.target.value)
    //    setFilteredSellers([...temp])
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
       let arr=[]
        if(input!==''&&priceRange.min!==null&&priceRange.max!==null&&!categories.length===0){
        arr=bestSellers.map(book=>{
            if(book.keyword.toLowerCase().includes(input.toLowerCase()))return book;
            return null;
        }).filter(book=>book!==null); 
        arr=arr.filter(book=>book.price>priceRange.min&&book.price<=priceRange.max)
        arr=arr.filter(book=>book.cateogry===category)
        setFilteredSellers([...arr])
        }
        
        if(input===''&&priceRange.min!=null&&priceRange.max){
            arr=bestSellers.map(book=>{
                if(book.price>priceRange.min&&book.price<=priceRange.max)
                return book;
                return undefined;
            }).filter(book=>book!==undefined)
              setFilteredSellers([...arr])
        }
         if(input===''&&priceRange.min!=null&&priceRange.max&&category!=null){
             console.log('ss');
            arr=bestSellers.map(book=>{
                if(book.price>priceRange.min&&book.price<=priceRange.max)
                return book;
                return undefined;
            }).filter(book=>book!==undefined).filter(book=>book.category===category)
              setFilteredSellers([...arr])
        }
            if(input!==''&&priceRange.min!=null&&priceRange.max&&category!=null){
            arr=bestSellers.map(book=>{
            if(book.keyword.toLowerCase().includes(input.toLowerCase()))return book;
            return null;
            }).filter(book=>book!==null).filter(book=>{
                if(book.price>priceRange.min&&book.price<=priceRange.max)
                return book;
                return undefined}).filter(book=>book!==undefined).filter(book=>book.category===category)
              setFilteredSellers([...arr])
        }
        if(input===''&&!priceRange.min&&!priceRange.max&&category){
            console.log(category);
            arr=bestSellers.filter(book=>book.category===category)
            console.log(arr);
            setFilteredSellers([...arr])
        }
        if(input===''&&!priceRange.min&&!priceRange.max&&!category)
        setFilteredSellers(bestSellers)
        // setFilteredSellers(filteredSellers.filter(book=>book.language===language))
        


    }
    const handleReset=(e)=>{
        e.preventDefault()
        setFilteredSellers(bestSellers)
    }
    return (
    <div className="container  px-20 py-10 flex  justify-center h-auto">
<aside className="flex flex-wrap">
<form action="">
         <div className="mb-4">
      <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="username">
        Keyword
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-300 text-gray-700 leading-tight focus:outline-none focus:text-gray-900 placeholder-gray-800 focus:shadow-outline" id="username" type="text" placeholder="keyword.." onChange={e=>handleInput(e)}/>
    </div>
       <div className="mb-4">
           <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="username">
        Price
      </label>
       <select placeholder="Enter price..."className="block appearance-none w-full bg-gray-300 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:text-gray-600  focus:border-gray-900" id="grid-state" onChange={e=>handlePrice(e)}> 
          <option value={null}>price..</option>
          <option value="0-50">0-50</option>
          <option value="50-100">50-100</option>
          <option value="100">100+</option>
        </select>
    </div>
       <div className="mb-4">
           <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="username">
        Category
      </label>
       <select className="block appearance-none w-full bg-gray-300 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded placeholder-black leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"  onChange={e=>handleCategory(e)}>
        {   
            categories?
            categories.map((category,idx)=>{
                return <option key={idx} value={category}>{category}</option>
            }):null
        }
        </select>
    </div>
       <div className="mb-4">
           <button value="submit" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 hover:bg-blue-200 hover:text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onClick={e=>handleSubmit(e)}>Submit</button>
       </div>
        <div className="mb-4">
           <button value="reset" className="shadow bg-blue-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 hover:bg-gray-800 hover:text-white leading-tight focus:outline-none focus:shadow-outline" onClick={e=>handleReset(e)}>Reset</button>
       </div>
</form>
</aside>
<div className="flex flex-col w-auto w-full  mx-4 px-2 h-auto">
        {
            filteredSellers.length>0?
            <CardsByQuery books={filteredSellers.slice(0,howManyToSlice)} 
            loggedUser={loggedUser} setloggedUser={setLoggedUser} setBook={setBook}></CardsByQuery>: null
        }
      <div className="m-auto w-2/4">{filteredSellers.length>0? <button className="p-4 text-black w-full m-auto rounded border-2 bg-blue-200 border-solid text-4xl" onClick={()=>setHowManyToSlice(20)}>See More</button>:null}</div>
</div>

</div>
    )
}
