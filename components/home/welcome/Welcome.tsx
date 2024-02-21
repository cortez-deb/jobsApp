import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList
} from 'react-native'
import { useRouter } from 'expo-router'
import {  icons, SIZES } from '../../../constants'
import { useState } from 'react'
import styles from './welcome.style'

const Welcome = () => {
  const router = useRouter()
  
  return (
    <View>
      <Text>Welcome</Text>
    </View>
  )
}

export default Welcome