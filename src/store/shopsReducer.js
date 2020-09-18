const defaultState = {
    shops: [],
    faveShops:[]
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_FAVORITES":
            return{
                ...state,
                faveShops: action.payload
            }
    
        default:
            return state
    }
}

export default reducer