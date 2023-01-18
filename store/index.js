export const state = () => ({
    reviews: [],
    faq: [],
    teammates: []
})
export const mutations = {
    SET_REVIEWS(state, reviews) {
        state.reviews = reviews
    },
    SET_FAQ(state, faq) {
        state.faq = faq
    },
    SET_TEAMMATES(state, teammates){
        state.teammates = teammates
    }

}


export const actions = {
    async fetchReviews({ commit }) {
        const reviewData = await this.$axios.$get('http://107.173.122.114:8000/api/reviews/')
        commit('SET_REVIEWS', reviewData)
    },
    async fetchFaq({ commit }) {
        const faqData = await this.$axios.$get('http://107.173.122.114:8000/api/faq/')
        commit('SET_FAQ', faqData)
    },
    async fetchTeammates({ commit }) {
        const teammatesData = await this.$axios.$get('http://107.173.122.114:8000/api/team-members/')
        commit('SET_TEAMMATES', teammatesData)
    }
}

