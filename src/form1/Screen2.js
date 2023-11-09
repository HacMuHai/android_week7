import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList, TextInputBase } from 'react-native';
import { TextInput } from 'react-native';

export default function Screen2({ navigation, route }) {
    const {user} = route.params
    var [arrJob,setArrJob] = useState([])

    function getJobs(){

        fetch(`https://hftgrt-3000.csb.app/jobs?userID=${user.id}`)
        .then(response => response.json())
        .then(data => {
            if(data.length != 0)
                setArrJob(data)
                console.log(data)
        })
        .catch(error => console.error('Lỗi:', error));
    }

   useEffect(()=>{
    getJobs()
   },[])

    return (
        <View style={{ flex: 1, padding: 15, backgroundColor: '#DEE1E62B' }}>

            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 10 }}>
                <View style={{ flexDirection: 'row', height: 45, width: '90%', borderWidth: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 10, borderRadius: 5 }}>
                    <Image
                        style={{ flex: 1, height: 26, width: 26, resizeMode: 'contain' }}
                        source={require('../../assets/search.png')}
                    />
                    <TextInput
                        style={{ flex: 9, height: 30, marginRight: 5, fontSize: 16, fontWeight: 500 }}
                        placeholder='Search'
                    />
                </View>
            </View>

            <View style={{ flex: 4,backgroundColor:'white' }}>
                <FlatList
                    data={arrJob}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ height: 48, width: '100%', marginBottom: 15 }}>
                                <TouchableOpacity
                                    style={{
                                        flex: 1, flexDirection: 'row', gap: 10, width: "100%", alignItems: 'center',
                                        borderRadius: 25, backgroundColor: '#171A1F26', shadowColor: '#171A1F18', shadowOffset: { width: 0, height: 8 }, borderWidth: 1, paddingLeft: 10, paddingRight: 10
                                    }}
                                    onPress={() => navigation.push('Screen3',{user:user,job:item})}
                                >
                                    <Image
                                        style={{ flex: 1, height: 26, width: 26, resizeMode: 'contain' }}
                                        source={require('../../assets/stick.png')}
                                    />
                                    <Text style={{ flex: 8, }}>{item.nameJob}</Text>
                                    <Image
                                        style={{ flex: 1, height: 26, width: 26, resizeMode: 'contain' }}
                                        source={require('../../assets/pen.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
            </View>

            <View style={{ flex: 1,justifyContent:'center',alignItems:'center' }}>
                <TouchableOpacity
                    style={{backgroundColor:'#00BDD6',height:50,width:50,borderRadius:'100%',alignItems:'center'}}
                    onPress={() => navigation.push('Screen3',{user:user,job:null})}      
                >
                    <Image
                        style={{ flex: 1, height: 26, width: 26, resizeMode: 'contain' ,}}
                        source={require('../../assets/Group 14.png')}
                    />
                </TouchableOpacity>
            </View>

        </View>
    )
}

