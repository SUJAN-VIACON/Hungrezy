import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Shadow from "./Shadow";


const FormSubmitButton = ({title,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Shadow color="#E60023" className="bg-primary p-4 rounded-full mx-10 drop-shadow-xl">
                <Text className="text-center text-white tracking-widest">
                   {title}
                </Text>
            </Shadow>
        </TouchableOpacity>
    )
}

export default FormSubmitButton