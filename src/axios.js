import axios from 'axios'
import store from '@/store/index'
import router from '@/router/index'

var instance = axios.create({
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
});

instance.interceptors.request.use(
    (config) => {
        if(store.state.token) {
            config.headers.Authorization = `token ${store.state.token}`;
        }
        return config;
    }
)

instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if(error.response) {
            switch(error.response.status) {
                case 401:
                    router.replace({
                        path: 'login1',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    })
            }
        }
        return Promise.reject(error.response);
    }
);

export default {
    userRegister(data) {
        return instance.post('/static/db.json', data);
    },
    userLogin(data) {
        return instance.post('/static/db.json', data);
    },
    getUser() {
        return instance.get('/static/db.json');
    },
    delUser(data) {
        return instance.post('/static/db.json', data);
    }
}

