import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import { EyeIcon, EyeSlashIcon } from "react-native-heroicons/outline";


const Input = ({ label, placeholder, value, type, handleChange,errors=null, props }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const textInputStyle = `p-3  border rounded-lg ${isFocus ? "border border-primary" : "border-[#9796A1]"
    }`;

  const primaryColor = "#E60023";
  const passwordEyeColor = isFocus ? primaryColor : "#9796A1";

  return (
    <View>

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
                    onChangeText={handleChange}
                    className={textInputStyle}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    selectionColor={primaryColor}
                    {...props}
                  />
                  {errors && (
                    <Text className="text-primary text-xs">
                      {errors}
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
                      onChangeText={handleChange}
                      className={textInputStyle}
                      onFocus={() => setIsFocus(true)}
                      onBlur={() => setIsFocus(false)}
                      value={value}
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
                        <EyeSlashIcon size={20} color={passwordEyeColor} />

                      ) : (
                        <EyeIcon size={20} color={passwordEyeColor} />
                      )}
                    </TouchableOpacity>
                  </View>
                  {errors && (
                    <Text className="text-primary text-xs">
                      {errors}
                    </Text>
                  )}
                </View>
              );
            case "number":
              return (
                <TextInput
                  placeholder={placeholder}
                  value={value}
                  onChangeText={handleChange}
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
                <View>
                  <TextInput
                    placeholder={placeholder}
                    value={value}
                    onChangeText={handleChange}
                    className={textInputStyle}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    autoCapitalize="none"
                    selectionColor={primaryColor}
                    {...props}
                  />
                  {errors && (
                    <Text className="text-primary text-xs">
                      {errors}
                    </Text>
                  )}
                </View>
              );
          }
        })()}
      </View>

    </View>
  );
};

export default Input;
