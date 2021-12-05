import React from 'react'
import {drop} from 'react-native'
import { 

  Container , 
  ContainerTop,
  Title,
  ContainerChartPatrimony,
  ContainerChartPatrimonyHeader,
  ScrollListButtons,
  ButtonMaximize,
  ScrollPortfólio,
  ContainerDividends
  

} from './styles'

import {ContainerPatrimony , GroupButtons , ChartLine , CardPortfolio} from '../../components/index'

import { Icons , COLORS , DataUser} from '../../constants/index'

const DataPortifolio = DataUser
const ValuePatrimony = DataUser[0]['main'].patrimony

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

        {x:'10/01', y:200  },
        {x:'10/02', y:300 },
        {x:'10/03', y:600 },
        {x:'10/04', y:200 },
        {x:'10/05', y:400 },
        {x:'10/06', y:500 },
        {x:'10/07', y:700 },
        {x:'10/08', y:1000 },
        {x:'10/09', y:1010 },
        {x:'10/10', y:1200 }, 
        {x:'10/11', y:1300 }, 
        {x:'10/12', y:1100 },
    ]

    return (
      
      <Container>
        
        <ContainerTop>
            
            <Title>Seu Patrimônio</Title>

        </ContainerTop>
         
          <ContainerPatrimony dateStart={'10/06/2000'} patrimony={'2000'}/>

          <ContainerChartPatrimony >

              <ContainerChartPatrimonyHeader>

              <GroupButtons dataList={dataOptionsChartPatrimony}/>

                    <ButtonMaximize>
                        <Icons.feather_maximize width={20} height={20} fill={COLORS.gray_light} />
                    </ButtonMaximize>

              </ContainerChartPatrimonyHeader>

              <ChartLine data={dataChartLine} width={300} height={210}/>

          </ContainerChartPatrimony>
        
          <Title>Portifólio</Title>

          <ScrollPortfólio>
          
                {DataPortifolio.map(item =>{
                    

                    if(!item["main"]){
                    
                        return <CardPortfolio props={item} back={'red'} Icon={Icons.factory} fullPatrimony={ValuePatrimony}/>
                    
                    }
                
                })}
                    
          </ScrollPortfólio>

          <Title>Proventos</Title>

          <ContainerDividends>

          </ContainerDividends>

          
      </Container>

    )
}

