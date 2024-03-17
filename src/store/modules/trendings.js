import * as api from '../../api';

export const trendings = {
    namespaced: true,
    state: {
        data: []
    },
    mutations: {
        SET_TRENDINGS: (state, trendings) => {
            state.data = trendings.map(item => {
                item.following = {
                    status: false,
                    loading: false,
                    error: ""
                };
                return item;
            });
        },
        SET_README: (state, payload) => {
            state.data = state.data.map(repo => {
                if (payload.id === repo.id) {
                    repo.readme = payload.content
                }
                return repo;
            })
        },
        SET_FOLLOWING: (state, payload) => {
            state.data = state.data.map((repo) => {
                if (payload.id === repo.id) {
                    repo.following = {
                        ...repo.following,
                        ...payload.data
                    }
                }
                return repo
            });

        }
    },
    getters: {
        getRepoById: (state) => (id) => {
            return state.data.find(item => item.id === id)
        }
    },
    actions: {
        async fetchTrendings({ state, commit }) {
            console.log("state", state)
            try {
                const { data } = await api.trendings.getTrendings();
                commit('SET_TRENDINGS', data.items)
            } catch (e) {
                console.log(e);
            }
        },
        async fetchReadme({ commit, getters }, { id, owner, repo }) {
            const curRepo = getters.getRepoById(id);
            if (curRepo.readme !== undefined) return;
            try {
                const { data } = await api.readme.getReadme({ owner, repo });
                commit('SET_README', { id, content: data })
            } catch (e) {
                console.log(e);
            }
        },
        async starRepo({ commit, getters }, id) {
            const { name: repo, owner } = getters.getRepoById(id);
            commit('SET_FOLLOWING', {
                id,
                data: {
                    status: false,
                    loading: true,
                    error: ""
                }
            });
            try {
                await api.starred.starRepo({ owner: owner.login, repo });
                commit('SET_FOLLOWING', {
                    id,
                    data: {
                        status: true,
                    }
                });
            } catch (e) {
                commit('SET_FOLLOWING', {
                    id,
                    data: {
                        status: false,
                        error: e
                    }
                });
            } finally {
                commit('SET_FOLLOWING', {
                    id,
                    data: {
                        loading: false,
                    }
                });
            }
        }
    }
}