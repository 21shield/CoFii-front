import store from './index'

 export const signUpUser = () => {

    return function (dispatch) {
        fetch('http://localhost:3000/signup',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(store.getState().user.form)
        })
        .then(r  => r.json())
        .then(data => {
            if (data.user){
                dispatch(handleUser(data))
                dispatch(clearForm())
            }else{
                console.log(data.error)
            }
        })
    }
}

export const loginUser = () => {

    return function (dispatch) {
        fetch('http://localhost:3000/login',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(store.getState().user.form)
        })
        .then(r  => r.json())
        .then(data => {
            console.log(data)
            if (data.user){
                dispatch(handleUser(data))
                dispatch(clearForm())
            }else{
                console.log(data.error.full_messages)
            }
        })
    }
}

export const autoLogin = () => {
    return function (dispatch) {
        fetch('http://localhost:3000/autologin',{
            headers:{
                'Authorization': `Bearer ${localStorage.token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(r  => r.json())
        .then(data => {
            if (data.user){
                dispatch({type:'LOGIN', payload:data.user})
                dispatch(clearForm())
            }else{
                console.log(data.error)
            }
        })
    }
}


export const logout  = () => {
    return function (dispatch) {
        const action = {
            type: 'LOGOUT'
        }
        localStorage.clear();
        dispatch(action)
    }
}


// helpers should only return actions

const handleUser = (data) => {
    localStorage.token = data.token
    const action = {
        type: 'LOGIN',
        payload: data.user
    }
    return action
}

const clearForm = () => {            
    const action = {
        type: 'CLEAR_FORM'
    }   
    return action          
}

