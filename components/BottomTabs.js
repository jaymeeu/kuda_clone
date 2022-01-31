import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';


export default function BottomTabs({active}) {
  const navigation = useNavigation()
  return (
    <View
      style={{
        position:'absolute',
        bottom:0,
        display:'flex',
        width:'100%',
        flexDirection: "row",
        paddingHorizontal:30,
        paddingVertical:10,
        justifyContent: "space-between",
        borderTopColor:'#c2c2c2',
        borderTopWidth:1,
        backgroundColor:'white'
      }}
    >
      {/* <Divider inset={true} insetType="middle" /> */}
      <Icon icon="home-outline" 
        iconActive="home" 
        text="Home" 
        isActive={active} 
        onPress={()=>navigation.navigate("Home")} 
      />
      <Icon icon="send-outline" 
        iconActive="send" text="Payment" 
        isActive={active} 
        onPress={()=>navigation.navigate("Payment")} 
      />
      <Icon icon="pie-chart-outline" 
        iconActive="pie-chart" 
        text="Budget" 
        isActive={active} 
        onPress={()=>navigation.navigate("Budget")} 
      />
      <Icon icon="card-outline" 
        iconActive="card" 
        text="Cards" 
        isActive={active} 
        onPress={()=>navigation.navigate("Cards")} 
      />
      <Icon icon="apps-outline" 
        iconActive="apps" 
        text="More" 
        isActive={active} 
        onPress={()=>navigation.navigate("More")} 
      />
    </View>
  );
}

const Icon = ({icon,iconActive, text, isActive, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View>
      <Ionicons
        name={ isActive === text ? iconActive : icon}
        size={20}
        color={isActive === text ? '#3c1d59' : "#000000"}
        style={{
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      <Text style={{fontSize:11}}>{text}</Text>
    </View>
  </TouchableOpacity>
);
