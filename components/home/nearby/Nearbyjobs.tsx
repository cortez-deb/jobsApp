import React from 'react'
import { View, Text,TouchableOpacity, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import { COLORS, SIZES } from '../../../constants'
import { useFetch } from '../../../hook/useFetch' 
import  NearbyJobCard  from '../../../components/common/cards/nearby/NearbyJobCard'
import styles from './nearbyjobs.style'

const Nearbyjobs = () => {
  const router = useRouter()
const { data, loading, error } = useFetch('search', {query: 'popular', num_pages: 1,})
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Near By Jobs</Text>
        <TouchableOpacity onPress={() => router.push('/popularjobs')}>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      {
        loading? 
        (<ActivityIndicator size="large" color={COLORS.primary} />):
        error? (<Text>Something went wrong</Text>):(
          data.map((item:any) => {
            return (
              <NearbyJobCard 
              job={item}
              key={`nearbyjob-${item?.job_id}`}
              handleNavigate={() => {
                router.push(`/job-details/${item?.job_id}`)
              }}
              />
            )
          }
        )  )  
      }
    </View>
  )
}

export default Nearbyjobs