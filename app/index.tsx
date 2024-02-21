import { StyleSheet, Text, View, ScrollView,SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import {COLORS,icons,images,SIZES} from "../constants/"
import { Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome, } from "../components"

export default function Page() {
  const router = useRouter();


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle:{backgroundColor:COLORS.lightWhite},
          headerShadowVisible:false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimensions="60%"
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={images.profile}
              dimensions="100%"
            />
          ),
          headerTitle: ""
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: SIZES.medium,
          }}
        >
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  ); 
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     padding: 24,
//   },
//   main: {
//     flex: 1,
//     justifyContent: "center",
//     maxWidth: 960,
//     marginHorizontal: "auto",
//   },
//   title: {
//     fontSize: 64,
//     fontWeight: "bold",
//   },
//   subtitle: {
//     fontSize: 36,
//     color: "#38434D",
//   },
// });
