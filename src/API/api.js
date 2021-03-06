import axios from "axios"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'd66327ed-6b77-485d-934e-ec9d8785c19c'
    },
    withCredentials: true
})


export let UserAPI = {
    getUsers(pageSize, pageNumber) {
        return instance.get(`users?count=${pageSize}&page=${pageNumber}`)
    },

    followUser(userId) {
        return instance.post(`follow/${userId}`, {}
        )
    },

    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
    },

    getProfile(userId) {
        console.log('obsolete method')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },

    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    },

    saveUserPhoto(photo) {
        let formData = new FormData();
        formData.set('file', photo);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
    },

    saveUserInfo(info) {
        return instance.put(`profile`, info)
    }
}

export let AuthUserAPI = {
    me() {
        return instance.get(`auth/me`)
    },

    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, { email, password, rememberMe, captcha })
    },

    logout() {
        return instance.delete(`auth/login`)
    }
}

export const securityAPI = {
    getCaptcha() {
        return instance.get('/security/get-captcha-url');
    }
}