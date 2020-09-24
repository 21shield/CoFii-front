import store from './index'
// import { requestFaves } from '../api/index'

export const saveShops  = (arr) => {
    const action = {
        type:"SET_NEARBY_SHOPS",
        payload: arr
    }
    return action
}

// finds the obj up

export const newComment = (comment, shopId) => {
    return function (dispatch){
       const {shops} = store.getState().shops
       let updatedShopsList = shops.map((shop) => {
           if(shop.external_id === shopId){
               shop.comments.push(comment)
               return shop
           }return shop
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



// get faves


export const updateFavList = (arr) =>{
    const action ={
        type: "SET_FAVORITES",
        payload: arr
    }
    return action
}