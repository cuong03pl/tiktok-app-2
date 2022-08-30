import * as request from '~/utils/request';

export const search = async (q) => {
    const res = request.get('users/search', {
        params: {
            q,
            type: 'less',
        },
    });
    return res;
};

// export default search;
