import { routerPush } from "@/router";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface Props {
  login: any;
}
WebBrowser.maybeCompleteAuthSession();

// const isExpoGo =
//   Constants.executionEnvironment === ExecutionEnvironment.StoreClient;
// console.log(isExpoGo);

const LoginWithSocial = ({ login }: Props) => {
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "503525902749-98kddnkdsqfnvbch7qm0j2m14lu7g2vf.apps.googleusercontent.com",
    iosClientId:
      "503525902749-hg51no7v809238c9gdsittmpa0evl2j8.apps.googleusercontent.com",
    expoClientId:
      "503525902749-f0mctlk0cpmhm66c4buisufs94vtmus2.apps.googleusercontent.com",
  });

  useEffect(() => {
    const res = response as IGoogleLogin;
    if (res) {
      console.log("res");
      routerPush("/(tabs)/home");
    }
  }, [response]);

  return (
    <View style={styles.loginWithSocial}>
      <TouchableOpacity
        style={styles.loginWithSocialBtn}
        onPress={() => login()}
      >
        <AntDesign name="mail" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginWithSocialBtn}
        onPress={() => promptAsync()}
      >
        <MaterialCommunityIcons name="google" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginWithSocialBtn}>
        <Feather name="facebook" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginWithSocialBtn}>
        <AntDesign name="apple-o" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default LoginWithSocial;

const styles = StyleSheet.create({
  loginWithSocial: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  loginWithSocialBtn: {
    margin: 10,
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#000000",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
