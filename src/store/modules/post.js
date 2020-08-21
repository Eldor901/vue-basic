export default {
    actions: {
        async fetchPosts({commit}, ctx){
            const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
            const posts = await res.json();

            commit('updatePosts', posts)
        }

    },
    mutations: {
        updatePosts(state, posts){
            state.posts = posts
        },
        createPost(state, newPost) {
            state.posts.unshift(newPost)
        }
    },
    state: {
        posts: [],
    },
    getters: {
        validPosts(state){
            return state.posts.filter(p =>{
                return p.title && p.body;
            })
        },
        allPosts(state){
            return state.posts
        },
        postLength(state, getters){
            return getters.validPosts.length
        },
    },

}
