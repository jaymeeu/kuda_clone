import React, {useState, useContext} from 'react'
import { View, Text, StyleSheet,Image, TextInput, TouchableOpacity } from 'react-native'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import passport from '../../assets/passport.jpeg';
import {AuthContext} from '../../contexts/AuthContext';
import { DataContext } from '../../contexts/DataContext';

const styles = StyleSheet.create({
    login_container: {
        flex:1,
        padding: 20,
        alignItems: 'center',
    },
    circle_img:{
        width:80,
        height:80,
        borderRadius:50,
        marginTop:40,
        marginBottom:15
     },

    title:{
        marginBottom:5,
        fontSize:28,
        fontWeight:'bold'
    },
    subTitle:{
        marginBottom:40,
        fontSize:16,
    },
    inputView:{
        width:"100%",
    },
    input:{
        paddingVertical: 12,
        paddingHorizontal:20,
        borderRadius:2,
        backgroundColor:'#e2e2e2',
        fontSize:16
    },
    focus:{
        paddingVertical: 10,
        paddingHorizontal:20,
        borderRadius:2,
        backgroundColor:'#c6bad2',
        fontSize:16,
        borderBottomColor:'#3c1d59',
        borderBottomWidth:2
    },
    icons:{
        position:'absolute',
        right:15,
        top: 30
    },
    finger:{
        width:"100%",
        alignItems:'center',
        padding: 20
    },
    btnDisabled:{
        width:'100%',
        paddingVertical: 15,
        alignItems:'center',
        borderRadius: 5,
        marginBottom:40,
        backgroundColor: "#c6bad2"
    },
    btn:{
        width:'100%',
        paddingVertical: 15,
        alignItems:'center',
        borderRadius: 5,
        marginBottom:30,
        backgroundColor: "#3c1d59"
    },
    img: {
        width : 80,
        height: 80,
        maxHeight: 80,
        maxWidth: 80,
        borderRadius:50
    },

  });

export default function Login({ navigation }) {

    const {handleAuth} = useContext(AuthContext)
    const {data_set} = useContext(DataContext)

    const [focus, setFocus] = useState(false);
    const [hide, setHide] = useState(true);
    const [pin, setPin] = useState('')

    const show = () =>setHide(!hide)

    return (
        <View style={styles.login_container}>
            <View style={styles.circle_img}>
                <Image style={styles.img} source = {passport}/>
            </View>
        
               <Text style={styles.title}>Welcome back </Text>
                <Text style={styles.subTitle}>{data_set?.user?.firstname} {data_set?.user?.lastname} </Text> 

            <View style={styles.inputView}>
                <Text>Secret PIN</Text>
                <TextInput
                    style={focus  ? styles.focus : styles.input}
                    placeholder="oooooo"
                    secureTextEntry={hide}
                    maxLength={6}
                    value={pin}
                    onChangeText={(e)=> setPin(e)}
                    onFocus={()=>setFocus(true)}
                    keyboardType="numeric"
                />
                {
                    hide ? 
                    <Icon size={25} icon="eye" click={show} />
                    :
                    <Icon size={25} icon="eye-slash" click={show}/>
                }
            </View>

            <View style={styles.finger}>
                {/* <TouchableOpacity onPress={()=>navigation.navigate('Home')}> */}
                    <Ionicons
                    name='finger-print'
                    size= {50}
                    style={{
                        alignSelf: "center",
                        color:'#3c1d59'
                    }}/>
                {/* </TouchableOpacity> */}
            </View>
            <Button click={()=>handleAuth()} pinLength={pin}/>
            <Text style={{marginTop:0, fontSize:16}}>Forget your PIN or this isn't you?</Text>
            <Text style={{marginTop:10, fontSize:18}}>Sign Out</Text>
        </View>
    )
}

const Icon = (props) => (
    <TouchableOpacity style={styles.icons} onPress={props.click}>
      <View>
        <FontAwesome5
          name={props.icon}
          size={props.size}
          style={{
            marginBottom: 3,
            alignSelf: "center",
          }}
        />
      </View>
    </TouchableOpacity>
  );

  const Button = (props) => (
    <TouchableOpacity style={props.pinLength.length === 6 ? styles.btn : styles.btnDisabled } onPress={ props.pinLength.length === 6 ? props.click : null}>
      <Text style={{color:'white', fontSize:18, fontWeight:"bold"}}>Sign In</Text>
    </TouchableOpacity>
  );

