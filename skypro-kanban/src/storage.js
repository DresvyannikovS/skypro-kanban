export const setUserToken = (token) => {
    localStorage.setItem('authToken', token)
}

export const getUserToken = () => {
    return localStorage.getItem('authToken')
}

export const clearUserToken = () => {
    localStorage.clear();
    return '';
}

export const setUserData = (user) => {
    localStorage.setItem('userData', user)
}

export const getUserData = () => {
    return localStorage.getItem('userData')
}
