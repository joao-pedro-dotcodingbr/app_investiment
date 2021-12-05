import React,{useState , useEffect} from 'react'
import { COLORS , Icons} from '../../constants'
import {Container , Header , Title , ContainerProgress , ContainerIcon , ContainerValue} from './styles'
import Progress from '../ChartProgress'

export default function index({back , Icon , props , fullPatrimony}) {

    const [nameActive , setNameActive] = useState('')
    const [colorActive , setColorActive] = useState('')
    const [patrimonyActive , setPatrimonyActive] = useState('')
    const [percentActive , setPercentActive] = useState('')
   const [teste , SetTeste] = useState(0)
   
   const calcPorcent = (valueMini) =>{
       
        if(valueMini < fullPatrimony){
            var result =  valueMini * 100 / fullPatrimony 
            const format = String(result).substr(0,2)
        
            return parseInt(format)
        }else{
            return 100
        }
       

   }
   
    useEffect(() => {


        if(props["action"]){

           setNameActive('action')
           setColorActive(COLORS.actions)
           setPatrimonyActive(props["action"].patrimony)
           setPercentActive(calcPorcent(props["action"].patrimony))
          
        }
        if(props["funds"]){

            setNameActive('funds')
            setColorActive(COLORS.funds)
            setPatrimonyActive(props["funds"].patrimony)
            setPercentActive(calcPorcent(props["funds"].patrimony))
           

        }
        if(props["cdi"]){

            setNameActive('cdi')
            setColorActive(COLORS.cdi_and_fixed)
            setPatrimonyActive(props["cdi"].patrimony)
            setPercentActive(calcPorcent(props["cdi"].patrimony))
            

        }
       
    }, [])

    const GetIcon = () =>{
        if(nameActive =='action'){
            return <Icons.factory width={16} height={16} fill={COLORS.gray_light}/>
        }
        if(nameActive =='funds'){
            return <Icons.building width={16} height={16} fill={COLORS.gray_light}/>
        }
        if(nameActive =='cdi'){
            return <Icons.description width={16} height={16} fill={COLORS.gray_light}/>
        }
    }


    const data = [{x:1 , y:percentActive} , {x:2 , y: 100 - percentActive}]
    return (
        <Container back={colorActive}>

            <Header>

                <ContainerIcon>
                     {GetIcon()}
                </ContainerIcon>
              
                <Title>{nameActive}</Title>

            </Header>

            <ContainerProgress>
                <Progress 

                data={data} 
                percentValue={percentActive} 
                width={70} height={70} 
                colorPercent={colorActive} 
                innerRadius={27}

                />
            </ContainerProgress>

            <ContainerValue>

                <Title>{patrimonyActive}</Title>

            </ContainerValue>
          
        </Container>
    )
}
