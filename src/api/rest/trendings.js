import { makeRequest } from '../requests'

const addStartingZero = (value) => value < 10 ? `0${value}` : value

export const getTrendings = (lang = 'javascript') => {
    const params = new URLSearchParams();
    const weekMS = 7 * 24 * 60 * 60 * 1000;
    const weekAgo = new Date(Date.now() - weekMS);

    const formattedDate = [
        weekAgo.getFullYear(),
        addStartingZero(weekAgo.getMonth() + 1),
        addStartingZero(weekAgo.getDate())
    ].join('-')

    params.append('order', 'desc');
    params.append('sort', 'stars');
    params.append('per_rage', 10);
    params.append('q', `language:${lang} created:>${formattedDate}`);

    return makeRequest({
        url: `/search/repositories?${params}`
    })
}

export const getReadme = ({ owner, repo }) => {
    const contentHeader = 'application/vnd.github.v3.html+json';
    return makeRequest({
        url: `/repos/${owner}/${repo}/readme`,
        headers: {
            accept: contentHeader
        }
    })
}