// GET API script in page
// computed: {
//   ...mapState({
//     ###: (state) => state.#src#.###,
//   }),
// },
// async fetch() {
//   await this.$store.dispatch("#src#/fetch###");
// },

// GET API in js
// export const state = () => ({
//     ###: [],
//   })

//   export const mutations = {
//     SET_###(state, payload){
//       state.###: = payload
//     },
//   }

//   export const actions = {

//     fetch###({ commit }) {
//       return new Promise((resolve, reject) => {
//         this.$axios
//           .get("~link_in_swagger~/", headers: { "Accept-Language": this.$i18n.locale })
//           .then(res => {
//             commit("SET_###", res.data);
//             resolve(res);
//           })
//           .catch(error => {
//             console.log('FAIL')
//           });
//       });
//     },

// }

//POST API in page (without js file)
// if() {
//     this.$axios
//     .post("~link_in_swagger~/",{
//         here you should send data in api (example: ###:this.###)
//     })
//     .then(res => {
//         console.log('PASS')
//     })
//     .catch(error => {
//         console.log('FAIL')
//     });
// }
