const initState = {
    themeId: 1,
}
type ThemeStateType = typeof initState

export const themeReducer = (state = initState, action: changeThemeId): ThemeStateType => {
    // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return { ...state, themeId: action.id }
        default:
            return state
    }
}

export const changeThemeIdAC = (id: number): changeThemeId => ({ type: 'SET_THEME_ID', id })
type changeThemeId = {
    type: 'SET_THEME_ID'
    id: number
}
