import React, { useEffect, useState } from 'react'
// import { getPruchasedItems } from '../api/pruchasedItems'
import { getUsers } from '../api/users'
import User from './User'

export default function Users() {
    const [users,setUsers]=useState([])
    const [howMuchToSlice,sethowMuchToSlice]=useState(10)
    const [more_less,setmore_less]=useState(10)
    // const [items,setItems]=useState([])
    useEffect(()=>{

        getUsers().then(res=>{
            setUsers(res.data)
        })
    },[])
    return (
        users.length===0?<svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
  </svg>:
      <div className="flex w-auto bg-gray-800 items-center lg:justify-center justify-end  w-full">
	<div className="col-span-12 ">
		<div className="overflow-auto lg:overflow-visible  m-auto w-full">
			<table className="table text-gray-400 border-separate space-y-6 text-sm">
				<thead className="bg-gray-400 text-gray-500">
					<tr>
						<th className="p-3">first name</th>
						<th className="p-3 text-left">last name</th>
						<th className="p-3 text-left">isGold</th>
						<th className="p-3 text-left">isRegular</th>
						<th className="p-3 text-left">delete user</th>
						<th className="p-3 text-left">edit user</th>
					</tr>
				</thead>
				<tbody>
             {
                 users.slice(0,howMuchToSlice).map((user,idx)=>{
                       return <User key={idx} user={user}></User>
                 })
             }
				</tbody>
             
			</table>
               <button className="w-2/4 text-white border-2 bg-gray-400 rounded block text-2xl py-2  m-2" onClick={e=>
                    {sethowMuchToSlice(howMuchToSlice+more_less)
                    setmore_less(more_less*-1)
                    }

                }>{more_less>0?'See More':'See Less'}</button>
		</div>
	</div>
</div>
    )
}
