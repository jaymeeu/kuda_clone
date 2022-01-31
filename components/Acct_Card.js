import React, {useEffect, useState} from 'react'
import { View,Image, Text, TouchableOpacity } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";
import passport from '../assets/passport.jpeg';

export default function Acct_Card({toPage1, toPage2, toPage3}) {

    const [pageNum, setpageNum] = useState(1)

    return (
        <View>
            {
                pageNum === 1 ? 
                <TopMenu showAdd addText ="Add money" color="#3c1d59"/>
                :
                pageNum === 2 ? 
                <TopMenu showAdd addText ="Save now" color="#47d38c"/>
                :
                <TopMenu showAdd={false}/>
            } 
            <View style={{width:'100%', borderRadius:10, backgroundColor: pageNum === 1 ? '#3c1d59': pageNum === 2 ? '#47d38c': '#1eccf1', padding: 20, alignItems:'center'}}>

                <Text style={{color:'white', fontWeight:'700'}}>  
                    {
                        pageNum === 1 ? 
                        "Account Balance"
                        :
                        pageNum === 2 ? 
                        "Total Savings"
                        :
                        "You owe"
                    }
                </Text>

                <Text style={{fontSize:35, color:'white', fontWeight:'700', marginVertical:8}}>{'\u20A6'}80.00</Text>

                <View style={{flexDirection:'row', width:'100%', justifyContent:'center'}}>
                    <Card_click  text="Spend" icon={<Ionicons name='home' size={16}/>} onClicked={()=>{setpageNum(1); toPage1()}}/>
                    <View style={{marginHorizontal:45}}>
                        <Card_click  text="Save" icon={<Ionicons name='home' size={16}/>} onClicked={()=>{setpageNum(2); toPage2()}}/>
                    </View>
                    <Card_click text="Borrow" icon={<Ionicons name='home' size={16}/>} onClicked={()=>{setpageNum(3); toPage3()}}/>
                </View>
            </View>
        </View>
    )
}

const Card_click = ({text, icon, onClicked})=>(
    <TouchableOpacity onPress={onClicked}>
        <View style={{width:45, height:30, borderRadius:5, backgroundColor: "white" , marginBottom:10, alignItems:'center', justifyContent:'center' }}>
            {icon}
        </View>
        <Text style={{width:45,color:'white', fontSize:12, textAlign:'center'}}>{text}</Text>
    </TouchableOpacity>
);

const TopMenu = ({showAdd, addText, color}) =>(
    <View style={{width:'100%', flexDirection:'row', justifyContent:'space-between', marginBottom:15}}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image style={{borderRadius:50, width:30, height:30, backgroundColor:'white', marginRight: 15}} source = {passport}/>
            <Text style={{fontWeight:'bold'}}>Hi, Razaq</Text>
        </View>
        {
            showAdd ? 
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={{marginRight: 15, fontWeight:'bold'}}>{addText}</Text>
                <View style={{borderRadius:50,alignItems:'center', justifyContent:'center', width:25, height:25, borderColor: color, borderStyle:'solid', borderWidth:0.5, backgroundColor:'white'}}>
                    <Text style={{color:'white',textAlign:'center', borderRadius:50, width:18, height:18,  backgroundColor: color, alignItems:'center', justifyContent:'center'}}>
                        +
                    </Text>
                </View>
            </View> 
            :
            null 
        }
        
    </View>
)
