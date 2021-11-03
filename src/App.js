import React, { useEffect, useState } from 'react'
import "./tailwindcss/tailwind.css"
import Usernav from '../src/components/usernav/Usernav'
import {getBooks} from './components/api/books'
import {BrowserRouter,
  Switch,
  Route
  } from 'react-router-dom'
  import Home from './components/home/Home'
  import './font-awesome-4.7.0/css/font-awesome.min.css'
  import AdvancedSearch from './components/advancedSearch/AdvancedSearch'
  import Footer from './components/footer/Footer'
  import BestSeller from './components/bestSeller/BestSeller'
import Login from './components/login/Login'
import Register from './components/register/Register'

import Wishlist from './components/wishlist/Wishlist'
import Book from './components/Book/Book'
import  DisplaySearch from './components/displaysearch/DisplaySearch'
import Contact from './components/contact/Contact'
import Clubmember from './components/clubMember/Clubmember'
import PurchasedItems from './components/purchasedItems/PurchasedItems'
import Users from './components/users/Users'
import Club from './components/club/Club'
import Managebooks from './components/managebooks/Managebooks'

export default function App() {
    const [books,setBooks]=useState([])
    const [filterdBooks,setfilteredBooks]=useState([])
    const [user,setUser]=useState((JSON.parse(localStorage.getItem('user')))||null)
    const [selectedBook,setSelectedBook]=useState(null)
    useEffect(()=>{
        getBooks().then(res=>{
            setBooks(res)
        })
    },[])
    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(user))
    },[user])
    return (
        <div className={user&&user.username==='adminstrator'?
        "app flex w-fill bg-gray-200 min-h-screen relative s"
        :"app flex bg-gray-200 flex-col justify-between w-screen min-h-screen relative "}>
            <BrowserRouter>        
                 <Usernav setfilteredBooks={setfilteredBooks} books={books} loggedUser={user} signOut={(value)=>setUser(value)}></Usernav>
               <Switch>
                    <Route path="/displaysearch" exact>
                    <DisplaySearch filterdBooks={filterdBooks} user={user} setUser={setUser} setSelectedBook={setSelectedBook}>
             </DisplaySearch>
                    </Route>
                </Switch>
            <Switch>
                    <Route path="/advancedsearch" exact>
                   <AdvancedSearch setfilteredBooks={setfilteredBooks}></AdvancedSearch>
                    </Route>
                </Switch>
                 <Switch>
                    <Route path="/" exact>
                  <Home></Home>
                    </Route>
                </Switch>
                     <Switch>
                    <Route path="/bestseller" exact>
                    <BestSeller loggedUser={user} setLoggedUser={setUser} books={books} setBook={setSelectedBook}></BestSeller>
                    </Route>
                </Switch>
                  <Switch>
                    <Route path="/login" exact>
                    <Login setloggedUser={setUser}></Login>
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/contact" exact>
                   <Contact></Contact>
                    </Route>
                </Switch>
                  <Switch>
                    <Route path="/clubmember" exact>
                   <Clubmember loggedUser={user} setLoggedUser={setUser}></Clubmember>
                    </Route>
                </Switch>
                  <Switch>
                    <Route path="/register" exact>
                    <Register></Register>
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/wishlist" exact>
                    <Wishlist loggedUser={user} setloggedUser={setUser}></Wishlist>
                    </Route>
                </Switch>
             <Switch>
                    <Route path="/book" exact>
                    <Book book={selectedBook}></Book>
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/purchaseditems" exact>
                   <PurchasedItems></PurchasedItems>
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/users" exact>
                   <Users></Users>
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/manageBooks" exact>
                   <Managebooks></Managebooks>
                    </Route>
                </Switch>
                          <Footer loggedUser={user}></Footer>
            </BrowserRouter>
       
               
        </div>
    )
}
