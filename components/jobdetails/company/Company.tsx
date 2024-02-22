import React from 'react'
import { View, Text, Image } from 'react-native'
import { icons } from '../../../constants'
import styles from './company.style'
import { checkimageURL } from '../../../utils'
const Company = ({ companyLog, jobTitle, companyName, Location }: { companyLog: any, jobTitle: String, companyName: String, Location: String }) => {

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{ uri: checkimageURL(companyLog) ? companyLog : "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg" }}
          resizeMode="cover"
          style={styles.logoImage}
        />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName}</Text>
        <View style={styles.locationBox}>
          <Image
          source={icons.location}
          resizeMode="contain"
          style={styles.locationImage}
          />
           <Text style={styles.locationName}>{Location}</Text> 
        </View>
      </View>
    </View>
  )
}

export default Company