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