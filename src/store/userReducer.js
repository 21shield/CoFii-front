import Login from "../containers/Login";

const defaultState = {
    currentUser: null,
    form: {
        username: "",
        email:"",
        password: "",
        password_confirmation: ""
    }
    // position:[long,lat]
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
        default:
            return state
    }
}

export default reducer