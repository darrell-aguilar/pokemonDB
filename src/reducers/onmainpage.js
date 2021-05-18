export const onMainPage = 'onMainPage'

const checkMainPageReducer = (state = true, action) => {
    switch(action.type) {
        case onMainPage:
            return !state
        default:
            return state
    }
}

export default checkMainPageReducer