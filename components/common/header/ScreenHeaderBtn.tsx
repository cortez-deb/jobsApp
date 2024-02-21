import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity,Image } from 'react-native'
import{ styles} from './screenheader.style'

const ScreenHeaderBtn = ({ iconUrl, dimensions }:{iconUrl:any,dimensions:any} ) => {
  const Styles = styles(dimensions)
  return (
    <TouchableOpacity style={Styles.btnContainer}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={Styles.btnImg} 
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn