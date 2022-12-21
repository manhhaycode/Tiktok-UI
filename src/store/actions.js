export const setVolume = (state) => {
    return {
        type: 'SET_VOLUME',
        payload: state,
    };
};

export const setReload = (state) => {
    return {
        type: 'SET_RELOAD',
        payload: state,
    };
};

export const setTheme = (state) => {
    return {
        type: 'SET_THEME',
        payload: state,
    };
};

export const setModalLogin = (state) => {
    return {
        type: 'SET_MODAL-LOGIN',
        payload: state,
    };
};
