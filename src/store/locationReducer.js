
const defaultState = {
    userLocation: []

}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_LOCATION":
            return{
                ...state,
                userLocation: action.payload
            }
    
        default:
            return state
    }
}

export default reducer