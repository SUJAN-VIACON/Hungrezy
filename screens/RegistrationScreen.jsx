import React, { useState } from "react";
import Form from "../components/Form";
import Input from "../components/Input";
import { Formik } from "formik";
import * as yup from "yup";
import SocialMediaReferences from "../components/SocialMediaReferences";
import { AuthenticationService } from "../services/AuthenticatoinService";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import FormSubmitButton from "../components/FormSubmitButton";


const registrationValidationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
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

const RegistrationScreen = ({ navigation }) => {

  const handleRegistration = async (fromData) => {
    if (!fromData.email || !fromData.password) return;
    const { user, error } = await new AuthenticationService().register(fromData);
    if (!error) {
      navigation.navigate("LoginScreen");
    }
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
            onSubmit={(values) => handleRegistration(values)}
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
              <Form title="Register">
                <Input
                  label="Full Name"
                  placeholder="Enter your name"
                  value={values.name}
                  handleChange={handleChange("name")}
                  errors={errors?.name}
                />

                <Input
                  label="E-mail"
                  placeholder="Enter your E-mail"
                  value={values.email}
                  handleChange={handleChange("email")}
                  type="email"
                  errors={errors?.email}
                />

                <Input
                  label="Password"
                  placeholder="Enter your password"
                  value={values.password}
                  handleChange={handleChange("password")}
                  type="password"
                  errors={errors?.password}
                />
                <FormSubmitButton onPress={handleSubmit} />
              </Form>

            )}
          </Formik>
        </View>

        <View className="mb-10 mt-5 flex-1 flex-row items-center justify-center space-x-1">
          <Text className="">Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text className="text-primary text-center py-3">Login</Text>
          </TouchableOpacity>
        </View>

        <SocialMediaReferences title="Sign up with" />
      </View>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
