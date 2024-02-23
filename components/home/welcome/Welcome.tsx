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
import { icons, SIZES } from '../../../constants'
import { useState } from 'react'
import styles from './welcome.style'

const Welcome = (props: any) => {
  const router = useRouter()
  const [activeJobType, setActiveJobType] = useState("Full Time")
  const Style = styles(props)
  const { search, setSearch, handleClick } = props
  const jobTypes = ["Full Time", "Part Time", "Remote", "Freelance", "Internship", "Temporary"]
  return (
    <View>
      <View style={Style.container}>
        <Text style={Style.userName}>Hi, Lutali</Text>
        <Text style={Style.welcomeMessage}>Find your perfect job</Text>
        <View style={Style.searchContainer}>
          <View style={Style.searchWrapper}>
            <TextInput
              style={Style.searchInput}
              placeholder="Search for jobs"
              value={search}
              onChangeText={(text) => {setSearch(text) }}
            />
          </View>
          <View style={Style.searchBtn}>
            <TouchableOpacity style={Style.searchBtn} onPress={() => {
              if (search) {
                handleClick
              }
             }}>
              <Image
                source={icons.search}
                style={Style.searchBtnImage}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={Style.tabsContainer}>
        <FlatList
          data={jobTypes}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={styles({ activeJobType, item }).tab}
                onPress={() => {
                  setActiveJobType(item)
                  router.push(`/search/${item}`)
                }}

              >
                <Text style={styles({ activeJobType, item }).tabText} >{item}</Text> 
              </TouchableOpacity>
            )
          }}
          horizontal
          contentContainerStyle={{columnGap: SIZES.small}}
        />
      </View>
    </View>
  )
}

export default Welcome