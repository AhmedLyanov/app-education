import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import Colors from "../../Shared/Colors";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function Login() {
  return (
    <View>
      <Image
        style={{ width: width * 1.0, height: 200 }}
        source={require("../Assets/Images/Login.png")}
      />
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to CodeBox</Text>
        <Text style={{textAlign: "center", marginTop:80, fontSize: 20, }}>Login/Signup</Text>
        <View style={styles.button}>
            <Ionicons name="logo-google" size={24} color="white"></Ionicons>
            <Text style={{color: Colors.white}}>Sign in with Google</Text>
        </View>
      </View>
    </View>
  );
}

