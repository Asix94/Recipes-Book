const storage = {

    getToken(){
        return localStorage.getItem('token')
    },

    setToken(value){
        return localStorage.setItem('token', value)
    },

    removeToken(){
        return localStorage.removeItem('token')
    }
}

export default storage