import React from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";

const Form = ({ title, children }) => {
  return (
    <View>
      <Text className="text-4xl font-semibold mb-7">{title}</Text>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset="25">
        {children}
      </KeyboardAvoidingView>
    </View>
  );
};

export default Form;
