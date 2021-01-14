import { combineReducers } from 'redux'
import citiesReducer from './cities'
import contentItemsReducer from './contentItems'

const rootReducer = combineReducers({
    cities: citiesReducer,
    contentItems: contentItemsReducer
})

export default rootReducer;