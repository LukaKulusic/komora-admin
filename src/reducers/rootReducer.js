import {combineReducers}  from 'redux'
import memberReducer from './memberReducer'
import newsReducer from './newsReducer'
import categoryReducer from './categoryReducer'
import boardMemberReducer from './boardMemberReducer'
import contactReducer from './contactReducer'
import parliamentReducer from './parliamentReducer'
import advReducer from './advReducer'
import aboutReducer from './aboutReducer'
import homePageReducer from './homePageReducer'
import loginReducer from './loginReducer'
import congressReducer from './congressReducer'

export default combineReducers({
    memberReducer,
    newsReducer,
    categoryReducer,
    boardMemberReducer,
    contactReducer,
    parliamentReducer,
    advReducer,
    aboutReducer,
    homePageReducer,
    loginReducer,
    congressReducer
})