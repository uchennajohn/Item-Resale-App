import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";


import AppText from "../components/AppText/AppText";
import AppButtons from "../components/AppButtons";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
       <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>sell what you dont need</Text>
        <AppText style={styles.textt}>React Native App designed By Uchenna John</AppText>
      </View>
      <View style={styles.buttonContainer}>
      <AppButtons title="Login" onPress={()=>{console.log("login")}}/>
      <AppButtons title="Register" color="secondary" onPress={()=>{console.log("register")}}/>

      </View>


    </ImageBackground>

  );
}



export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer:{
      padding:20,
      width:"100%"
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  textt:{
   color: "blue"
  },
  tagline:{
   fontSize:20,
   fontWeight:'300',
   paddingVertical: 20
  }
});
