
import {Text , View} from 'react-native'
import {SIZES , COLORS , FONTS} from '../../constants/index'
import styled from "styled-components";

export const Container = styled(View)`

    width: 100%;
    margin-top: ${SIZES.padding};
    height: ${SIZES.height * 0.13}px;
    background-color: ${COLORS.black_dark};
    border-radius: ${SIZES.padding}px;
    box-shadow: 0 0 100px gold;

    
`
//#region DATE

export const ContainerLabelsDate = styled(View) `

    flex-direction: row;
    align-items: center;
    position: absolute;
    left: 7%;
    top: 10%;
`
export const Label = styled(Text) `

    ${FONTS.body03}
    color: ${COLORS.gray_dark};
    margin-right: 10px;

`
export const LabelDate = styled(Text) `

    ${FONTS.body03Bold}
    color: ${COLORS.gray_light};
    margin-right: 10px;

`
//#endregion

//#region Patrimony

export const ContainerPatrimony = styled(View)`

    flex:1;
    flex-direction: row;
    align-items: center;
    justify-content: center;

`

export const TitlePatrimony = styled(Text) `

    ${FONTS.h1}
    color: ${COLORS.gray_light};

`

export const ContainerSituation = styled(View)`

    width: ${SIZES.width * 0.1}px;
    height: ${SIZES.width * 0.043}px;
    margin-left: ${SIZES.width * 0.02}px;
    margin-bottom: ${SIZES.width * 0.01}px;
`
export const ContainerSituationPatrimony = styled(View)`

    flex: 1;
  
    background-color: ${COLORS.grey_light};
    border-radius: ${SIZES.width * 0.008}px;
    opacity: 0.5;

`

export const LabelSituation = styled(Text) `
    position: absolute;
    left: 31%;
    top: 6%;
    ${FONTS.body03Bold}
    color: ${COLORS.grey_light};
  

`
//#endregion