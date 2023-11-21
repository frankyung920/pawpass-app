import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WelcomeBottomSheet from '@/components/WelcomeBottomSheet'
import { defaultStyles } from '@/constants/Styles'

const Welcome = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('@/assets/images/landing_bg.png')}
        style={styles.bg}
      ></ImageBackground>
      <WelcomeBottomSheet></WelcomeBottomSheet>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff'
  },
  bg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  }
})
