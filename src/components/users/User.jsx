import React from 'react'
// import { deleteUserItems } from '../api/pruchasedItems'
// import { deleteUser } from '../api/users'
export default function User({user}) {
	// const handleDelete=async()=>{
	// 	await deleteUser(user.id)
	// 	await deleteUserItems(user.id)
	// 	//deleteUser
	// 	//deleteUserItems
	// }
	// const handleEdit=async()=>{


	// }
    return (
      <tr className="bg-gray-500 text-white">
						<td className="p-3 ">
                        {user['firstname']}
						</td>
						<td className="p-3">
						{user['lastname']}
						</td>
						<td className="p-3 text-center">
                            {user.isGold?
							<span className="bg-yellow-600 text-gray-50 rounded-md px-2">gold</span>
                            :<span className="text-gray-50 rounded-md px-2">--</span>}
						</td>
						<td className="p-3 text-center">
                            {user.isRegular?
							<span className="bg-green-400 text-gray-50 rounded-md px-2">regular</span>
                            :<span className="text-gray-50 rounded-md px-2">--</span>}
						</td>
					
                        <td className="p-3  text-center">
						<button className="border-2 p-2 rounded hover:bg-white hover:text-gray-400" >delete</button>
						</td>
                        <td className="p-3  text-center">
							<button className="border-2 p-2 rounded hover:bg-white hover:text-gray-400" >edit</button>
						</td>
					</tr>
	
    )
}
