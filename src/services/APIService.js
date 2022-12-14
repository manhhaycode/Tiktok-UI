import * as httpRequest from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
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

export const suggestedAccounts = async (page, per_page) => {
    try {
        const res = await httpRequest.get('users/suggested', {
            params: {
                page,
                per_page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const videoList = async (type, page) => {
    try {
        const res = await httpRequest.get('/videos', {
            params: {
                type,
                page,
            },
        });
        console.log('success');
        return res;
    } catch (error) {
        console.log(error);
    }
};
