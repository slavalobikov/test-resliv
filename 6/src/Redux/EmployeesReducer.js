import * as axios from 'axios';

const SET_EMPLOYESS = 'SET_EMPLOYESS/EmployessReducer';
const IS_FETHING = 'IS_FETHING/EmployessReducer';
const DELETE_USER = 'DELETE_USER/EmployessReducer';
const ADD_USER = 'ADD_USER/EmployessReducer';

let initialState = {
    employess: [],
    isFetching: null,
}

const EmployessReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EMPLOYESS: {
            return {
                ...state,
                employess:action.employess
            }
        }
        case IS_FETHING: {
            return  {
                ...state,
                isFetching: action.isFetching
            }
        }
        case DELETE_USER: {
            return {
                ...state,
                employess:state.employess.filter(item => item.id !== action.id)
            }
        }
        case ADD_USER: {
            debugger
            return {
                ...state,
                employess:[...state.employess, action.user]
            }
        }

        default:
            return state
    }

}

const SetEmployess = (employess) => ({type: SET_EMPLOYESS, employess})
const IsFethcing = (isFetching) => ({type: IS_FETHING, isFetching})
export const DeleteUser = (id) => ({type: DELETE_USER, id})
export const AddUser = (user) => ({type: ADD_USER, user})

export const SetEmployessThunk = () => async (dispatch) => {
    dispatch(IsFethcing(true))
    let response = await axios.get('https://reqres.in/api/users?per_page=12')
    dispatch(SetEmployess(response.data.data))
    dispatch(IsFethcing(false))

}

export default EmployessReducer;