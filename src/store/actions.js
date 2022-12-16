export const setMuteState = (state) => {
    return {
        type: 'SET_MUTE_STATE',
        payload: state,
    };
};

export const setVolume = (state) => {
    return {
        type: 'SET_VOLUME',
        payload: state,
    };
};
