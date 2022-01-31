import React from 'react'
import { SafeAreaView,Image,Text, View, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import BottomTabs from '../../components/BottomTabs'
import TopTaps from '../../components/TopTabs'
import passport from '../../assets/passport.jpeg'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Nav_card from '../../components/Nav_card'

const styles = StyleSheet.create({
    container: {
        width:'100%',
        paddingBottom:80,
        paddingTop:50,
    },
})

export default function More() {
    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1}}>
            <View style={{ flex:1}}>
                <View style={styles.container}>
                    <TopTaps text="More"/>
                    <ScrollView style={{paddingVertical:10, paddingHorizontal:15}}>
                        <View style={{marginBottom:25}}>
                            <Account title="Razaq jamiu adewuyi" subtitle="Account Details"/>
                        </View>
                        <Nav_card onPress={() => console.log('pressed')} iconName="receipt" title="Statements & Reports" subtitle="Download monthly statements" />
                        <Nav_card onPress={() => console.log('pressed')} iconName="credit-card" title="Saved Cards" subtitle="Manage connected cards" />
                        <Nav_card onPress={() => console.log('pressed')} iconName="user-circle" title="Linked Accounts" subtitle="Manage external accounts" />
                        <Nav_card onPress={() => console.log('pressed')} iconName="comment-alt" title="Chat With Us" subtitle="Get support or send feedback" />
                        <Nav_card onPress={() => console.log('pressed')} iconName="lock" title="Security" subtitle="Protect yourself from intruders" />
                        <Nav_card onPress={() => console.log('pressed')} iconName="tags" title="Referrals" subtitle="Earn money when your friends join Kuda" />
                        <Nav_card onPress={() => console.log('pressed')} iconName="bandcamp" title="Account Limits" subtitle="How much you can spend and receive" />
                        <Nav_card onPress={() => console.log('pressed')} iconName="receipt" title="Legal" subtitle="About our contract with you" />

                    </ScrollView>
                </View>
                <BottomTabs active="More"/>
            </View>
        </SafeAreaView>
        )
    }

    const Account = ({title, subtitle}) => (
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', elevation:2, shadowColor:"#d0d0d0",borderRadius:3, paddingVertical:15, paddingHorizontal:20}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Image source={passport} style={{ width: 50, height: 50, borderRadius: 50, marginRight: 15 }}/>
                <View>
                    <Text style={{ fontWeight: '700', fontSize: 18, marginBottom:5 }}>{title}</Text>
                    <Text style={{ fontWeight: '500', fontSize: 14 }}>{subtitle}</Text>
                </View>
            </View>
            <FontAwesome5
                name="chevron-right"
                size={20}
                color="#3c1d59"
            />
        </View>
    )
