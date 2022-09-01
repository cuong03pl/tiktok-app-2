import * as request from '~/utils/request';

export const getSuggested = async (page = 1, per_page = 5) => {
    const res = request.get('users/suggested', {
        params: {
            page,
            per_page,
        },
    });
    return res;
};
export const getFollowing = async (page = 1) => {
    const res = request.get('me/followings', {
        params: {
            page,
        },
    });
    return res;
};

// export default search;
