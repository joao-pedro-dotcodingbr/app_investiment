import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import ScreensHome from './TabNavigation/index'
const Stack = createNativeStackNavigator()

const Index = () =>{
    return(
        <NavigationContainer >

            <Stack.Navigator screenOptions={{headerShown:false}} >

                <Stack.Screen name='HomeTab' component={ScreensHome} />

            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default Index