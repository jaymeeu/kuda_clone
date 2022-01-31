import React, {useContext, useState} from 'react'
import {View,Image,FlatList, Dimensions, SafeAreaView,StyleSheet, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import Acct_Card from '../../components/Acct_Card';
import BottomTabs from '../../components/BottomTabs';
import {AuthContext} from '../../contexts/AuthContext';
import Login from '../Login/Login';
import { DataContext } from '../../contexts/DataContext';
import Borrow from '../../assets/Borrow.png';
import Saving from '../../assets/Saving.png';

export default function Home() {

    const {data_set} = useContext(DataContext)

    const screenWidth = Dimensions.get('window').width
    const screenHeight = Dimensions.get('window').height

    const {isAuth, handleAuth} = useContext(AuthContext)

    const [currentIndex, setCurrentIndex] = useState(2);
    const [RefFlatList, setRefFlatList] = useState()

    const styles = StyleSheet.create({
        container: {
            width:'100%',
            paddingBottom:80,
        },
        scroll_cont:{
            // padding:15,
            width:screenWidth
        },
        _cont:{
            paddingHorizontal:15,
            marginTop:15,
            width:screenWidth
        }

    })

    const data = [{
        'named' : 'spend',
        'key': 1
    },{
        'named' : 'send',
        'key': 2
    },{
        'named' : 'borrow',
        'key': 3
    }]

    const renderItem_Home = ({item, index}) =>(
        <View>
           <ListCard text = {item} width={screenWidth}/> 
        </View>
        )

    const renderItem = ({item, index}) =>(
        <>
        {
            index === 0 ? 
            <View style={styles.scroll_cont}>
                <View style={{marginBottom:170}}>
                    <FlatList
                        keyExtractor={item => item.date.toString()}
                        data={data_set.transaction_history}
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderItem_Home}
                        ListFooterComponent={
                            <Text style={{ width:screenWidth, textAlign:'center', padding:40, paddingBottom:100}}>
                                View more
                            </Text>
                        }
                    />
                </View>
            </View>
            :
            index === 1 ? 
            <View style={styles.scroll_cont}>
                <View style={{marginBottom:170}}>
                    <Saving_Card width = {screenWidth} 
                        title="Kuda Savings"
                        subtitle= "Put money away daily, weekly, monthly or as you spend"
                        btnText="Save now"
                        img={Saving}
                    />
                </View>
            </View>
            :
            <View style={styles.scroll_cont}>
               <View style={{marginBottom:170}}>
                    <Saving_Card width = {screenWidth} 
                        title="Loans"
                        subtitle= "Because you use Kuda frequently, you can borrow up to 0.00 at 0.3% daily interest now"
                        btnText="Borrow"
                        img={Borrow}
                    />
                </View>
            </View>
            
        }
        
        </>
        )

    getItemLayout = (data, index) =>{
        return {length: screenWidth, offset: screenWidth * index, index}
    }

    const onscrollToPageSpend = ()=>{
        RefFlatList.scrollToIndex({animated:true, index: 0})
        setCurrentIndex(0)
    }
    const onscrollToPageSave = ()=>{
        RefFlatList.scrollToIndex({animated:true, index: 1})
        setCurrentIndex(1)
    }
    const onscrollToPageBorrow = ()=>{
        RefFlatList.scrollToIndex({animated:true, index: 2})
        setCurrentIndex(2)
    }
    
    return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1}}>
        {
            isAuth ? 
            <View style={{ flex:1}}>
                <View style={styles.container}>

                    <View style={styles._cont}>
                        <Acct_Card toPage1={onscrollToPageSpend} toPage2={onscrollToPageSave} toPage3={onscrollToPageBorrow} />
                    </View>

                    <FlatList
                        keyExtractor={item => item.key.toString()}
                        data={data}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        renderItem={renderItem}
                        horizontal
                        ref={(ref)=>setRefFlatList(ref)}
                        getItemLayout = {getItemLayout}
                    />
                </View>
                <BottomTabs active="Home"/>
            </View>
            :
            <Login/>
        }
    </SafeAreaView>
    )
}

const ListCard = ({text, width})=>(
    <>
    <Text style={{paddingHorizontal:20, paddingVertical:8, fontWeight:'700', color:'black', fontSize:14}}>{text.date}</Text>
    <View style={{width: width, backgroundColor:'whitesmoke', paddingHorizontal:15}}>
        {text.transaction.map((x, index)=>(
            <View key={index} style={{
                backgroundColor:'whitesmoke', 
                padding:5,
                paddingVertical:10, 
                elevation: 2,//need on Andriod for box shadow to work
                shadowColor:'#d0d0d0', //need on IOS and Andriods for box shadow to work
                marginBottom:1,
                shadowOffset: {width: -2, height: 4}, //need on IOS for box shadow to work
                shadowOpacity: 0.2,//need on IOS for box shadow to work
                shadowRadius: 3, //need on IOS for box shadow to work
                borderRadius:1
            }}>
                <View style={{flexDirection:'row', alignItems:"center", justifyContent:'center'}}>
                    <View style={{flex:1}}>
                        <Image style={{borderRadius:50, width:35, height:35, backgroundColor:'white', marginRight: 10}} source = {x.bank}/>
                    </View>
                    <View style={{flex:7}}>
                        <View style={{flexDirection:"row", justifyContent:'space-between', width:'100%', marginBottom:5}}>
                            <View>
                                <Text>{x.description}</Text>
                            </View>
                            <View>
                                <Text>{x.amt}</Text>
                            </View>
                        </View>
                        <View>
                            <Text>{x.time}</Text>
                        </View>
                    </View>
                </View>
            </View>
        ))}
    </View>
    </>
)

const Saving_Card = ({width, title, subtitle, btnText, img})=>(
    <View style={{width:width, paddingHorizontal:20, marginTop:20}}>
    <Text style={{fontSize:20, fontWeight:'700', textAlign:'center'}}>{title}</Text>
    <Text style={{textAlign:'center', margin:15}}>{subtitle}</Text>
    <View style={{width: Dimensions.get('window').width - 40}}>
        <Image style={{width:'100%'}} source = {img}/>
    </View>
    <View onPress={()=>console.log('pressed')} style={{backgroundColor:'#3c1d59', paddingVertical:15, borderRadius:3, marginTop:15}}>
        <Text style={{color:'white', textAlign:'center'}}>{btnText}</Text>
    </View>
    </View>
)
