import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'http://192.168.1.12:8080/api';
const rolesApi = axios.create({ baseURL });

rolesApi.interceptors.request.use(
    
    //cualquier petición que se haga  va a verificar el asyncStorage  y coloca el token si lo tiene y todas las peticiones lo tendrán.
    async (config) => {
        const token = await AsyncStorage.getItem('token')
        if (token){
            config.headers['x-token']=token;
        }
        return config;
       
    }
)

export default rolesApi;