import React, {useState} from 'react'
import { View, ScrollView} from 'react-native'
import { ButtonSelected } from '../index'
export default function index({dataList}) {

    const [status , setStatus] = useState(dataList[0].status)

    const setStausFilter = (status) =>{
    
        setStatus(status)

    }

    return (

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            
           {dataList.map( (e ,i) =>{

               return <ButtonSelected 
               name={e.status} 
               isfocused={ (status == e.status)? true : false } 
               funcButton={() => setStausFilter(e.status)}
               
               />

           })}
        </ScrollView>
        
    )
}
