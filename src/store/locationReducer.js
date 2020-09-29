
const defaultState = {
    latitude: 40.6476452,
    longitude: -74.0144534,
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
        // case 'INITIAL_LOCATION':
        //     return{
        //         // have this set up on the initial load
        //         ...state,
        //         latitude: action.payload[0],
        //         longitude: action.payload[1]
        //     }
    
        default:
            return state
    }
}

export default reducer