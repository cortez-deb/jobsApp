import React from 'react'
import { View, Text,TouchableOpacity, FlatList,ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import { useFetch } from '../../../hook/useFetch' 

const Popularjobs = () => {
const router = useRouter()
const { data, loading, error } = useFetch('search', {query: 'popular', num_pages: 1,})
const isloading = loading
return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity onPress={() => router.push('/popularjobs')}>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      {
        isloading? 
        (<ActivityIndicator size="large" color={COLORS.primary} />):
        error? (<Text>Something went wrong</Text>):(
          <FlatList
            data ={data}
            keyExtractor={(item) => item.toString()}
            horizontal
            contentContainerStyle={{paddingVertical: SIZES.medium}}
            renderItem={({ item }) => {
              return (
                <PopularJobCard 
                item={item}
                selectedJob={item?.job_id}
                handleCardPress={() => {}}
                />
              )
            }}
          />
        )    
      }
    </View>
  )
}

export default Popularjobs