// information related to the user
import React, { createContext, useEffect, useReducer } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import rolesApi from "../api/rolesApi";
import { Usuario, LoginResponse, LoginData } from '../interfaces/appInterfaces';
import { authReducer, AuthState } from './AuthReducer';

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    // signUp: ()=> void;
    signIn: (LoginData: LoginData) => void;
    logOut: () => void;
    removeError: () => void;
}

interface prueba{
    navigation:any
}

const authInitialState: AuthState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage: ''
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {

    //todas estas funciones ls tengo que retornar
    const [state, dispatch] = useReducer(authReducer, authInitialState);

    useEffect(() => {
        validaToken();
    }, [])

    const validaToken = async () => {
        const token = await AsyncStorage.getItem('token');

        //No token, no autenticado
        if (!token) return dispatch({ type: 'notAuthenticated' });

        //Hay token
        const resp = await rolesApi.get('/auth');
        if (resp.status !== 200) {
            dispatch({ type: 'notAuthenticated' })
        }

        // nuevo token con una nueva vigencia, cada vez que se haga una validación lo comprueba 
        // y se genera uno nuevo
        // await AsyncStorage.setItem('token', resp.data.token)
        // dispatch({
        //     type: 'signUp',
        //     payload: {
        //         token: resp.data.token,
        //         user: resp.data.usuario
        //     }
        // });

    }

    const signIn = async ({ correo, password, navigation }: LoginData) => {

        //petición  y tranformar codigo a un async
        try {
            const { data } = await rolesApi.post<LoginResponse>('/auth/login', { correo, password });
            // dispatch({
            //     type: 'signUp',
            //     payload: {
            //         token: data.token,
            //         user: data.usuario
            //     }
            // });
            //el token ya esta almacenado
            navigation.navigate('UsuarioScreen',{data:data})
            await AsyncStorage.setItem('token', data.token)
            console.log(data)
        }
        catch (error:any) {
            //  console.error(error.message);
            dispatch({
                type: 'addError',
                payload: error.response.data.msg || 'Información incorrecta',
            })
            
        }
    };

    // const signUp = () => {};

    const logOut = async () => {
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'logout' });

    };
    const removeError = () => {
        dispatch({ type: 'removeError' });
    };

    return (
        <AuthContext.Provider value={{
            ...state,
            signIn,
            logOut,
            removeError
        }}>
            {children}
        </AuthContext.Provider>
    )
}

