import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { AuthContext } from '../context/AuthContext';
import { UsuarioScreen } from '../screens/UsuarioScreen';
import { Usuario } from '../interfaces/appInterfaces';
import { LoadingScreen } from '../screens/LoadingScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {

  const { status } = useContext(AuthContext);
 
  return (
    <Stack.Navigator
    initialRouteName="LoadingScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
    
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
        
            <Stack.Screen name="UsuarioScreen" component={UsuarioScreen} />
     
    </Stack.Navigator>
  );
}