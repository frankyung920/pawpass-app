import { LoginSignUpMessage } from "@/assets/data/message";
import LoginWithSocial from "@/components/LoginWithSocial";
import Separator from "@/components/Separator";
import MessageModal from "@/components/modals/MessageModal";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { routerPush } from "@/router";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const login = () => {
    // TODO: Login
    setShowModal(true);
  };
  const goToLogin = () => {
    routerPush("/login");
  };

  const goToSignUp = () => {
    routerPush("/signUp");
  };
  return (
    <SafeAreaView style={[defaultStyles.container, styles.container]}>
      <View style={styles.top}>
        <View style={styles.logo}>
          <Image source={require("@/assets/images/logo.png")}></Image>
        </View>
        <TextInput
          style={defaultStyles.inputField}
          onChangeText={setEmail}
          value={email}
          placeholder="Email address"
          keyboardType="email-address"
          autoCapitalize="none"
        ></TextInput>
        <View style={[defaultStyles.inputField, styles.inputContainer]}>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            {isPasswordVisible ? (
              <Ionicons name="eye-off" size={18} color="black" />
            ) : (
              <Ionicons name="eye" size={18} color="black" />
            )}
          </TouchableOpacity>
        </View>
        <Text
          style={styles.forgotPassword}
          onPress={() => {
            routerPush("/forgotPassword");
          }}
        >
          Forgot password?
        </Text>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          style={[defaultStyles.primaryBtn]}
          onPress={() => {
            login();
          }}
        >
          <Text style={defaultStyles.primaryBtnText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpQuestion}>
            Don’t have a Pawpass account?{" "}
          </Text>
          <Text
            style={styles.signUp}
            onPress={() => {
              goToSignUp();
            }}
          >
            Sign up
          </Text>
        </View>

        <Separator text="or login with"></Separator>
        <LoginWithSocial
          login={() => {
            goToLogin();
          }}
        ></LoginWithSocial>
      </View>

      <MessageModal
        isModalVisible={showModal}
        title={LoginSignUpMessage.loginSuccess.title}
        text={LoginSignUpMessage.loginSuccess.text}
        onPressClose={() => {
          setShowModal(false);
          routerPush("/(tabs)/home");
        }}
      ></MessageModal>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  logo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 32,
  },
  forgotPassword: {
    width: "40%",
    fontFamily: "inter-sb",
    color: Colors.primary,
    textDecorationLine: "underline",
    fontSize: 14,
  },
  signUpContainer: {
    flexDirection: "row",
  },
  signUpQuestion: {
    fontFamily: "inter-reg",
    color: Colors.text.secondary,
    fontSize: 14,
  },
  signUp: {
    fontFamily: "inter-sb",
    color: Colors.primary,
    textDecorationLine: "underline",
    fontSize: 14,
  },
  top: {
    gap: 16,
  },
  bottom: {
    gap: 16,
    paddingBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 40,
    marginRight: 10,
    fontSize: 16,
  },
});
