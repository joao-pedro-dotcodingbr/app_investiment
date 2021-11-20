import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import ScreenHome from '../../screens/home'
import ScreenGoals from '../../screens/goals/home'
import ScreenRegistation from '../../screens/registration/home'
import ScreenChart from '../../screens/chart/home'

const Tab = createBottomTabNavigator()

const Index = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name='Home' component={ScreenHome}/>
            <Tab.Screen name='Goals' component={ScreenGoals}/>
            <Tab.Screen name='Registation' component={ScreenRegistation}/>
            <Tab.Screen name='Chart' component={ScreenChart}/>
        </Tab.Navigator>
    )
}

export default Index