import React from 'react'
import { View, Text, TouchableOpacity,Image } from 'react-native'
import styles from './popularjobcard.style'
import { checkimageURL } from '../../../../utils'

const PopularJobCard = ({item,selectedJob,handleCardPress}:{item:any,selectedJob:any,handleCardPress:any}) => {
  const style= styles({selectedJob,item})
  return (
    <TouchableOpacity
      style={style.container}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={style.logoContainer}>
        <Image
          source={{uri: checkimageURL(item?.employer_logo) ? item?.employer_logo : 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'}}
          resizeMode='contain'
          style={style.logoImage}
        />
      </TouchableOpacity>
      <Text style={style.companyName} numberOfLines={1}>{item?.employer_name}</Text>

      <View style= {style.infoContainer}>
        <Text style={style.jobName} numberOfLines={1}>{item?.job_title}</Text>
        <Text style={style.location} numberOfLines={1}>{item?.job_country}</Text>
      </View>
      </TouchableOpacity>
  )
}

export default PopularJobCard
