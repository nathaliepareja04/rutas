import { Button, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function DetailScreen({route}) {
    const navigation= useNavigation()
    const usuario=route.params
    const {top}=useSafeAreaInsets()


  return (
    <View style={{top:top+10}}>
      <Text>Details</Text>
      <Button title="Volver" onPress={()=>navigation.goBack()}/>
      <Text>{JSON.stringify(usuario)}</Text>
    </View>
  )
}

