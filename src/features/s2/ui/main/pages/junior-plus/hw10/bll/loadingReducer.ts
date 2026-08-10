const initState = {
    isLoading: false,
}

export type LoadingStateType = typeof initState

type LoadingActionType = ReturnType<typeof loadingAC>

export const loadingReducer = (state: LoadingStateType = initState, action: LoadingActionType): LoadingStateType => {
    switch (action.type) {
        case 'CHANGE_LOADING':
            return {
                ...state,
                isLoading: action.isLoading,
            }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean) => ({
    type: 'CHANGE_LOADING' as const,
    isLoading,
})
