import { combineReducers } from 'redux'
import { reducer as headerReducer } from '../common/Header/store'
import { reducer as homeReducer } from '../page/Home/store'

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer
})
export default reducer