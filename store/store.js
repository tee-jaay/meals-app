// store.js

// Action types
const SET_CATEGORIES = 'SET_CATEGORIES';

// Action creators
const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    payload: categories,
});

// Reducer
const initialState = {
    isFetching: true,
    categories: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                isFetching: false,
                categories: action.payload,
            };
        default:
            return state;
    }
};

// Redux store
const store = Redux.createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);