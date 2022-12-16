export const initState = {
    volume: '0',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_VOLUME':
            return {
                ...state,
                volume: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
