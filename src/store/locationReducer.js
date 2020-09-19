
const defaultState = {
    latitude: 0,
    longitude: 0,
    height: '50vh',
    width: '50vw',
    zoom: 13
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_LOCATION":
            return{
                ...state,
                latitude: action.payload[0],
                longitude: action.payload[1]
            }
    
        default:
            return state
    }
}

export default reducer