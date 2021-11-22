import {Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window')

export const SIZES = {

    h1: width * 0.1,
    h2: width * 0.07,
    h3: width * 0.05,
    
    body01: width * 0.045,
    body02: width * 0.04,
    body03: width * 0.03,

    padding: width * 0.05,
    padding02: width * 0.08,
    padding03: width * 0.05,

    width,
    height

}

export const COLORS ={

    black_dark:'#262525',
    black_light:"#2A2A2A",

    gray_light:"#BBBBBB",
    gray_dark:"#8E8C8C",

    purple:"#5826BA",
    grey_light:"#1DD1A1",
    red_light:"#ff6b6b",

    actions:"#576574",
    funds:"#54A0FF",
    cdi_and_fixed:"#1BB28A"

}

export const FONTS = {

    h1: 
        `
            font-size: ${SIZES.h1}px;
            font-family: 'Dongle-Bold' ;
        
        `,
    h2: 
        `
            font-size: ${SIZES.h2}px;
            font-family: 'Dongle-Bold' ;
        
        `,
    h3: 
        `
            font-size: ${SIZES.h3}px;
            font-family: 'Dongle-Bold' ;
        
        `,
    body01:
        `
        font-size: ${SIZES.body01}px;
        font-family: 'Dongle-Light' ;

        `,

    body02:
        `
        font-size: ${SIZES.body02}px;
        font-family: 'Dongle-Light' ;

        `,

    body03:
        `
        font-size: ${SIZES.body03}px;
        font-family: 'Dongle-Light' ;

        `,

    body03Bold:
        `
        font-size: ${SIZES.body03}px;
        font-family: 'Dongle-Bold' ;

        `,

}

export const  SHANDOW = {

    max:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        
        elevation: 15,
    },
    mini:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }

}

export default {SIZES , COLORS , FONTS , SHANDOW}