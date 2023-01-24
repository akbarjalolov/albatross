export const state = () => ({
    reviews: [],
    faq: [],
    teammates: [],
    partners: [],
    settings: [],
    blogs: [],
    blogSlug: {},
    contact: {}
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
    },
    SET_PARTNERS(state, partners){
        state.partners = partners
    },
    SET_SETTINGS(state, settings){
        state.settings = settings
    },
    SET_BLOGS(state, blogs){
        state.blogs = blogs
    },
    SET_BLOGSLUG(state, blogSlug){
        state.blogSlug = blogSlug
    },
    POST_CONTACT(state, contact){
        state.contact = contact
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
    },
    async fetchPartners({ commit }) {
        const partnersData = await this.$axios.$get('http://107.173.122.114:8000/api/partners/')
        commit('SET_PARTNERS', partnersData)
    },
    async fetchSettings({commit}) {
        const settingsData = await this.$axios.$get('http://107.173.122.114:8000/api/settings/')
        commit('SET_SETTINGS', settingsData)
    },
    async fetchBlogs({commit}) {
        const blogsData = await this.$axios.$get('http://107.173.122.114:8000/api/blog')
        commit('SET_BLOGS', blogsData)
    },
    async fetchBlogSlug({commit}, slug) {
        const blogSlugData = await this.$axios.$get(`http://107.173.122.114:8000/api/blog/${slug}/`)
        commit('SET_BLOGSLUG', blogSlugData)
    },
    async postContact({commit}, contact) {
        const contactData = await this.$axios.$post('http://107.173.122.114:8000/api/contact/', contact)
        commit('POST_CONTACT', contactData)
    }
}

