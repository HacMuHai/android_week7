import React from 'react';
import { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';


export default function Screen1({ navigation, route }) {
    const BASE_URL = 'https://hftgrt-3000.csb.app';

    const [name, setName] = useState('')

    const changeScreen2 = () => {
        if (name.trim() !== '') {
            fetch(`${BASE_URL}/users?name=${encodeURIComponent(name)}`)
                .then(response => response.json())
                .then(data => {
                    if (data.length == 0) {
                        addUser()
                    } else
                        navigation.push('Screen2', { user: data[0] })
                })
                .catch(error => console.error('Lỗi:', error));
        }
    }

    function addUser() {
        const newUser = {
            name: name
        };
        fetch(`${BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then(response => response.json())
            .then(newUserData => {
                navigation.push('Screen2', { name: name, user: newUserData });
            })
            .catch(error => console.error('Lỗi khi thêm người dùng mới:', error));
    }

    return (
        <View style={{ flex: 1 }}>

            <View style={{ flex: 6, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: 200, height: 200, resizeMode: 'contain' }} source={require('../../assets/logoForm1.png')} />
            </View>

            <View style={{ flex: 3, justifyContent: 'flex-start', alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight: 700, textAlign: 'center', color: '#8353E2' }}>MANAGE YOUR{'\n'}TASK</Text>
            </View>

            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>

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

            <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={{
                    height: 40, width: 170, borderRadius: 15, backgroundColor: '#00BDD6'
                    , justifyContent: 'center', alignItems: 'center'
                }}
                    onPress={() => changeScreen2()}
                >
                    <Text style={{ color: "white", fontWeight: 400 }}>GET STARTED {'-->'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

