
// const initState = {
//     search: '',
//     status: 'All',
//     priority: []
// }

import { createSlice } from "@reduxjs/toolkit";

// const filterReducer = (state = initState, action) => {
//     switch (action.type){
//         case 'filter/searchFilterChange':
//             return {
//                 ...state,
//                 search: action.payload
//             }
        
//         case 'filter/statusFilterChange':
//             return {
//                 ...state,
//                 status: action.payload
//             }

//         case 'filter/priorityFilterChange':
//             return {
//                 ...state,
//                 priority: action.payload
//             }

//         default: 
//             return state
//     }
// }

// export default filterReducer;

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        search: '',
        status: 'All',
        priority: []
    },
    reducers: {
        searchFilterChange: (state, action) => {
            // mutation function
            state.search = action.payload;
        }, // => {type: 'filter/searchFilterChange'}
        statusFilterChange: (state, action) => {
            state.status = action.payload;
        },
        priorityFilterChange: (state, action) => {
            state.priority = action.payload
        }
    }
})
