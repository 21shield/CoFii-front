

const defaultState = {
    currentUser: null,
    userLocation:[40.6476452, -74.0144534],
    form: {
        username: "",
        email:"",
        password: "",
        password_confirmation: ""
    }
   
};


const reducer = (state = defaultState, action ) => {
    switch(action.type){
        case "SET_FORM":
            return {
                ...state,
                form:{
                    ...state.form,
                    ...action.payload
                }
               
            }
        case "CLEAR_FORM":
            return{
                ...state,
                form:{
                    username: "",
                    email:"",
                    password: "",
                    password_confirmation: ''
                } 
            }
            case "LOGOUT":
                return{
                    ...state,
                    currentUser: null,
                    form:{
                        username: "",
                        email:"",
                        password: "",
                        password_confirmation: ''
                    } 
                }
                
            case 'LOGIN':
                return{
                    ...state,
                    currentUser: action.payload
                }

            case 'SET_USER_LOCATION':
                return {
                    ...state,
                    userLocation: action.payload
                }
            case "ADD_FAVORITE":
                return{
                    ...state,
                    currentUser:{
                        ...state.currentUser,
                        favorites:[
                            ...state.currentUser.favorites,
                            action.payload
                        ]
                    }
                }
        default:
            return state
    }
}

export default reducer