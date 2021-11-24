import React from 'react'
import { TouchableOpacity , TouchableHighlight} from 'react-native'
import {SHANDOW , SIZES , COLORS} from '../../constants/index'
import {Title} from './styles'

export default function index({isfocused , name , funcButton}) {
    return (
        <TouchableHighlight style={[ 
            isfocused?{backgroundColor:COLORS.purple} :{backgroundColor: COLORS.black_light},
            { 

                paddingHorizontal: SIZES.width * 0.05,
                paddingVertical: SIZES.height * 0.005,
                borderRadius:  SIZES.height * 0.03,
                alignItems:'center',
                justifyContent:'center',
                marginRight: SIZES.width * 0.018,
                ...SHANDOW.mini
                

            }
            
            
            ]} onPress={funcButton}>
                
            <Title >{name}</Title>
        </TouchableHighlight>
    )
}
