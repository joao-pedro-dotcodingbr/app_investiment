import React from 'react'
import { View, Text } from 'react-native'
import { 

    Container , 
    LabelDate , 
    Label , 
    ContainerLabelsDate , 
    ContainerPatrimony , 
    TitlePatrimony ,
    ContainerSituation,
    ContainerSituationPatrimony,
    LabelSituation,
    

} from './styles'

import {SHANDOW} from '../../constants/index'

export default function index({dateStart , patrimony}) {
    return (
       <Container style={SHANDOW.mini}>


           <ContainerLabelsDate>

                <Label>Data de inicio:</Label>
                <LabelDate>{dateStart}</LabelDate>

           </ContainerLabelsDate>

           <ContainerPatrimony>

               <TitlePatrimony>{patrimony}</TitlePatrimony>

                <ContainerSituation>

                    <ContainerSituationPatrimony/>

                    <LabelSituation>20%</LabelSituation>

                </ContainerSituation>
              
           </ContainerPatrimony>

       </Container>
    )
}
