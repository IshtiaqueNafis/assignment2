import React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import BottomTabNavigator from "../Tab/BottomTabNavigator";
import About from "../../screens/About/About";
import {AntDesign, MaterialCommunityIcons} from "@expo/vector-icons";

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name={"Home Tabs"} component={BottomTabNavigator} options={
                {
                    title: "Home",
                    drawerLabel: 'Home',
                    drawerIcon: ({focused}) => (
                        <AntDesign name="home" size={24} color={focused ? '#551E18' : '#000'}/>
                    ),
                }
            }
            />
            <Drawer.Screen name={"About Stack"} component={About}
                           options={
                               {
                                   title: "About",
                                   drawerLabel: 'About',
                                   drawerIcon: ({focused}) => (
                                       <MaterialCommunityIcons name="account-details" size={24} color={focused ? '#551E18' : '#000'} />
                                   ),


                               }
                           }

            />

        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
