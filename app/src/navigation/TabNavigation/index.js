import React from "react";
import {Animated , TouchableOpacity} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {COLORS, SIZES, Icons , SHANDOW} from '../../constants/index'

import ScreenHome from '../../screens/home'
import ScreenGoals from '../../screens/goals/home'
import ScreenRegistation from '../../screens/registration/home'
import ScreenChart from '../../screens/chart/home'
import ScreenWallet from '../../screens/wallet'

const Tab = createBottomTabNavigator()

const Index = () =>{

    const IconsTab = {

        Home:{
            Icon: Icons.home
        },
        Goals:{
            Icon : Icons.layers
        },
        Registation:{
            Icon: Icons.feather_plus
        },
        Chart:{
            Icon: Icons.chart_pie
        },
        Wallet:{
            Icon: Icons.wallet
        }

    }

    const renderButtonTab = (isFocused, name , navigation) =>{

      const {Icon} = IconsTab[name]
      return(

        <TouchableOpacity style={[ 

            isFocused ? {backgroundColor:COLORS.black_light, ...SHANDOW.max} : {backgroundColor:COLORS.black_dark} ,
            {
                width: SIZES.width * 0.13,
                height: SIZES.width * 0.13,
             
                borderRadius: 10,

                alignItems:"center",
                justifyContent:"center"
               
               
            }

            ]} onPress={() => navigation.navigate(name)}>

                
                <Icon width={(name == 'Registation')? SIZES.padding + (SIZES.width * 0.025) : SIZES.padding} height={(name == 'Registation')? SIZES.padding + (SIZES.width * 0.025): SIZES.padding} fill={ isFocused?COLORS.purple : COLORS.gray_light }/>

        </TouchableOpacity>
         
      )

    }

    return(
        <Tab.Navigator  screenOptions={({route, navigation}) =>({

            headerShown:false,
            headerShadowVisible:false,
            tabBarShowLabel:false,
            tabBarStyle:{

                backgroundColor: COLORS.black_dark,
                height: SIZES.height * 0.11,
                paddingHorizontal:SIZES.padding,
                borderTopLeftRadius: SIZES.padding,
                borderTopRightRadius: SIZES.padding,
                elevation:0,
                position: 'absolute'

            },
           
            tabBarIcon:({focused}) =>{

               return renderButtonTab(focused , route.name , navigation)

            }
            
        })}>

            <Tab.Screen name='Home' >
                {props =><ScreenHome {...props}/>}
             </Tab.Screen>
            <Tab.Screen name='Goals' component={ScreenGoals}/>
            <Tab.Screen name='Registation' component={ScreenRegistation}/>
            <Tab.Screen name='Chart' component={ScreenChart}/>
            <Tab.Screen name='Wallet' component={ScreenWallet} />

        </Tab.Navigator>
    )
}

export default Index