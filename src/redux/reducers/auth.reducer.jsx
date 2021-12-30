import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "../actionType"

const initialState = {
    accessToken:sessionStorage.getItem("ytclone-access-token") ? sessionStorage.getItem("ytclone-access-token") : null,
    user:sessionStorage.getItem("ytclone-user") ? sessionStorage.getItem("ytclone-user") : null,
    loading:false
}


export const authReducer = (prevState = initialState , action)=>{
    const { type , payload } = action
    switch(type){
        case LOGIN_REQUEST:
            return{
                ...prevState,
                loading:true,
            }
        case LOGIN_SUCCESS:
            return{
                ...prevState,
                accessToken:payload,
                loading:true,
            }
        case LOGIN_FAIL:
            return{
                ...prevState,
                accessToken:null,
                loading:false,
                erroe:payload,
            }
        case LOAD_PROFILE:
            return{
                ...prevState,
                user:payload,
            }
        case LOG_OUT:
            return{
                ...prevState,
                accessToken:null,
                user:null,
        }
        default:
            return prevState
    }
}