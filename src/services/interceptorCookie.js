import axios from "axios";
import { getItem } from "../common/storage.services"; 
import { deleteCookieFunc, getCookieFunc } from "../common/cookie.services";




const baseURL = import.meta.env.VITE_BASE_URL

const instance = axios.create({
    baseURL: baseURL,
});

const onSuccess = (response) => {
    return response.data
}

const onError = (err) => {

    if(err.response.status === 401){
        // clearStorage()
        deleteCookieFunc('cookie-token');
        window.location.pathname = '/LoginCookie' // or '/login'
    }

    if(err.response.status >= 400 && err.response.status < 500){
        alert("Client request error: " + err.response.status);
    }

    return Promise.reject(err);
}

instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use(opt => {

    //const user = useSelector(state => state.user)

    const token = getCookieFunc("cookie-token") ? getCookieFunc("cookie-token") : null;



    if (token) opt.headers.Authorization = 'Bearer ' + token;
    return opt
})

export default instance;


