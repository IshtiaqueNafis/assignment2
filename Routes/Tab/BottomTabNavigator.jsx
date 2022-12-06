import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {HomeStackNavigator} from "../Stacks/HomeStackNavigator";
import {AboutStackNavigator} from "../Stacks/AboutNavigator";
import {Icon} from "native-base";
import {AntDesign, MaterialCommunityIcons} from "@expo/vector-icons";
import {StyleSheet, Text} from "react-native";

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Tab.Screen name="Home Stack"
                        component={HomeStackNavigator}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <AntDesign name="home" size={24} color={focused ? '#551E18' : '#000'}/>
                            ),
                            tabBarLabel: () => <Text style={styles.tabBarLabel}>Home</Text>
                        }}

            />
            <Tab.Screen name="About Stack" component={AboutStackNavigator}

                        options={{
                            tabBarIcon: ({focused}) => (
                                <MaterialCommunityIcons name="account-details" size={24} color={focused ? '#551E18' : '#000'} />
                            ),
                            tabBarLabel: () => <Text style={styles.tabBarLabel}>About</Text>
                        }}

            />

        </Tab.Navigator>
    );
};
const styles = StyleSheet.create({
    tabBarLabel: {
        color: '#292929',
        fontSize: 12,
    },
})

export default BottomTabNavigator;
