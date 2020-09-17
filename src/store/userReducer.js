
const defaultState = {
    currentUser: null,
    username: "",
    email:"",
    password: "",
    password_confirmation: ''
    // position:[long,lat]
};


const reducer = (state = defaultState, action ) => {
    switch(action.type){
        case "SET_FORM":
            return {
                ...state,
                ...action.payload
            }
        case "CLEAR_FORM":
            return{
                ...state,
                username: "",
                email:"",
                password: "",
                password_confirmation: ''
            }
        default:
            return state
    }
}

export default reducer