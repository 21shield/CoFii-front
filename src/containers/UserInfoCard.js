import { Modal, Button, Tooltip, Upload, Form, Input } from 'antd';
import { SettingOutlined, InboxOutlined } from '@ant-design/icons';
import React, { useState }from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from '../api/index'
import '../styles/profile.css'

const { Dragger } = Upload;




export default function Profile(){ 
   
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.currentUser)
    const [modalIsOpen, setIsOpen] = useState(false)
    const [confirmLoading, setConfirmLoading] = useState(false)

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
        setConfirmLoading(true)
        let form = new FormData()
        form.append("avatar", avatar)
        form.append("email", email)
        form.append("bio", bio)
        form.append("password", password)
        form.append("password_confirmation", password_confirmation)

        updateUser(form)
        .then((data) => {
            const action = {
                type: "LOGIN",
                payload: data.user
            }
            dispatch(action)
            
            // new data should be rendered on the page
        }
        )
        setTimeout(() => {
            setConfirmLoading(false)
            closeModal()
        }, 2000
        )
        setFormState({  
            avatar: user.avatar,
            email: user.email,
            bio: user.bio,
            password: "",
            password_confirmation: ''})

            
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
                <h3>{user.username}</h3>
                {user.bio.length > 1 ? <h2>{user.bio}</h2> :<h1>ADD SOMETHING TO YOU BIO</h1>}
                <Tooltip title="Edit Profile">
                    <Button onClick={openModal} shape="circle" icon={<SettingOutlined/>}/>
                </Tooltip>
               
                

                <Modal
                    title={
                        <h1> Edit Profile {user.username} ? </h1>    
                    }
                    visible={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onCancel={closeModal}
                    confirmLoading={confirmLoading}
                    onOk={handleSubmit}
                    okText={"Submit Edits"}
                    >
                            
                            
                            <div>
                               
                                <Form className="edit-form" onSubmit={handleSubmit} autoComplete="off">
                                    <label>Image Upload</label>
                                    <input 
                                    type="file" 
                                    name="avatar" 
                                    onChange={handleChange}
                                    
                                        />
                                    <br/>
                                    <label htmlFor="email">

                                        <Input 
                                        type="email" 
                                        name="email" 
                                        value={email} 
                                        autoComplete="email"
                                        onChange={handleChange} 
                                        placeholder="Email" 
                                        
                                        />

                                    </label>

                                    <label htmlFor="current-password">
                                        <Input.Password 
                                        type="password" 
                                        name="password" 
                                        placeholder="Password"
                                        value={password} 
                                        onChange={handleChange}
                                        autoComplete="current-password"
                                        />
                                    </label>

                                    <label htmlFor="new-password">
                                        <Input.Password 
                                        type="password" 
                                        name="password_confirmation" placeholder="Password Confirmation"
                                        autoComplete="new-password"
                                        value={password_confirmation} 
                                        onChange={handleChange}
                                        />
                                    </label>
                                    <Input.TextArea cols='30' rows="3"
                                        onChange={handleChange}
                                        name="bio"
                                        placeholder="bio"
                                        value={bio} >
                                    </Input.TextArea> 
                                
                                    </Form>
                                </div>
                        
                </Modal>
                </div>

            </div>  
        </div>
    )
}