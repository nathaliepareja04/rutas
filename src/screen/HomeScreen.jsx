import { Button, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

export default function HomeScreen() {
    const navigation= useNavigation()

    const {top}=useSafeAreaInsets()

    const isFocused= useIsFocused()

    useEffect(() => {
      console.log(isFocused)
    
    }, [isFocused])
    

    const usuario={
        id:"123",
        nombre:"nath",
        apellido:"pl",
        edad:18
    }

  return (
    // <SafeAreaView>
        <View style={{top:top+10}}>
            <Text>Home</Text>
            <Button title="Ir a detalles" onPress={()=>navigation.navigate("DetailScreen", usuario)}/>
        </View>
    // </SafeAreaView>
  )
}