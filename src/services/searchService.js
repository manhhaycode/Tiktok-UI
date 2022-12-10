import * as httpRequest from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
    console.log(process.env.REACT_APP_BASE_URL);
    try {
        const res = await httpRequest.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
