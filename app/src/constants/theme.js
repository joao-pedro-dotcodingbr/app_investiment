import {Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window')

export const SIZES = {

    h1: width * 0.1,
    h2: width * 0.07,
    h3: width * 0.05,
    body01: width * 0.045,
    body02: width * 0.04,
    body03: width * 0.03,

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
    h1:{fontSize:SIZES.h1, fontFamily:'Dongle-Bold'},
    h2:{fontSize:SIZES.h2, fontFamily:'Dongle-Bold'},
    h3:{fontSize:SIZES.h3, fontFamily:'Dongle-Bold'},
    body01:{fontSize:SIZES.body01, fontFamily:'Dongle-Light'},
    body02:{fontSize:SIZES.body02, fontFamily:'Dongle-Light'},
    body03:{fontSize:SIZES.body03, fontFamily:'Dongle-Light'},
    body03Bold: {fontSize:SIZES.body03, fontFamily:'Dongle-Bold'},
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