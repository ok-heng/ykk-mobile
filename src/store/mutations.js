const ADD_NUMBER = 'ADD_NUMBER'

export default {
    [ADD_NUMBER](state, num) {
        return state.itemNum += num;
    }
}