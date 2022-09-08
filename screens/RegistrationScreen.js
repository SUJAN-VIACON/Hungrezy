import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import Form from "../components/Form";
import Input from "../components/Input";
import SocialMediaReferences from "../components/SocialMediaReferences";
import { authentication } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { AuthenticationService } from "../services/AuthenticatoinService";




const RegistrationScreen = ({ navigation }) => {
  const [fromData, setFromData] = useState({});

  const handleForm = (data) => {
    setFromData({
      ...fromData,
      ...data,
    });
  };

  const handleRegistration = async () => {
    if (!fromData.email || !fromData.password) return;
    const { user, error } = await new AuthenticationService().register(
      fromData
    );
    navigation.navigate("LoginScreen");
  };

  return (
    <SafeAreaView className="p-10 flex justify-between flex-1">
      <Text className="text-primary text-2xl font-bold text-center mt-5">
        Hungrezy
      </Text>

      <View className="">
        <View className="space-y-5">
          
              <Form
                title="Register"
               
              >
                <Input
                  label="Full Name"
                  placeholder="Enter your name"
                  value={fromData?.name}
                  callBack={(data) => handleForm({ name: data })}
                />

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

                <TouchableOpacity
                  className="bg-primary p-4 rounded-full mx-10 drop-shadow-xl"
                  onPress={() => handleRegistration()}
                >
                  <Text className="text-center text-white tracking-widest">
                    REGISTER
                  </Text>
                </TouchableOpacity>
              </Form>
           
        </View>

        <View className="mb-10 mt-5 flex-1 flex-row items-center justify-center space-x-1">
          <Text className="">Already have an account?</Text>
          <TouchableOpacity>
            <Text className="text-primary text-center">Login</Text>
          </TouchableOpacity>
        </View>

        <SocialMediaReferences title="Sign up with" />
      </View>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
