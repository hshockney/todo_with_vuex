import Axios from 'axios'
const url = 'mcok_api_url'

export default {
    addTodo({ state, commit }, payload) {
        // make api request to store todo
        // commit todo to vuex store
        Axios.post(url, { name: payload })
            .then(() => {
                commit('addTodo', payload)
            })
    },
    getTodos({ commit }) {
        Axios.get(url).then(response => {
            commit('addTodos', response.data.map(item => item.name))
        })
    }
}