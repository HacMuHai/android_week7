import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, Pressable } from 'react-native';

export default function App({navigation,route}) {
    const donut=route.params
    const [count,setCount]=useState(1)
    return (
        <View style={{ flex: 1, backgroundColor: 'white', padding: 15,gap:10 }}>

            <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ height: 320, width: 320, resizeMode: 'contain' }} source={{uri: donut.img}} />
            </View>

            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 3, justifyContent: 'center', gap: 10 }}>
                    <Text style={{ fontSize: 22, fontWeight: 700, fontFamily: 'Roboto' }}>{donut.name}</Text>
                    <Text style={{ fontSize: 16, fontWeight: 700, fontFamily: 'Roboto', color: '#0000008A' }}>{donut.decs}</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 22, fontWeight: 700, fontFamily: 'Roboto' }}>${parseInt(donut.price)}</Text>
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 2, justifyContent: 'space-around' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Image style={{ height: 25, width: 25, resizeMode: 'contain' }} source={require('../../assets/clock.png')} />
                        <Text style={{ fontSize: 16, fontWeight: 700, fontFamily: 'Roboto', color: '#0000008A' }}>Delivery in</Text>
                    </View>
                    <Text style={{ fontSize: 22, fontWeight: 700, fontFamily: 'Roboto', marginLeft: 20 }}>30 min</Text>
                </View>
                <View style={{ flex: 1, flexDirection: "row", gap: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity 
                        style={{ padding: 5, backgroundColor: '#F1B000', borderRadius: 7 }}
                        onPress={()=>setCount(count=>count-1)}    
                    >
                        <Image style={{ height: 20, width: 20, resizeMode: 'contain' }} source={require('../../assets/Rectangle 16.png')} />
                    </TouchableOpacity>
                    <Text>{count}</Text>
                    <TouchableOpacity 
                        style={{ padding: 5, backgroundColor: '#F1B000', borderRadius: 7 }}
                        onPress={()=>setCount(count=>count+1)}    
                    >
                        <Image style={{ height: 20, width: 20, resizeMode: 'contain' }} source={require('../../assets/Group 14.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flex: 2, justifyContent: 'flex-start',gap:10 }}>
                <Text style={{ fontSize: 22, fontWeight: 700, fontFamily: 'Roboto' }}>Restaurants info</Text>
                <Text style={{ fontSize: 16, fontWeight: 700, fontFamily: 'Roboto', color: '#0000008A' }}>{donut.resInfo}</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
                <TouchableOpacity 
                    style={{ height: 50, padding: 5, backgroundColor: '#F1B000', borderRadius: 7, alignItems: 'center', justifyContent: 'center' }}
                    onPress={()=>navigation.navigate('Screen1')}    
                >
                    <Text style={{ fontSize: 25, fontWeight: 700, fontFamily: 'Roboto', color: 'white' }}>Add to cart</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderWidth: 1
    },
});
