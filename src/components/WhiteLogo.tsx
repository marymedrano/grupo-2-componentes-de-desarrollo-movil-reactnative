import React from 'react'
import { View,Image } from 'react-native'

export const Whitelogo = () => {
  return (
    <View style={{
        alignItems:'center'
    }}>
      <Image
      source={require('../assets/gbm.png')}
      style={{
          width:320,
          height:140
      }}
      />
    </View>
  )
}


