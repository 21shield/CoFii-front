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
                const action = {
                    type: 'CLEAR_FORM'
                }
                dispatch(action)
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
        // .then(data => {
        //     console.log(data)
        //     if (data){
        //         const action = {
        //             type: 'CLEAR_FORM'
        //         }
        //         dispatch(action)
        //     }else{
        //         console.log('ERROR')
        //     }
        // })
    }
}

export const autoLogin = () => {
    return function (dispatch) {
        fetch('http://localhost:3000/autologin',{
            headers:{
                'Auhorization': `Bearer ${localStorage.token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(r  => r.json())
        .then(data => {
            if (data.user){
                const action = {
                    type: 'CLEAR_FORM'
                }
                dispatch(action)
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
