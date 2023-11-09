import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList, TextInput } from 'react-native';

export default function Screen2({ navigation, route }) {
    
    const BASE_URL='https://hftgrt-3000.csb.app'
    var {user,job } = route.params
    const [name, setName] = useState(job == null?'':job.nameJob)

    function changeScreen2(){
        if(name.trim() !==''){
            if(job==null){
                addJob()
            }else{
                job.nameJob = name
                console.log(job)
                updateJob(job)
            }
        }
    }

    function addJob(){
        const newJob = {
            nameJob:name,
            userID:user.id
        }
        fetch(`${BASE_URL}/jobs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newJob),
        })
            .then(response => response.json())
            .then(() => {
                navigation.push('Screen2', { user: user});
            })
            .catch(error => console.error('Lỗi khi thêm người dùng mới:', error));
    }


    function updateJob(job){
        fetch(`${BASE_URL}/jobs/${job.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(job),
        })
            .then(() => {
                navigation.push('Screen2', { user: user});
            })
            .catch(error => console.error('Lỗi khi thêm người dùng mới:', error));
    }
    
    return (
        <View style={{ flex: 1, gap: 10, backgroundColor: 'white' }}>
            <View style={{ flex: 1, flexDirection: 'row', padding: 20, justifyContent: 'center' }}>
                <View style={{ flex: 5, flexDirection: 'row', gap: 10 }}>
                    <Image
                        style={{ backgroundColor: '#D9CBF6', borderRadius: '100%', height: 50, width: 50, resizeMode: 'contain' }}
                        source={require('../../assets/Rectangle.png')}
                    />
                    <View style={{ paddingRight: 30 }}>
                        <Text style={{ fontSize: 20, fontWeight: 700, color: '#171A1F', fontFamily: 'Epilogue', marginLeft: 10 }}>Hi {user.name}</Text>
                        <Text style={{ fontSize: 14, fontWeight: 700, color: '#171A1F79', fontFamily: 'Epilogue' }}>Have agrate day a head</Text>
                    </View>
                </View>

                <TouchableOpacity onPress={() => navigation.goBack('Screen2')}>
                    <Image
                        style={{ flex: 1, height: 40, width: 40, resizeMode: 'contain' }}
                        source={require('../../assets/goBack.png')}
                    />
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight: 700, textAlign: 'center' }}>{job==null?'ADD':'UPDATE'} YOUR JOB</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <View style={{
                    height: 50, width: "90%", flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1,
                    borderRadius: 15, padding: 15, gap: 10
                }}>
                    <Image style={{ flex: 1, width: 50, height: 50, resizeMode: 'contain' }} source={require('../../assets/mail.png')} />
                    <TextInput
                        style={{ flex: 8, height: 35 }}
                        placeholder='Enter your name'
                    value={name}
                    onChangeText={setName}
                    />
                </View>
            </View>


            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={{
                    height: 40, width: 170, borderRadius: 15, backgroundColor: '#00BDD6'
                    , justifyContent: 'center', alignItems: 'center'
                }}
                    onPress={() => {
                        changeScreen2()
                    }}
                >
                    <Text style={{ color: "white", fontWeight: 400 }}>FINISH {'->'}</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: 200, height: 200, resizeMode: 'contain' }} source={require('../../assets/logoForm1.png')} />
            </View>
        </View>
    );
}

