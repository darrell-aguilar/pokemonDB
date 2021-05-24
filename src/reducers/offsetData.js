export const offsetDataChange = 'offsetDataChange';

const offsetDataReducer = (state = 20, action) => {
    switch(action.type) {
        case offsetDataChange:
            return action.payload
        default:
            return state
    }
}

export default offsetDataReducer