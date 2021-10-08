import React, { useContext } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { StatusBar } from "expo-status-bar";

interface UsersProps {
  route: { name: string; params: any };
}

export const UsuarioScreen: React.FC<UsersProps> = (props) => {
  const { name, params } = props.route;
  const { data } = params;

  console.log(data["token"]);
  const { user, token, logOut } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent={false} backgroundColor="grey" />
      <View style={styles.content}>
        <Text style={styles.title}>Menú del cliente</Text>
      </View>

      <View style={styles.bottom}>
        <Button title="Salir" color="#4682B4" onPress={logOut} />
      </View>
      <Text>{JSON.stringify(user, null, 5)}</Text>
      <Text>{token}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 17,
    alignItems: "center",
  },
  bottom: {
    alignSelf: 'center',
    width: '30%'
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});
