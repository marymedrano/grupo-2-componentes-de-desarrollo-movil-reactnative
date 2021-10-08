import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect } from 'react'
import { Alert, TextInput } from 'react-native'
import { Platform } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { Keyboard } from 'react-native'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Background } from '../components/Background'
import { Whitelogo } from '../components/WhiteLogo'
import { AuthContext } from '../context/AuthContext'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/loginTheme'

// object that allows navigation.
// interface Props extends StackScreenProps<any, any> { }
interface LoginProps {
    navigation: any
}

export const LoginScreen: React.FC<LoginProps> = (props) => {

    const { navigation } = props

    const { signIn, errorMessage, removeError } = useContext(AuthContext);

    const { email, password, onChange } = useForm({
        email: '',
        password: ''
    });

    //mensaje de error en pantalla
    useEffect(() => {
        if(errorMessage){
        Alert.alert('Inicio de sesión incorrecto. Revisar credenciales.'),errorMessage,[{text:'ok',onPress:removeError}],
        // console.log(errorMessage)  
    [{text:"ok",onPress:removeError}]
    }
    }, [errorMessage])

    const onLogin = () => {
        console.log({ email, password });
        Keyboard.dismiss();
        signIn({ correo: email, password: password, navigation});
    }

    return (
        <>

            {/* Background */}
            <Background />

            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
            >

                <View style={loginStyles.formContainer}>
                    <Whitelogo />
                    <Text style={loginStyles.title}> Bienvenido </Text>
                    <Text style={loginStyles.label}> Correo: </Text>
                    <TextInput
                        placeholder="usuario@gbm.com"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        keyboardType="email-address"
                        underlineColorAndroid="white"
                        style={[
                            loginStyles.inputField,
                            (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                        ]}
                        selectionColor="white"

                        onChangeText={(value) => onChange(value, 'email')}
                        value={email}
                        onSubmitEditing={onLogin}

                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <Text style={loginStyles.label}> Contraseña: </Text>
                    <TextInput
                        placeholder="*******"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        underlineColorAndroid="white"
                        secureTextEntry
                        style={[
                            loginStyles.inputField,
                            (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                        ]}
                        selectionColor="white"

                        onChangeText={(value) => onChange(value, 'password')}
                        value={password}
                        onSubmitEditing={onLogin}


                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    {/* Boton Login */}

                    <View style={loginStyles.buttonContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={loginStyles.button}
                            onPress={onLogin}
                        >
                            <Text style={loginStyles.buttonText}>
                                Ingresar
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </KeyboardAvoidingView>
        </>
    )
}


