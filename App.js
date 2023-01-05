// import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"


import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";


export default function App() {

return (
  //  <View style={{
  //   flex: 1,
  //   justifyContent:"center",
  //   alignItems: "center",
  //  }}>
  // <View style={{
  //   backgroundColor:"blue",
   
  //   width:100,
  //   height:100,
  //   borderWidth:10,
  //   borderColor:"red",
  //   borderRadius:90,
  //   elevation: 30
     
    
  // }}>

   
  // </View>
  // <AppText>I love React Native</AppText>
  // <MaterialCommunityIcons name="email" size={60} color="dodgerblue"/>
  // </View>
  //<ViewImageScreen />
 // <WelcomeScreen />
//< Card />
//<View style={{backgroundColor:"#f8f4f4", padding: 20, paddingTop: 100}}>
//< Card 
  //title="Red jacket for sale" 
  //subTitle="$100"
  //image={require("./app/assets/red-jacket.jpeg")}/>
//</View>
<ListingDetailsScreen />

)

}


