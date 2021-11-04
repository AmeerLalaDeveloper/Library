import React, { useEffect, useState } from 'react'
import { getPruchasedItems, getSales } from '../api/pruchasedItems'
import Chart from './Chart'
export default function PurchasedItems() {
    const [items,setItems]=useState([])
    const [labels,setLabels]=useState([])
    const [data,setData]=useState([])
    useEffect(()=>{
        getPruchasedItems().then(res=>{
            setItems(res.data)
        })
    },[labels,data])
    const handleSelect=(e)=>{
        let books=[]
        switch(e.target.value){
            case 'week':books=[...getSales(7,items)];break;
            case 'month':books=[...getSales(30,items)];break;
            case 'year':books=[...getSales(365,items)];break;
            default:break;
        }
        const tempTitles=[...new Set(books.map(book=>book.title))]
        setLabels(tempTitles);
       const tempData=books.map(book=>parseInt(book.ISBN))
       const counts = {};
       for (const num of tempData) 
        counts[num] = counts[num] ? counts[num] + 1 : 1;
        setData(Object.values(counts));

    }
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center">
            <h1 className="my-2 text-4xl text-gray-200">Most Sold Books</h1>
            <select name="" id="" 
            onChange={e=>handleSelect(e)} className="mb-4">
                <option disabled></option>
                <option value="week">last week</option>
                <option value="month">last month</option>
                <option value="year">last year</option>
            </select>
        
            {
               labels.length>0&&data.length>0?
            <Chart chartLabels={labels} rawi={data}></Chart>:<span className="text-gray-200">You Have No Books</span> 
            }
        </div>
    )
}
