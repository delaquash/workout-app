import { reactive } from 'vue';

const state = reactive({
    user: null,
});

const methods ={
    setUser (payload) {
        // check if payload is true
        state.user = payload ? payload.user : null;
    }
}

export default({
    state,
    methods
})