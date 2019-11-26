import { GET_CHARACTERS_REQUEST} from '@core/config/constants/actionType.constant'


export const getAllList = (page: number) => ({
    page,
    type: GET_CHARACTERS_REQUEST
})