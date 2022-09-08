import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import { EyeIcon, EyeSlashIcon } from "react-native-heroicons/outline";
import { Formik } from "formik";
import * as yup from "yup";

const registrationValidationSchema = yup.object().shape({
  // name: yup.string().required("Name is required"),
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

const Input = ({ label, placeholder, value, callBack, type, props }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const textInputStyle = `p-3  border rounded-lg ${
    isFocus ? "border border-primary" : "border-[#9796A1]"
  }`;

  const primaryColor = "#E60023";
  const passwordEyeColor = isFocus ? primaryColor : "#9796A1";

  return (
    <View>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(values) => console.log(values)}
        validateOnMount={true}
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
          <View className="space-y-3 mb-7">
            <Text className="text-[#9796A1]">{label}</Text>

            {(() => {
              switch (type) {
                case "email":
                  return (
                    <View>
                      <TextInput
                        placeholder={placeholder}
                        value={value}
                        onChangeText={(input) => callBack(input)}
                        className={textInputStyle}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => {
                          handleBlur("email");
                          setIsFocus(false);
                        }}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        selectionColor={primaryColor}
                        {...props}
                      />
                      {errors.email && touched.email && (
                        <Text className="text-primary text-xs">
                          {errors.email}
                        </Text>
                      )}
                    </View>
                  );
                case "password":
                  return (
                    <View>
                      <View className="relative">
                        <TextInput
                          placeholder={placeholder}
                          value={value}
                          onChangeText={(input) => callBack(input)}
                          className={textInputStyle}
                          onFocus={() => setIsFocus(true)}
                          onBlur={() => {
                            setIsFocus(false);
                            handleBlur("password");
                          }}
                          autoCapitalize="none"
                          secureTextEntry={showPassword}
                          selectionColor={primaryColor}
                          {...props}
                        />
                        <TouchableOpacity
                          className="absolute h-full flex justify-center right-0 px-5"
                          onPress={() => setShowPassword((state) => !state)}
                        >
                          {showPassword ? (
                            <EyeIcon size={20} color={passwordEyeColor} />
                          ) : (
                            <EyeSlashIcon size={20} color={passwordEyeColor} />
                          )}
                        </TouchableOpacity>
                      </View>

                      {errors.password && touched.password && (
                        <Text className="text-primary text-xs">
                          {errors.password}
                        </Text>
                      )}
                    </View>
                  );
                case "number":
                  return (
                    <TextInput
                      placeholder={placeholder}
                      value={value}
                      onChangeText={(input) => callBack(input)}
                      className={textInputStyle}
                      onFocus={() => setIsFocus(true)}
                      onBlur={() => setIsFocus(false)}
                      autoCapitalize="none"
                      keyboardType="number-pad"
                      selectionColor={primaryColor}
                      {...props}
                    />
                  );
                default:
                  return (
                    <TextInput
                      placeholder={placeholder}
                      value={value}
                      onChangeText={(input) => callBack(input)}
                      className={textInputStyle}
                      onFocus={() => setIsFocus(true)}
                      onBlur={() => setIsFocus(false)}
                      autoCapitalize="none"
                      selectionColor={primaryColor}
                      {...props}
                    />
                  );
              }
            })()}
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Input;
