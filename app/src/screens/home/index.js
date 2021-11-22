import React from 'react'
import {Container , Title} from './styles'
import {ContainerPatrimony} from '../../components/index'
export default function index() {
    return (
      
      <Container>
        
          <Title>Seu Patrimônio</Title>

          <ContainerPatrimony dateStart={'10/06/2000'} patrimony={'2000'}/>

      </Container>

    )
}
