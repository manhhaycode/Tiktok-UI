export const initState = {
    volume: '0',
    reload: false,
    theme: 'white',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_VOLUME':
            return {
                ...state,
                volume: action.payload,
            };
        case 'SET_RELOAD':
            return {
                ...state,
                reload: action.payload,
            };
        case 'SET_THEME':
            return {
                ...state,
                theme: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
