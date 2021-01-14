const initialState = {
    cities: []
} 

const cities = (state = initialState, action) => {
    switch(action.type){
        case 'SET_CURRENT_CITY':
            return {
                ...state,
                city: action.payload
            }
            break;
        default:   
            return state;
    }
}

export default cities;