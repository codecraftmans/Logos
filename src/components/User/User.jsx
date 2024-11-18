import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()   //by taking dynamic data from the url / or the Database
    

  return (
    <div className='bg-gray-700 text-white text-3xl p-4'>User: {userid} </div>
  )
}

export default User