import store from './index'

export const updateLocation = (cords) => {
    const action = {
        type:"SET_LOCATION",
        payload: cords
    }
    return action
}
