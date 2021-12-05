import React from 'react'
import { View, Text } from 'react-native'
import {COLORS , SIZES} from '../../constants/index'
import Svg from 'react-native-svg'
import {VictoryPie , VictoryAnimation , VictoryLabel} from 'victory-native'


export default function index({data , width, height , colorPercent , innerRadius, percentValue}) {

    return (
        <View style={{
            width: width,
            height: height,
           
        }}>

           <Svg viewBox={`0 0 ${width} ${height}`} width={'100%'} height={'100%'} >

               <VictoryPie 

                padding={0}
                animate={{duration:4000,  easing: 'exp'}}
                width={width}
                height={height}
                standalone={false}
                innerRadius={innerRadius}
                cornerRadius={width /2}
                data={data}
                labels={() => null}
                style={{

                   parent:{
                      
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 11,
                    },
                    shadowOpacity: 0.57,
                    shadowRadius: 15.19,
                    
                    elevation: 23,


                   },
                    data:{

                        fill: ({datum}) =>{
                           
                            return datum.x == 1 ? colorPercent : "transparent"
                        },
                       
                        stroke: ({datum}) =>{
                            return datum.x ==1? COLORS.gray_light : 'transparent'
                        },
                        strokeWidth:({datum}) =>{
                            return datum.x ==1? 0.5 : 0
                        },
                    
                    }
                }} />

                    <VictoryAnimation duration={2000} data={data}>

                        {(newsProps)=>{
                          
                            return(
                                <VictoryLabel 
                                 
                                textAnchor="middle" verticalAnchor="middle"
                                x={width /2} y={width /2.3}
                                text={ `${percentValue}%` }
                                style={{ fontSize: SIZES.h2 , fill:COLORS.gray_light , fontFamily:'Dongle-Bold'}}
                                
                                />
                            )

                        }}

                    </VictoryAnimation>

               

           </Svg>

        </View>
    )
}
