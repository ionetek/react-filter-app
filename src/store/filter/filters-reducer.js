import { ADD_FILTER, ADD_SEARCH_QUERY, CLEAR_FILTER, REMOVE_FILTER } from './filters-actions';

const initialState = {
    params: [],
    searchQuery: ''
};

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FILTER: {
            const uniqueSet = new Set([...state.params, action.filter]);
            return {
                ...state,
                params: [...uniqueSet]
            };
        }
        case ADD_SEARCH_QUERY: {
            return {
                ...state,
                searchQuery: action.searchQuery
            };
        }
        case CLEAR_FILTER: {
            return {
                params: [],
                searchQuery: ''
            };
        }
        case REMOVE_FILTER: {
            return {
                ...state,
                params: state.params.filter( item => item !== action.filter)
            };


        }
        default: {
            return state;
        }

    }
}
