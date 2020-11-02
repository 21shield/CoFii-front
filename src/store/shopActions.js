import store from './index'

export const saveShops  = (arr) => {
    const action = {
        type:"SET_NEARBY_SHOPS",
        payload: arr
    }
    return action
}


export const newComment = (comment, shopId) => {
    return function (dispatch){
       const {shops} = store.getState().shops
       let updatedShopsList = shops.map((shop) => {
           if(shop.id === shopId){
               const updatedShop = {
                   ...shop,
                   comments:[
                    ...shop.comments,
                    comment
                    ]
                }
               return updatedShop
           }
           return shop
       })
       dispatch(updateShops(updatedShopsList))
    }
}

const updateShops = (arr) => {
    const action ={
        type: "ADD_COMMENT",
        payload: arr
    }
    return action
}


export const updateFavList = (arr) =>{
    const action ={
        type: "SET_FAVORITES",
        payload: arr
    }
    return action
}