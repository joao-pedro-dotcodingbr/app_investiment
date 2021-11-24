import React from 'react'
import { View, Text } from 'react-native'

import Svg,{} from 'react-native-svg'
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
  VictoryScatter
} from 'victory-native'
import {COLORS} from '../../constants/index'
export default function index({data, width , height}) {

    return (
        <View style={{flex:1}}>

          <Svg viewBox={"0 0 300 200"}  width={width} height={height} >

            <VictoryChart 

                standalone={false}  
                width={width} 
                height={height} 
                theme={VictoryTheme.material} 
                >
                    
                    <VictoryAxis labels={({ datum }) => datum.x} style={{
                      axisLabel:{fill:"#fff" },tickLabels:{fill:'#fff', fontSize:10},
                      grid:{strokeWidth:0.1}
                    }} />

                    <VictoryAxis dependentAxis labels={({ datum }) => datum.y} style={{
                        axisLabel:{fill:"#fff" },tickLabels:{fill:'#fff', fontSize:10},
                        grid:{strokeWidth:0.1}
                      }} />

                    <VictoryLine data={data}
                     interpolation='natural'
                     style={{ 
                        
                      data:{
                          fill:COLORS.purple, 
                          fillOpacity:0.7 , 
                          stroke: COLORS.purple, strokeWidth: 1.5, strokeLinecap: "round"
                          
                      }}}
                    
                    />

            </VictoryChart>

            </Svg>

        </View>
      
    )
}
