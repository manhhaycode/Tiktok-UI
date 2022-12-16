export const initState = {
    muted: true,
    volume: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_MUTE_STATE':
            return {
                ...state,
                muted: action.payload,
                volume: action.payload ? 0 : 50,
            };
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
