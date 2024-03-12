import * as api from '../../api';

export const trendings = {
    namespaced: true,
    state: {
        data: []
    },
    mutations: {
        SET_TRENDINGS: (state, trendings) => {
            state.data = trendings;
        },
        SET_README: (state, payload) => {
            state.data = state.data.map(repo => {
                if (payload.id === repo.id) {
                    repo.readme = payload.content
                }
                return repo;
            })
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
        }
    }
}