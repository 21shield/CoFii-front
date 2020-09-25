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
        avatar: {},
        email: user.email,
        bio: '',
        password: '',
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
        }
        )
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
           <div className="userIcon" >
                <img src={user.avatar} alt={user} />
                <h2>{user.username}</h2>
           </div>

           <div className="userInfo">
                {user.bio ? user.bio :<h1>ADD SOMETHING TO YOU BIO</h1>}
                <button onClick={openModal} > Edit Profile </button>

                <Modal
                    // className="editModalForm"
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    // style={customStyles}
                    contentLabel="Example Modal"
                    >
                            
                            <button onClick={closeModal}> X </button>
                            <div>
                                <h3> Edit </h3>
                                <hr/>
                                <form className="edit-form" onSubmit={handleSubmit}>
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
                                        onChange={handleChange} 
                                        placeholder="Email" 
                                        
                                        />

                                    </label>

                                    <label htmlFor="password">
                                        <input 
                                        type="new-password" 
                                        name="password" 
                                        placeholder="Password" 
                                        value={password} 
                                        onChange={handleChange}
                                        />
                                    </label>

                                    <label htmlFor="password_confirmation">
                                        <input 
                                        type="password" 
                                        name="password_confirmation" placeholder="Password Confirmation"
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
    )
}