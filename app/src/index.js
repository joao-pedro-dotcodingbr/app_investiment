import React from "react";
import {StatusBar} from 'react-native'
import Navigations from './navigation/index'
const Index = () =>{
    return(
        <>

            <StatusBar 
            backgroundColor="transparent"
            translucent={true}
            />

            <Navigations/>

        </>
    )
}

export default Index