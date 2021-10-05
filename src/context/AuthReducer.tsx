import { Usuario } from '../interfaces/appInterfaces';

export interface AuthState {
    status: 'checking' | 'authenticated' | 'not-authenticated'
    token: string | null;
    errorMessage: string;
    user: Usuario | null;
}

type AuthAction =
//    | { type: 'signUp', payload: { token: string, user: Usuario } }
    | { type: 'addError', payload: string }
    | { type: 'removeError' }
    | {type:'notAuthenticated'}
    | { type: 'logout' }

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    //cada una de las acciones aqui se encuentran bien definidas.
    
    switch (action.type) {
        case 'addError':
            return {
                ...state,
                user: null,
                status: 'not-authenticated',
                token: null,
                errorMessage: action.payload
            };

            //solo esta hecho para quitar el mensaje de error de addError
        case 'removeError':
            return {
                ...state,
                errorMessage: '',
            };

            //para verificar el token, pone el token en la propiedad y el usuario.toda la info del user.
        // case 'signUp':
        //     return {
        //         ...state,
        //         errorMessage: '',
        //         status: 'authenticated',
        //         token: action.payload.token,
        //         user: action.payload.user
        //     }

            //cuando el token no es valido, para mostrar alertas
            //esparso el ...state por si hay alguna propiedad que quiera mantener
            case 'logout':
            case 'notAuthenticated':
                return{
                    ...state,
                    status:'not-authenticated',
                    token:null,
                    user:null
                }


        default:
            return state;
    }

}