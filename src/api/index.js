//coffee shops get

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



  