import Vuex from 'vuex';
const state = {
    domain: 'http://localhost',
    loginEndpoint: '/api/v1/auth/token/login/',
    wordsEndpoint: '/api/v1/words/',
    savedWordsIdsEndpoint: '/api/v1/saved/ids/',
    addSavedEndpoint: '/api/v1/saved/add/',
    deleteSavedEndpoint: '/api/v1/saved/add/',
    token: false,
    authenticated: false,
    savedIds: [],
    progress: {},
    userProfile: {},
};

const mutations = { 
    setToken(state, payload) {
        state.token = payload
    },
    setAuthenticated(state, payload) {
        state.authenticated = payload
    },
    logout(state) {
        state.authenticated = false
        state.token = false
    },
    setSavedWordsIds(state, payload) {
        state.savedIds = payload
    },
    setProgress(state, payload) {
        state.progress = payload
    },
    setUserProfile(state, payload) {
        state.userProfile = payload
    }
};

const getters = {
    getDomain: (state) => state.domain,
    getLoginEndpoint: (state) => state.loginEndpoint,
    getToken: (state) => state.token,
    isAuthenticated: (state) => state.authenticated == true,
    getWordsEndpoint: (state) => state.domain + state.wordsEndpoint,
    getSavedWordsIdsEnpoint: (state) => state.domain + state.savedWordsIdsEndpoint,
    getAddSavedEnpoint: (state) => state.domain + state.addSavedEndpoint,
    getDeleteSavedEnpoint: (state) => state.domain + '/api/v1/saved/delete/',
    getGameEndpoint: (state) => state.domain + '/api/v1/game/topic/',
    getGameSuccessEndpoint: (state) => state.domain + '/api/v1/game/word/',
    getSavedWordsIds: (state) => state.savedIds,
    getSavedWordsEnpoint: (state) => state.domain + '/api/v1/saved/',
    getTextForWordEndpoint: (state) => state.domain + '/api/v1/text/for-word/',
    getTopicsListEndpoint: (state) => state.domain + '/api/v1/topic/',
    getProgressEndpoint: (state) => state.domain + '/api/v1/saved/progress/',
    getProgress: (state) => state.progress,
    getAchievementsEndpoint: (state) => state.domain + '/api/v1/achievements/',
    getLearningEndpoint: (state) => state.domain + '/api/v1/learning/',
    getProfileEndpoint: (state) => state.domain + '/api/v1/acconunts/profile/',
    getUserProfile: (state) => state.userProfile,
}



const store = new Vuex.Store({
    state,
    mutations,
    getters,
});

export default store;
