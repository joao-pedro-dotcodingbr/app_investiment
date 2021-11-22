import styled from "styled-components";
import {ScrollView , Text} from 'react-native'
import {COLORS , FONTS , SIZES} from '../../constants/index';

export const Container = styled(ScrollView)`

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

