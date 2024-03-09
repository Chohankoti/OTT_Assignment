import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    Image,
    Pressable,
    ActivityIndicator,
    TouchableOpacity,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { Input } from "react-native-elements";
  import { useNavigation } from "@react-navigation/native";

export default function Register() {
    const [input, setInput] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const handleRegisterPress = () => {
        navigation.navigate('Login');
    };

    return (
        <SafeAreaView
        style={{
            flex: 1,
            alignItems: "center",
            justifyContent:"center"
          }}
        className="bg-neutral-800"
      >
        <KeyboardAvoidingView>
          {loading ? (
            <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"black"}}>
              <Text style={{textAlign:"center",color:"white",fontSize:15,fontWeight:"500"}}>Loading</Text>
              <ActivityIndicator size="large" color={"red"}/>
            </View>
          ) : (
            <>
            <View style={{ alignItems: "center", justifyContent: "space-between" }}>
            <Image
              style={{ height: 50, width: 120, marginTop: 20 }}
              source={require('../../assets/logo.png')}
            />
          </View>
  
          <View style={{ width: 320, marginTop: 45 }}>
            <Input
              value={input}
              onChangeText={(text) => setInput(text)}
              type="email"
              inputContainerStyle={{ borderBottomWidth: 0 }}
              placeholder="Email"
              placeholderTextColor={"white"}
              style={{
                width: 330,
                padding: 15,
                borderRadius: 5,
                color: "white",
                backgroundColor: "gray",
              }}
            />
  
            <Input
              value={password}
              onChangeText={(text) => setPassword(text)}
              type="password"
              secureTextEntry={true}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              placeholder="Password"
              placeholderTextColor={"white"}
              style={{
                width: 330,
                padding: 15,
                borderRadius: 5,
                color: "white",
                backgroundColor: "gray",
              }}
            />
          </View>
  
          <TouchableOpacity onPress={handleRegisterPress}
            style={
              password.length > 4
                ? {
                    width: 300,
                    backgroundColor: "red",
                    marginLeft: "auto",
                    marginRight: "auto",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 14,
                  }
                : {
                    width: 300,
                    marginLeft: "auto",
                    marginRight: "auto",
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: "white",
                    borderWidth: 2,
                    padding: 14,
                  }
            }
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 19,
                fontWeight: "700",
                color: "white",
              }}
            >
              Sign Up
            </Text>
            </TouchableOpacity>
  
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 19,
                fontWeight: "600",
                marginTop: 15,
              }}
            >
              Already have Inkle? Sign In
            </Text>
          </Pressable>
            </>
          )}
          
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
}