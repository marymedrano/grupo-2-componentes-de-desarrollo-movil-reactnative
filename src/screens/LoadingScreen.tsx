import React from 'react'
import { ActivityIndicator, View } from 'react-native'

interface LoaginProps{

    navigation:any

}

export const LoadingScreen:React.FC<LoaginProps> = (props) => {

const {navigation}=props;   

  console.log(navigation)

    setTimeout(()=>{
         navigation.navigate("LoginScreen")
    },10000)

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <ActivityIndicator
                size={50}
                color="black"
            />
        </View>
    )
}


