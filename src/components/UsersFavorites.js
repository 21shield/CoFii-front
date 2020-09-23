import React from 'react'
import { useSelector } from 'react-redux'

export default function UsersFavorites (){
    const user = useSelector(state => state)
        console.log(user)
    return (
        <div>
            
        </div>
    )
}
