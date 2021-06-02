import React, { useContext } from 'react'
import UserContext from '../context/user/userContext'

const Profile = () => {

    const { selectedUser } = useContext(UserContext);

    return (
        <>
            {selectedUser ? (

                <div className="card card-body text-center" >
                    <img src={selectedUser.avatar} className="img-fluid card-img-top rounded-circle m-auto " style={{width:180}} />
                <p className="m-2 ">
                   <h1>  {selectedUser.first_name} {selectedUser.last_name}  </h1>
                   <h2> {selectedUser.email} </h2>
                </p>
                </div>

            ) : (<h1> User no selected </h1>)
            }
        </>

    )
}

export default Profile;