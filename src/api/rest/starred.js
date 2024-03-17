import { makeRequest } from "../requests";

export const getStarredRepos = () => {
    const params = new URLSearchParams();
    return makeRequest({
        url: `/user/starred?${params}`,
    })
};

export const starRepo = ({ repo, owner }) => makeRequest({
    url: `/user/starred/${owner}/${repo}`,
    method: 'PUT',
});

export const unStarRepo = ({ repo, owner }) => makeRequest({
    url: `/user/starred/${owner}/${repo}`,
    method: 'DELETE',
});