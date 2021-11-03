
import axios from "axios"
const URL='https://617e607d2ff7e600174bd79c.mockapi.io/books/'

export const getBooks=async()=>{
    let res=await axios.get(URL);
    // res=res.data.map(book=>{
    //     book['bookImage']=`'../img/book.jpg'`
    //     return book;
    // })
    return res.data;

}
export const getBooksByKeyword=(books,keywordSearch)=>{
return books.filter(book=>book.keyword.toLowerCase().includes(keywordSearch.toLowerCase())
)
}
export const getBooksByTitle=(books,titleSearch)=>{
return books.filter(book=>book.title.toLowerCase().includes(titleSearch.toLowerCase()))

}
export const getCategories=(books)=>{

    return books.map(book=>book.category)
}
export const getBooksByCategory=(books,category)=>{

    return books.filter(book=>book.category===category)
}
export const getBooksByAuthor=(books,authorSearch)=>{
return books.filter(book=>book.author.toLowerCase().includes(authorSearch.toLowerCase())
)
}
// export const getBooksByISBN=(books,ISBN)=>{
// console.log(ISBN);
// return books.filter(book=>book.ISBN.includes(ISBN.toString())
// )
// }


export const getBooksByRandomSearch=(books,search)=>{
    let allBooks=[]
    allBooks=[...getBooksByKeyword(books,search),
    ...getBooksByAuthor(books,search),
    ...getBooksByTitle(books,search)
    ]
    
    allBooks=[...new Set(allBooks.map(book=>book.ISBN))].map(
        ISBN=>{
            return {
                createdAt:allBooks.find(book=>book.ISBN===ISBN).createdAt,
                ISBN:ISBN,
                avatar: allBooks.find(book=>book.ISBN===ISBN).avatar,
                bookImage: allBooks.find(book=>book.ISBN===ISBN).bookImage,
                keyword:allBooks.find(book=>book.ISBN===ISBN).keyword,
                title:allBooks.find(book=>book.ISBN===ISBN).title,
                author:allBooks.find(book=>book.ISBN===ISBN).author,
                price:allBooks.find(book=>book.ISBN===ISBN).price,
                amount:allBooks.find(book=>book.ISBN===ISBN).amount,
                category:allBooks.find(book=>book.ISBN===ISBN).category,
                sold:allBooks.find(book=>book.ISBN===ISBN).sold,
                description:allBooks.find(book=>book.ISBN===ISBN)
        }}
    )
    return allBooks;
}

export const getBooksBySpecificParams=async(param)=>{
   if(Object.keys(param)===0)
   return await getBooks();
   return getBooks().then(res=>{
       return res.map(book=>{
            for(let key in param){
                if(!book[key].toLowerCase().includes(param[key].toLowerCase()))
                return undefined;
            }
            return book;
        }).filter(book=>book)
    })
}


export const getBestSellers=async(books)=>{
return books.sort((a,b)=>{
    if(a.sold>b.sold)
    return 1;
    else if(a.sold<b.sold)
    return -1;
    return 0;
})
}

export const decreaseBookAmount=(id,book)=>{
    axios.put(URL+'/'+id,{amount:--book.amount,
    sold:++book.sold})
}