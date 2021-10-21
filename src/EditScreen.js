import React from 'react'
import {auth} from './Firebase'
import "./EditScreen.css"
import { useSelector} from 'react-redux'
import { selectUser} from './features/userSlice';
import Nav from './Nav'



function EditScreen() {
    const user = useSelector(selectUser);
    return (
        <div className="edit-screen">
            <Nav />
            <div className="center">
                <h3>Profile</h3>
                <div className="inner-div">
                    <img className="avatar-img" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
                    <div className="last-section">
                        <p>{user.email}</p>
                        <button onClick={()=> auth.signOut()}>SignOut</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditScreen
