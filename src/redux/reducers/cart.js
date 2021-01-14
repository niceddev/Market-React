const initialState = {
    items: {},
}

const cart = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_':
            return {}
            break;
        case 'REMOVE_':
            return {}
            break;
        default:   
            return state;
    }
}