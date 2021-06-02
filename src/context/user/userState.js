import Ract,{useReducer} from 'react';
import userReducer from './userReducer';
import UserContext from './userContext';
import axios  from "axios";
import {GET_PROFILE,GET_USERS} from "../type";

const UserState = (props)=>{
    const initializeState = {
        users : [],
        selectedUser : null
    }
    
    const [state,dispatch] = useReducer(userReducer,initializeState)
    
    const getUsers = async()=> {
        const res = await axios.get('https://reqres.in/api/users');
        dispatch({
            type: GET_USERS,
            payload: res.data.data
        })
    }

    const getProfile = async(id)=> {
        const res = await axios.get('https://reqres.in/api/users/' + id);
        dispatch({
            type:GET_PROFILE,
            payload:res.data.data
        })
    }

    return(
        <UserContext.Provider  value={{
            users:state.users,
            selectedUser:state.selectedUser,
            getUsers,
            getProfile
        }}>

            {props.children}

        </UserContext.Provider>
    )

}

export default UserState;