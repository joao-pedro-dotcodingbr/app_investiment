import styled from "styled-components";
import {ScrollView , Text, View , TouchableOpacity} from 'react-native'
import {COLORS , FONTS , SIZES} from '../../constants/index';

export const Container = styled(ScrollView).attrs({showsVerticalScrollIndicator:false})`

    flex: 1;
    background-color: ${COLORS.black_light} ;
    padding-left: ${SIZES.padding02};
    padding-right: ${SIZES.padding02};
    padding-bottom: ${SIZES.height * 0.51}px;
   
`

export const ContainerTop = styled(View)`

    margin-top: ${SIZES.width * 0.05}px;

`

export const Title = styled(Text)`

    ${FONTS.h2}
    color: ${COLORS.gray_light};
    margin-top: ${SIZES.width * 0.07}px;

`

export const ContainerChartPatrimony = styled(View)`

    width: 100%;
    height: ${SIZES.height * 0.35};
    background-color: ${COLORS.black_dark};
    margin-top: ${SIZES.padding};
    border-radius: ${SIZES.padding}px;
    align-items: center;
    
`

export const  ContainerChartPatrimonyHeader = styled(View)`

    padding-left: 10%;
    padding-right: 10%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-top: ${SIZES.padding};

`

export const ButtonMaximize = styled(TouchableOpacity)``

export const ScrollPortfólio = styled(ScrollView).attrs({horizontal:true})`

margin-top:${SIZES.padding};

`

export const ContainerDividends = styled(View)`

    width: 100%;
    height: ${SIZES.height * 0.60};
    background-color: ${COLORS.black_dark};
    margin-top: ${SIZES.padding};
    margin-bottom: ${SIZES.height * 0.20};
    border-radius: ${SIZES.padding}px;
`