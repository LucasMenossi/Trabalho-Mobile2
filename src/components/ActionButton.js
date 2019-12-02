import React from 'react'
import { View, Text, Button } from "react-native"

const ActionButton = ({title, onNavigate}) => {
    return (
        <View>
            <Button 
                title = {title}
                onPress = {onNavigate}
            />
        </View>
    )
}

export default ActionButton