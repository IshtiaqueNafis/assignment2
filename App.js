import {StyleSheet} from 'react-native';
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import DrawerNavigator from "./Routes/drawer/DrawerNavigator";


export default function App() {
    const Drawer = createDrawerNavigator();


    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <DrawerNavigator/>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        overflow: 'hidden',
    },
})
