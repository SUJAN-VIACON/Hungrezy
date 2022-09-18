import React, { useState } from "react";

import * as yup from "yup";
import { Formik } from "formik";
import Form from "../components/Form";
import Input from "../components/Input";
import FormSubmitButton from "../components/FormSubmitButton";
import SocialMediaReferences from "../components/SocialMediaReferences";
import { AuthenticationService } from "../services/AuthenticatoinService";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";


const registrationValidationSchema = yup.object().shape({

  email: yup
    .string()
    .email("please enter valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, ({ min }) => `password must be at least ${min} characters`)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

const LoginScreen = ({ navigation }) => {

  const [errorMessage, setErrorMessage] = useState();

  const handleLogin = async (formData) => {
    if (!formData.email || !formData.password) return;
    const { user, error } = await new AuthenticationService().login(formData);
    if (error) setErrorMessage(error);
    if (user) navigation.navigate("HomeScreen");
  };

  return (
    <SafeAreaView className="p-10 flex justify-between flex-1">
      <Text className="text-primary text-2xl font-bold text-center mt-5">
        Hungrezy
      </Text>

      <View className="">
        <View className="space-y-5">
          <Formik
            initialValues={{ email: "" }}
            onSubmit={(values) => handleLogin(values)}
            validationSchema={registrationValidationSchema}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              touched,
              errors,
              isValid,
            }) => (
              <Form title="Login">
                <Input
                  label="E-mail"
                  placeholder="Enter your E-mail"
                  value={values.email}
                  handleChange={handleChange("email")}
                  type="email"
                  errors={errors.email}
                />

                <Input
                  label="Password"
                  placeholder="Enter your password"
                  value={values.password}
                  handleChange={handleChange("password")}
                  type="password"
                  errors={errors.password}
                />


                <TouchableOpacity className="mb-7">
                  <Text className="text-primary text-center underline">Forgot password?</Text>
                </TouchableOpacity>

                <FormSubmitButton title="LOGIN" onPress={handleSubmit} />

              </Form>
            )}
          </Formik>
        </View>

        {errorMessage && (
          <Text className=" text-primary text-center font-xs mt-2">
            {errorMessage}
          </Text>
        )}

        <View className="mb-10 mt-5 flex-1 flex-row items-center justify-center space-x-1">
          <Text className="">Don’t have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
            <Text className="text-primary text-center underline">Register</Text>
          </TouchableOpacity>
        </View>

        <SocialMediaReferences title="Sign up with" />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
