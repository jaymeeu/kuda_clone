import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function Nav_card({onPress,iconName,title, subtitle}) {

    const styles = StyleSheet.create({
        Cards:{
            elevation: 2,
            shadowColor: "#d0d0d0",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.20,
            shadowRadius: 5,
            paddingHorizontal:20,
            paddingVertical:15,
            flexDirection:"row",
            justifyContent:'space-between',
            alignItems:'center',
            marginBottom:5,
            // borderColor:'#d0d0d0',
            // borderWidth:0.5,
            borderRadius:1
            },
        card_title:{
            flexDirection:'row',
            alignItems:'center'
        }
            
        });

    return (
        <TouchableOpacity style={styles.Cards} onPress={onPress}>
            <View style={styles.card_title}>
                <View style={{ backgroundColor:'#f4e5ff',borderColor:'#3c1d59',alignItems:"center", justifyContent:'center', borderWidth:1, height:35, width:30, borderRadius:3, marginRight:20}}>
                    <FontAwesome5
                        name= {iconName}
                        size={18}
                        color="#3c1d59"
                    />
                </View>
                <View>
                    <Text style={{fontWeight:'700', fontSize:17}}>{title}</Text>
                    <Text style={{fontWeight:'500', fontSize:12}}>{subtitle}</Text>
                </View>
            </View>
            <FontAwesome5
                name= "chevron-right"
                size={20}
                color="#3c1d59"
            />
        </TouchableOpacity>
    )
}
