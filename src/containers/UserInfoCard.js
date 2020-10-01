import { Button, Tooltip } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

import React, { useState }from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Modal from 'react-modal';
import { updateUser } from '../api/index'
import '../styles/profile.css'
Modal.setAppElement('#root')



export default function Profile(){ 
   
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.currentUser)
    const [modalIsOpen, setIsOpen] = useState(false)

    const [formState, setFormState] = useState({
        avatar: user.avatar,
        email: user.email,
        bio: user.bio,
        password: "",
        password_confirmation: ''
    })

   const {avatar, email, bio, password, password_confirmation} = formState

    const handleChange = (e) => {
        e.persist()
        const value = e.target.type === 'file' ? e.target.files[0] : e.target.value
        setFormState(prevState => ({
            ...prevState,
            [e.target.name]: value
        }))
     
       
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('SUBMITED')
        let form = new FormData()
        form.append("avatar", avatar)
        form.append("email", email)
        form.append("bio", bio)
        form.append("password", password)
        form.append("password_confirmation", password_confirmation)

        updateUser(form)
        .then((data) => {
            console.log('FROM THE UPDATE',data)
            const action = {
                type: "LOGIN",
                payload: data
            }
            // dispatch(action)
            console.log(user, "from the update")
            // new data should be rendered on the page
        }
        )
        // after sumbit clear the form
        setFormState({  
            avatar: user.avatar,
            email: user.email,
            bio: user.bio,
            password: "",
            password_confirmation: ''})

        closeModal()
    }


    const openModal = ()=>{
        setIsOpen(true);
      }
    const closeModal = ()=>{
        setIsOpen(false);
    }
    const afterOpenModal= () => {
        // subtitle.style.color = '#f00';
        console.log('modal is open')
    }
    

    return(
        <div className="userProfile">
            <div className="userInfoProf">

                <div className="userIcon" >
                    <img src={user.avatar} alt={user} />
                
                </div>
 
           <div className="displayProf">
                <h4>{user.username}</h4>
                {user.bio.length > 1 ? user.bio :<h1>ADD SOMETHING TO YOU BIO</h1>}
                <Tooltip title="Edit Profile">
                    <Button onClick={openModal} shape="circle" icon={<SettingOutlined/>}/>
                </Tooltip>
               
                

                <Modal
                    // className="editModalForm"
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    // style={customStyles}
                    className="Modal"
                    contentLabel="Example Modal"
                    >
                            
                            <button onClick={closeModal}> X </button>
                            <div>
                                <h3> Edit </h3>
                                <hr/>
                                <form className="edit-form" onSubmit={handleSubmit} autoComplete="off">
                                    <label>Image Upload</label>
                                    <input 
                                    type="file" 
                                    name="avatar" 
                                    onChange={handleChange}
                                    
                                        />
                                    <br/>
                                    <label htmlFor="email">

                                        <input 
                                        type="email" 
                                        name="email" 
                                        value={email} 
                                        autoComplete="email"
                                        onChange={handleChange} 
                                        placeholder="Email" 
                                        
                                        />

                                    </label>

                                    <label htmlFor="current-password">
                                        <input 
                                        type="password" 
                                        name="password" 
                                        placeholder="Password"
                                        value={password} 
                                        onChange={handleChange}
                                        autoComplete="current-password"
                                        />
                                    </label>

                                    <label htmlFor="new-password">
                                        <input 
                                        type="password" 
                                        name="password_confirmation" placeholder="Password Confirmation"
                                        autoComplete="new-password"
                                        value={password_confirmation} 
                                        onChange={handleChange}
                                        />
                                    </label>
                                    <textarea cols='30' rows="3"
                                        onChange={handleChange}
                                        name="bio"
                                        placeholder="bio"
                                        value={bio} >
                                    </textarea> 
                                
                                    <button type="submit" > Save Edits </button>
                                    </form>
                                </div>
                        
                    </Modal>
                </div>

            </div>  
        </div>
    )
}