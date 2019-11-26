import {
    GET_CHARACTERS_REQUEST,
    GET_CHARACTERS_SUCCESS,
    GET_CHARACTERS_ERROR
} from '@core/config/constants/actionType.constant';
  
const initialState: any = {
    request: null,
    success: null,
    error: null,
    list: null
}
  
export default function (state = initialState, action: any) {
    switch (action.type) {
        case GET_CHARACTERS_REQUEST: 
            return {
                request: true,
                success: false,
                error: false, 
            }

        case GET_CHARACTERS_SUCCESS: 
            return {
                request: false,
                success: true,
                error: false, 
                list: action.payload
            }

        case GET_CHARACTERS_ERROR: 
            return {
                request: false,
                success: false,
                error: true, 
            }

        default:
        return state
    }
}
