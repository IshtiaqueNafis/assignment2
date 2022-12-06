import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import About from "../../screens/About/About";

const Stack = createStackNavigator()

export const AboutStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="About" component={About}/>
        </Stack.Navigator>
    )
}
