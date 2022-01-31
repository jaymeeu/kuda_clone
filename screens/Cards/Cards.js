import React from 'react'
import { SafeAreaView,Image,Text, View, StyleSheet } from 'react-native'
import BottomTabs from '../../components/BottomTabs'
import TopTaps from '../../components/TopTabs'
import Card from '../../assets/Cards.png'
import Nav_card from '../../components/Nav_card'


const styles = StyleSheet.create({
    container: {
        width:'100%',
        paddingBottom:80,
        paddingTop:50,
    },
})

export default function Cards() {
    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1}}>
            <View style={{ flex:1}}>
                <View style={styles.container}>
                    <TopTaps text="Cards"/>
                    <View style={{ alignItems: 'center', paddingVertical:20 }}>
                        <Image source={Card} />
                    </View>
                    <Text style={{marginBottom:25, paddingHorizontal:25}}>Spend online and offline globally with your Kuda cards</Text>
                    <View style={{paddingHorizontal:15}}>
                        <Nav_card onPress={() => console.log('pressed')} iconName="credit-card" title="Request A Card" subtitle="We'll send it to you wherever you are" />
                    </View>
                </View>
                <BottomTabs active="Cards"/>
            </View>
        </SafeAreaView>
        )
    }
