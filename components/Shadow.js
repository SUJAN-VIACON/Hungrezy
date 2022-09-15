import { View, Text } from "react-native";
import React from "react";

const Shadow = ({ color="#5c5959", children, props }) => {
  return (
    <View
      {...props}
      style={{
        shadowColor: {color},
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
      }}
    >
      {children}
    </View>
  );
};

export default Shadow;
