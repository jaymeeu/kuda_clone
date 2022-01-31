import React from "react";
import { View, Text } from "react-native";

export default function TopTabs({text}) {
  return (
    <View
      style={{
        position:'absolute',
        top:0,
        display:'flex',
        width:'100%',
        flexDirection: "row",
        height:50,
        justifyContent: "center",
        alignItems:'center',
        borderBottomColor:'#c2c2c2',
        borderBottomWidth:1,
        backgroundColor:'white'
      }}
    >
      <Text style={{fontSize:18, fontWeight:'700'}}>{text}</Text>
      
    </View>
  );
}
