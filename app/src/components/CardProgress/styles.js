import styled from "styled-components";
import {ScrollView , Text, View , TouchableOpacity} from 'react-native'
import {COLORS , FONTS , SIZES} from '../../constants/index';


export const Container = styled(View)`

    width: ${SIZES.width * 0.40}px;
    height: ${SIZES.height * 0.24}px;
    background-color: ${props => props.back};
    margin-right: ${SIZES.body01}px;
    align-items: center;
    
`
export const Header = styled(View)`
   
    align-items: center;
    width: 100%;
    margin-top: ${SIZES.body03};
   
   

`
export const Title = styled(Text)`

    ${FONTS.h3}
    color: ${COLORS.gray_light};
    text-align: center;
   
`
export const ContainerProgress = styled(View)`

    margin-top: ${SIZES.h3};

`

export const ContainerIcon = styled(View)`

    position: absolute;
    left: 14%;

`

export const ContainerValue = styled(View)`

    margin-top: ${SIZES.body03};

`