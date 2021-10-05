import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({

    formContainer: {
        flex: 1,
        paddingHorizontal: 30,
        justifyContent:'center',
        height:600,
        marginBottom:50
    },

    title: {
        color: 'white',
        fontSize: 25,
        fontWeight:'bold',
        marginTop: 20,
        
    },

    label: {
        marginTop: 35,
        color: 'white',
        fontWeight: 'bold'
    },

    inputField: {
        color: 'white',
        fontSize: 25 
    },

    inputFieldIOS: {
        borderBottomColor: 'white',
        borderBottomWidth: 4,
        paddingBottom: 4
    },

    buttonContainer: {
        alignItems: 'center',
        marginTop: 50,
       
    },

    button: {
        borderWidth: 2,
        borderColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 100
    },

    buttonText: {
        fontSize: 18,
        color: 'white'
    },
    // container:{
    //     flex: 1,
    //     justifycontent: 'center',
    //     alignItems: 'center'
    // },
    // titleUser:{
    //     fontSize: 20,
    // marginBottom: 20
    // }
});