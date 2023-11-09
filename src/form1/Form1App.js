import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import Screen1 from './Screen1'
import Screen2 from './Screen2'
import Screen3 from './Screen3'


export default function App() {
  const Stack = createNativeStackNavigator()
  return (
      <Stack.Navigator initialRouteName='Screen1' >
        <Stack.Screen name='Screen1' component={Screen1} options={{headerShown:false}}/>
        <Stack.Screen 
          name='Screen2' 
          component={Screen2}
          options={({route})=>({
            title:"",
            headerRight:()=>{
              return(
                <View style={{flexDirection:'row',gap:5}}>
                  <Image
                      style={{backgroundColor:'#D9CBF6',borderRadius:'100%',height:50,width:50,resizeMode:'contain'}}
                      source={require('../../assets/Rectangle.png')}
                    />
                  <View style={{paddingRight:30}}>
                    <Text style={{fontSize:20,fontWeight:700,color:'#171A1F',fontFamily:'Epilogue', marginLeft:10}}>Hi {route.params.user.name}</Text>
                    <Text style={{fontSize:14,fontWeight:700,color:'#171A1F79',fontFamily:'Epilogue'}}>Have agrate day a head</Text>
                  </View>
                </View>
              )
            }

          })}  
          />
        <Stack.Screen name='Screen3' component={Screen3}  options={{ headerShown: false }}/>
      </Stack.Navigator>
  );
}

