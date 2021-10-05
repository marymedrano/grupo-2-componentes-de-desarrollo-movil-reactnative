import React, { useContext } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

interface UsersProps{
  route:{name:string, params:any}
}

export const UsuarioScreen:React.FC<UsersProps> = (props) => {

  const { name, params } = props.route;
  const { data } = params;
  
  console.log(data["token"])
  const { user, token, logOut } = useContext(AuthContext);

  return (
    <View>
      <Text>
        Menú del cliente
      </Text>

      <Button
        title="Salir"
        color="#4682B4"
        onPress={logOut}
      />
      <Text>
        {JSON.stringify(user, null, 5)}
      </Text>
      <Text>
        {token}
      </Text>
    </View>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     justifycontent: 'center',
//     alignItems: 'center'
//   },
//   title: {
//     fontSize: 20,
//     marginBottom: 20
//   }
// });
