import React from 'react'
import { SafeAreaView,Text,Image,Dimensions, View, StyleSheet } from 'react-native'
import BottomTabs from '../../components/BottomTabs'
import TopTaps from '../../components/TopTabs'
import Money_in from '../../assets/Money_in.png'
import Money_out from '../../assets/Money_out.png'
import Balance from '../../assets/Balance.png'
import NoBudget from '../../assets/NoBudget.png'
import Create from '../../assets/Create.png'
import SEND from '../../assets/SEND.jpeg'
import Phone_internet from '../../assets/Phone_internet.png'

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const screenWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    container: {
        width:'100%',
        paddingBottom:80,
        paddingTop:50,
    },
    budgetCard: {
        // borderWidth:1,
        // borderColor:'#d0d0d0',
        padding:10,
        width:'49%',
        elevation: 2,
        shadowColor: "#d0d0d0",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 5,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:1
    }
    
})

export default function Budget() {
    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1}}>
            <View style={{ flex:1}}>
                <View style={styles.container}>
                    <TopTaps text="Budget"/>
                    <View style={{position:'relative', padding:15, paddingTop:5}}>
                        <Text style={{position:'absolute', top:5, left:15, fontWeight:'600'}}>Dec 2021</Text>
                        <Text style={{textAlign:'center', fontWeight:'600'}}>Jan 2022</Text>
                    </View>
                    <View style={{ paddingHorizontal:15}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10}}>
                            <Budget_Card digit="20,000,000" tag="Money in" img={Money_in}/>
                            <Budget_Card digit="10,000,000" tag="Money out" img={Money_out}/>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10}}>
                            <Budget_Card digit="10,000,000" tag="Balance" img={Balance}/>
                            <Budget_Card digit="No Budget" tag="Create a Budget" img={NoBudget}/>
                        </View>
                    </View>
                    <Create_Budget width={screenWidth} title="Create a Budget" subtitle="Create a smart budget now to manage your finances better"/>
                    <Text style={{fontSize:17, fontWeight:"700", paddingVertical:10, paddingHorizontal:15}}>All categories</Text>
                    <Categories img={SEND} bgColor="#f5f5ff" title="Transfer" subtitle="16 Transactions" rTitle="N152,288.00" rSubtitle ="100%"/>
                    <Categories img={Phone_internet} title="Create a Budget" subtitle="Create a smart" rTitle="N2,288.00" rSubtitle ="2%"/>
                </View>
                <BottomTabs active="Budget"/>
            </View>
        </SafeAreaView>
        )
    }
    const Budget_Card = ({img, digit, tag})=>(
        <View style={styles.budgetCard}>
            <Image source={img} style={{width:30, height:30, borderRadius:50, marginRight:10}}/>
            <View>
                <Text style={{fontWeight:'700',fontSize:16}}>{digit}</Text>
                <Text>{tag}</Text>
            </View>
        </View>
    )

    const Create_Budget = ({title, subtitle})=>(
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:15}}>
            <View style={{flexDirection:'row', alignItems:'center', maxWidth:'70%'}}>
                <Image source={Create} style={{ width: 50, height: 50, borderRadius: 50, marginRight:15 }}/>
                <View>
                    <Text style={{ fontWeight: '700', fontSize: 16 }}>{title}</Text>
                    <Text style={{ fontWeight: '500', fontSize: 14 }}>{subtitle}</Text>
                </View>
            </View>
            <FontAwesome5
                name="chevron-right"
                size={20}
                color="#b2b2b2"
            />
        </View>
    )

    const Categories = ({title, subtitle,rTitle, rSubtitle, bgColor, img}) => (
        <View style={{backgroundColor:bgColor, flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:15}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Image source={img} style={{ width: 50, height: 50, borderRadius:50, marginRight: 15 }}/>
                <View>
                    <Text style={{ fontWeight: '700', fontSize: 14 }}>{title}</Text>
                    <Text style={{ fontWeight: '500', fontSize: 12 }}>{subtitle}</Text>
                </View>
            </View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <View style={{marginRight:15}}>
                    <Text style={{ fontWeight: '700', fontSize: 14, textAlign:'right' }}>{rTitle}</Text>
                    <Text style={{ fontWeight: '500', fontSize: 12,textAlign:'right' }}>{rSubtitle}</Text>
                </View>
               <FontAwesome5
                name="chevron-right"
                size={20}
                color="#b2b2b2"
            /> 
            </View>
            
        </View>
    )
