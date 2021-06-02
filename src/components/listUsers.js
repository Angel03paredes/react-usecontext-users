import React, {useContext,useEffect} from 'react';
import UserContext from '../context/user/userContext';


const UserList = ()=>{
    
        
    const {users,getUsers,getProfile} = useContext(UserContext);

    useEffect(()=>{
        getUsers();
    },[])

        return (
          <div className="list-group h-100">
              {
                   users.map(user=>(
                        <a className="list-group-item list-group-item-action d-flex justify-content-satart" href="#!" key={user.id} onClick={()=> getProfile(user.id)} > 
                        <img src={user.avatar} className="img-fluid m-2 rounded-circle " width="70" />
                        <p className="m-2">
                        {user.first_name} {user.last_name} 
                        </p>
                        </a>
                    ))
              }
          </div>
    )
}

export default UserList;