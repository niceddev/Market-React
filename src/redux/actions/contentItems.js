import axios from "axios";

export const fetchItems = () => (dispatch) => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
        dispatch(setContentItems(data.contentItems))
    })
} 

export const setContentItems = (items) => ({
    type: 'SET_ITEMS',
    payload: items
})