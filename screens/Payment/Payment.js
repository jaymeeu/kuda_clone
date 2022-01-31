import React from 'react'
import { Dimensions, SafeAreaView, Text, ScrollView, View, FlatList, StyleSheet, Image } from 'react-native'
import BottomTabs from '../../components/BottomTabs'
import TopTaps from '../../components/TopTabs'
import Kuda_Tran from '../../assets/Kuda_Tran.png'
import Nav_card from '../../components/Nav_card'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingBottom: 60,
        paddingTop: 50,
    },
})



export default function Payment() {

    const renderData = [{
        id: "1",
        user: "user1"
    }, {
        id: "2",
        user: "user2"
    },{
        id: "3",
        user: "user3"
    }, {
        id: "4",
        user: "user4"
    },{
        id: "5",
        user: "user5"
    }, {
        id: "6",
        user: "user6"
    },{
        id: "7",
        user: "user7"
    }, {
        id: "8",
        user: "user8"
    }]

    const renderItem = ({ item, index }) => (
        <View>
            <View style={{ width: 60, height: 60, borderRadius: 50, backgroundColor: '#1acaf0', borderColor: '#3c1d59', borderWidth: 2, position: 'relative', marginRight: 15 }}>
                <View style={{ paddingVertical: 0, paddingHorizontal: 6, borderRadius: 50, backgroundColor: '#3c1d59', borderColor: 'white', borderWidth: 2, position: 'absolute', right: -7, top: -2, textAlign: "center" }}><Text style={{ color: 'white' }}>k</Text></View>
                <Text style={{ fontSize: 22, paddingVertical: 10, textAlign: 'center', color: 'white' }}>{item.user.charAt(0)?.toUpperCase() + item.user.charAt(1)?.toUpperCase()}</Text>
            </View>
            <Text style={{ width: 60, fontSize: 12, textAlign: 'center', fontWeight: '500', marginTop: 10 }}>{item.user}</Text>
        </View>
    )
    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <TopTaps text="Payment" />
                    <ScrollView >
                        <View style={{ marginLeft: 15, marginTop: 15 }}>
                            <Text style={{ fontWeight: '700' }}>Friends on kuda</Text>
                            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                                <View>
                                    <Image source={Kuda_Tran} style={{ borderRadius: 50, width: 60, height: 60, marginRight: 15 }} />
                                    <Text style={{ width: 60, fontSize: 12, textAlign: 'center', fontWeight: '700', marginTop: 10 }}>All Contacts</Text>
                                </View>
                                <FlatList
                                    keyExtractor={item => item.id}
                                    data={renderData}
                                    renderItem={renderItem}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                />
                            </View>
                        </View>
                        <View style={{ padding: 15, paddingBottom: 0 }}>
                            <Nav_card onPress={() => console.log('pressed')} iconName="paper-plane" title="Send Money" subtitle="Free transfers to all banks" />
                            <Nav_card onPress={() => console.log('pressed')} iconName="mobile-alt" title="Buy Airtime" subtitle="Recharge any phone easily" />
                            <Nav_card onPress={() => console.log('pressed')} iconName="receipt" title="Pay A Bill" subtitle="Take care of your essentials" />
                            <Nav_card onPress={() => console.log('pressed')} iconName="link" title="Payment Link" subtitle="Send money with a simple link" />
                            <Nav_card onPress={() => console.log('pressed')} iconName="globe" title="Web Payment" subtitle="Pay online without your card" />

                            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', marginTop: 30 }}>
                                <Text style={{ fontWeight: '700' }}>Send to Beneficiary</Text>
                                <View style={{ paddingHorizontal: 15, paddingVertical: 5, borderRadius: 5, backgroundColor: "#3c1d59" }}>
                                    <Text style={{ color: 'white', fontSize: 12 }}>View All</Text>
                                </View>
                            </View>

                            <Beneficiary_card title="My Gtbank" subtitle="GTBank: 0198938273" bgColor='#1acaf0' />
                            <Beneficiary_card title="My Gtbank" subtitle="GTBank: 0198938273" bgColor="#fdca3d"/>
                            <Beneficiary_card title="My Gtbank" subtitle="GTBank: 0198938273" bgColor="#43d68a" />
                            <Beneficiary_card title="My Gtbank" subtitle="GTBank: 0198938273" bgColor="#3c1d59"/>
                            <Beneficiary_card title="My Gtbank" subtitle="GTBank: 0198938273" bgColor="#1acaf0"/>
                           
                        </View>
                    </ScrollView>
                </View>
                <BottomTabs active="Payment" />
            </View>
        </SafeAreaView>
    )
}

const Beneficiary_card = ({title, subtitle, bgColor}) => (
    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', margin:7}}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <View style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: bgColor, borderColor: '#3c1d59', borderWidth: 2, position: 'relative', marginRight: 15 }}>
                <Text style={{ fontSize: 22, paddingVertical: 7, textAlign: 'center', color: 'white' }}>AF</Text>
            </View>
            <View>
                <Text style={{ fontWeight: '700', fontSize: 14 }}>{title}</Text>
                <Text style={{ fontWeight: '500', fontSize: 12 }}>{subtitle}</Text>
            </View>
        </View>
        <FontAwesome5
            name="star"
            size={20}
            color="#3c1d59"
        />
    </View>
)

