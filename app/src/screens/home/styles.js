import styled from "styled-components";
import {ScrollView , Text, View , TouchableOpacity} from 'react-native'
import {COLORS , FONTS , SIZES} from '../../constants/index';

export const Container = styled(ScrollView).attrs({showsVerticalScrollIndicator:false})`

    flex: 1;
    background-color: ${COLORS.black_light} ;
    padding-left: ${SIZES.padding02};
    padding-right: ${SIZES.padding02};

`
export const Title = styled(Text)`

    ${FONTS.h2}
    color: ${COLORS.gray_light};
    margin-top: ${SIZES.width * 0.10}px;

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