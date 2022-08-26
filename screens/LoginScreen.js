import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import Form from "../components/Form";
import Input from "../components/Input";
import SocialMediaReferences from "../components/SocialMediaReferences";

const LoginScreen = ({ navigation }) => {
  const [fromData, setFromData] = useState({});

  const handleForm = (data) => {
    setFromData({
      ...fromData,
      ...data,
    });
  };

  return (
    <SafeAreaView className="p-10 flex justify-between flex-1">
      <Text className="text-primary text-2xl font-bold text-center mt-5">
        Hungrezy
      </Text>

      <View className="">
        <View className="space-y-5">
          {/* form */}
          <Form title="Login">
            <Input
              label="E-mail"
              placeholder="Enter your E-mail"
              value={fromData?.email}
              callBack={(data) => handleForm({ email: data })}
              type="email"
            />

            <Input
              label="Password"
              placeholder="Enter your password"
              value={fromData?.password}
              callBack={(data) => handleForm({ password: data })}
              type="password"
            />

            <TouchableOpacity className="mb-7">
              <Text className="text-primary text-center">Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-primary p-4 rounded-full mx-10 drop-shadow-xl"
              onPress={() => navigation.navigate("RegistrationScreen")}
            >
              <Text className="text-center text-white tracking-widest">
                LOGIN
              </Text>
            </TouchableOpacity>
          </Form>
        </View>

        <View className="mb-10 mt-5 flex-1 flex-row items-center justify-center space-x-1">
          <Text className="">
            Don’t have an account?
          </Text>
          <TouchableOpacity>
            <Text className="text-primary text-center">Register</Text>
          </TouchableOpacity>
        </View>

        <SocialMediaReferences title="Sign up with" />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
