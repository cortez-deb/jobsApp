import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { SIZES } from '../../../constants'
import styles from './tabs.style'

const Tabs = ({ tabs, activeTab, setActiveTab }: { tabs: any, activeTab: any, setActiveTab: any }) => {

  const Styles = styles({ name: tabs, activeTab: activeTab })


  const TabButton = ({ name, _activeTab, onHandleSearchType }: { name: string, _activeTab: any, onHandleSearchType: any }) =>{
    return (
      <TouchableOpacity
      style={Styles.btn}
      onPress={onHandleSearchType}
      >
        <Text style={styles({name,activeTab:_activeTab}).btnText}>{name}</Text>
      </TouchableOpacity>
    )
  }


  return (
    <View style={Styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            _activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )
        }
        horizontal
        showsVerticalScrollIndicator={false}
        keyExtractor={item=>item}
        contentContainerStyle={{columnGap:SIZES.small}}
      />
    </View>
  )
}

export default Tabs