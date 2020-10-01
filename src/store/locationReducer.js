
const defaultState = {
    latitude: null,
    longitude: null,
    height: '70vh',
    width: '45vw',
    zoom: 12
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