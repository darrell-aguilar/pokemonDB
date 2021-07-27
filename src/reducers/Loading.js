export const LOADING = 'LOADING'

const LoadingReducer = (state = true, action) => {
    switch(action.type) {
        case LOADING:
            return action.payload
        default:
            return state
    }
}

export default LoadingReducer