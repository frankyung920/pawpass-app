import { LoginSignUpMessage } from "@/assets/data/message";
import LoginWithSocial from "@/components/LoginWithSocial";
import MessageModal from "@/components/modals/MessageModal";
import Separator from "@/components/Separator";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
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

const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const goToLogin = () => {
    router.push("/login");
  };
  const signUp = () => {
    // TODO: Sign Up
    setShowModal(true);
  };
  return (
    <SafeAreaView style={[defaultStyles.container, styles.container]}>
      <View style={styles.top}>
        <View style={styles.logo}>
          <Image source={require("@/assets/images/logo.png")}></Image>
        </View>
        <TextInput
          style={[defaultStyles.inputField, styles.inputField]}
          onChangeText={setName}
          value={name}
          placeholder="Full name"
        ></TextInput>
        <TextInput
          style={[defaultStyles.inputField, styles.inputField]}
          onChangeText={setEmail}
          value={email}
          placeholder="Email address"
          keyboardType="email-address"
          autoCapitalize="none"
        ></TextInput>
        <View
          style={[
            defaultStyles.inputField,
            styles.inputContainer,
            styles.inputField,
          ]}
        >
          <TextInput
            style={[styles.input]}
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
        <View
          style={[
            defaultStyles.inputField,
            styles.inputContainer,
            styles.inputField,
          ]}
        >
          <TextInput
            style={[styles.input]}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            placeholder="Confirm Password"
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
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          style={[defaultStyles.primaryBtn]}
          onPress={() => {
            signUp();
          }}
        >
          <Text style={defaultStyles.primaryBtnText}>Sign up</Text>
        </TouchableOpacity>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpQuestion}>
            Already have a Pawpass account?{" "}
          </Text>
          <Text
            style={styles.signUp}
            onPress={() => {
              goToLogin();
            }}
          >
            Sign in
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
        title={LoginSignUpMessage.signUpSuccess.title}
        text={LoginSignUpMessage.signUpSuccess.text}
        onPressClose={() => {
          setShowModal(false);
          router.push("/addAPhoto");
        }}
      ></MessageModal>
    </SafeAreaView>
  );
};

export default SignUp;

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
  inputField: {
    height: 48,
  },
  forgotPassword: {
    width: "40%",
    fontFamily: "inter-sb",
    color: Colors.primary,
    textDecorationLine: "underline",
    fontSize: 14,
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
    marginBottom: 20,
  },
});
