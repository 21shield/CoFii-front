//coffee shops get

import store from "../store/index"

export const getCoffeeShops = (coords) => {
    
    return fetch(`http://localhost:3000/loadShops`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
          },
        body: JSON.stringify({
            latitude: coords[0],
            longitude: coords[1]
        }),
    })
      .then(r => r.json())
  }


export const createComment = (input) => {
  return fetch(`http://localhost:3000/comments`,{
      method:"POST",
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(input),
  })
     .then(r => r.json())
}

export const createFavorite = (shopId) => {
  return fetch(`http://localhost:3000/favorites`,{
      method:"POST",
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({id:shopId}),
  })
     .then(r => r.json())
}



export const removeFavorite = (shopId) => {
    return fetch(`http://localhost:3000/removeFav`,{
        method:"DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({id:shopId}),
    })
       .then(r => r.json())
  }



export const updateUser = (form) =>{
    let userid = store.getState().user.currentUser.id
   console.log(store.getState().user.currentUser.id, store.getState().user.currentUser)
    return fetch (`http://localhost:3000/users/${userid}`, {
        method: "PATCH",
        headers: {
           'Authorization': `Bearer ${localStorage.token}` 
        },
        body: form
    })
    .then(r => r.json())
}
// export const requestFaves = (userId) => {
//     return fetch(`http://localhost:3000/userfavorites`,{
//         method:"POST",
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${localStorage.token}`
//         },
//         body: JSON.stringify({id: userId})
//     })
//     .then(r => r.json())
// }

  