import store from './index'

export const updateLocation = (cords) => {
    console.log("form la.js",cords)
    const action = {
        type:"SET_LOCATION",
        payload: cords
    }
    return action
}
