import React from 'react'
import { 

  Container , 
  Title,
  ContainerChartPatrimony,
  ContainerChartPatrimonyHeader,
  ScrollListButtons,
  ButtonMaximize

} from './styles'

import {ContainerPatrimony , ButtonSelected , GroupButtons , ChartLine} from '../../components/index'

import {SHANDOW , Icons , COLORS} from '../../constants/index'

export default function index(props) {

    const dataOptionsChartPatrimony = [


        {
            status: 'Todos',
            
        },
        {
            status: 'Actions',
            
        },
        {
            status: 'Funds',
            
        },
       

    ]

    const dataChartLine = [

        {x:100, y:200  },
        {x:700, y:300 },
        {x:1000, y:600 },
        {x:1700, y:200 },
        {x:200, y:1000 },
    ]

    return (
      
      <Container>
        
          <Title>Seu Patrimônio</Title>

          <ContainerPatrimony dateStart={'10/06/2000'} patrimony={'2000'}/>

          <ContainerChartPatrimony >

              <ContainerChartPatrimonyHeader>

              <GroupButtons dataList={dataOptionsChartPatrimony}/>

                    <ButtonMaximize>
                        <Icons.feather_maximize width={20} height={20} fill={COLORS.gray_light} />
                    </ButtonMaximize>

              </ContainerChartPatrimonyHeader>

              <ChartLine data={dataChartLine} width={330} height={220}/>

          </ContainerChartPatrimony>

      </Container>

    )
}

