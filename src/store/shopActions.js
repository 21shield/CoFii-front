
export const saveShops  = (arr) => {
    const action = {
        type:"SET_NEARBY_SHOPS",
        payload: arr
    }
    return action
}