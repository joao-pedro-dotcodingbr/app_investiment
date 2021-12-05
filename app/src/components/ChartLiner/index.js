import React, {useState} from 'react'
import { View, Text, ColorPropType } from 'react-native'

import Svg,{G} from 'react-native-svg'
import { 
  VictoryLine , 
  VictoryChart , 
  VictoryTheme , 
  VictoryArea , 
  VictoryAxis, 
  VictoryContainer , 
  VictoryTooltip , 
  VictoryVoronoiContainer,
  VictoryClipContainer,
  VictoryPortal,
  VictoryScatter,
  victoryto,
  
  
} from 'victory-native'

import {COLORS , SIZES} from '../../constants/index'


const ComponentCustonTooltip = (props) =>{
  console.log(props)
  return(
       <VictoryTooltip 
        {...props}
          pointerLength={0}

          flyoutStyle={{
            fill: COLORS.purple,
            fillOpacity:0.8,
          
          }}

          style={{
          
            opacity: 1,
            fill: COLORS.gray_light,
            fontFamily:'Dongle-Regular',
            fontSize: SIZES.body01
            
          }}
          renderInPortal={false} 
          flyoutHeight={SIZES.h2}
                      
              />
  )
}

export default function index({data, width , height}) {

const [teste , setTeste] = useState(false)

    return (
        <View style={{ width: width,
          height: height }}>

          <Svg viewBox={`0 0 ${width} ${height}`}  width={'100%'} height={'100%'} >
  
            <VictoryChart 
            
                padding={{left:37, bottom:37 , top:20 , right:15}}
               
                width={width} 
                height={height} 
                theme={VictoryTheme.material}
                containerComponent={ <VictoryVoronoiContainer />}
                >
                    
                    <VictoryAxis  labels={({ datum }) => datum.x} style={{

                      axisLabel:{fill:"#fff" },tickLabels:{fill:COLORS.gray_dark, fontSize:SIZES.width * 0.02},
                      grid:{strokeWidth:0.2}

                    }} />

                    <VictoryAxis  dependentAxis labels={({ datum }) => datum.y} style={{
                        axisLabel:{fill:"#fff"},tickLabels:{fill:COLORS.gray_dark, fontSize:SIZES.width * 0.02},
                        grid:{strokeWidth:0.2},
                       ticks:{fill:'#000'}
                      }} />

                    <VictoryLine 
                     data={data}
                     labels={({ datum }) => `${datum.y} reais`}
                     labelComponent={ 
                    
                      <VictoryTooltip 
                        
                        pointerLength={0}
              
                        flyoutStyle={{
                          fill: COLORS.purple,
                          fillOpacity:0.8,
                        
                        }}
              
                        style={{
                        
                          opacity: 1,
                          fill: COLORS.gray_light,
                          fontFamily:'Dongle-Regular',
                          fontSize: SIZES.body01
                          
                        }}
                        renderInPortal={false} 
                        flyoutHeight={SIZES.h2}/>
                    }

                     interpolation='natural'
                     key={(item , index) => index}
                     style={{  
                      data:{
                        
                          stroke: COLORS.purple, strokeWidth: 1.5, strokeLinecap: "round"
                          
                      }}}

                    />
                    <VictoryArea data={data} interpolation='natural' style={{ 
                      data:{

                        fill:COLORS.purple , 
                        fillOpacity:0.5
                      
                      }}}/>

            </VictoryChart>

            </Svg>

        </View>
      
    )
}
