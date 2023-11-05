import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, Pressable } from 'react-native';

export default function App() {
    const arrTemp = [
        { img: require('../../assets/donut_yellow 1.png') },
        { img: require('../../assets/donut_yellow 1.png') },
        { img: require('../../assets/donut_yellow 1.png') },
        { img: require('../../assets/donut_yellow 1.png') },
        { img: require('../../assets/donut_yellow 1.png') },
        { img: require('../../assets/donut_yellow 1.png') },
        { img: require('../../assets/donut_yellow 1.png') },
        { img: require('../../assets/donut_yellow 1.png') },
        { img: require('../../assets/donut_yellow 1.png') },

    ]
    return (
        <View style={{ flex: 1, backgroundColor: 'white', padding: 15 }}>

            <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ height: 320, width: 320, resizeMode: 'contain' }} source={require('../../assets/donut_yellow 1.png')} />
            </View>

            <View style={{ flex: 2, flexDirection: 'row' }}>
                <View style={{ flex: 2, justifyContent: 'center', gap: 15 }}>
                    <Text style={{ fontSize: 22, fontWeight: 700, fontFamily: 'Roboto' }}>Tasty Donut</Text>
                    <Text style={{ fontSize: 16, fontWeight: 700, fontFamily: 'Roboto', color: '#0000008A' }}>Spicy tasty donut family</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 22, fontWeight: 700, fontFamily: 'Roboto' }}>$10.00</Text>
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 2, justifyContent: 'space-around' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Image style={{ height: 25, width: 25, resizeMode: 'contain' }} source={require('../../assets/clock.png')} />
                        <Text style={{ fontSize: 16, fontWeight: 700, fontFamily: 'Roboto', color: '#0000008A' }}>Delivery in</Text>
                    </View>
                    <Text style={{ fontSize: 22, fontWeight: 700, fontFamily: 'Roboto',marginLeft:20}}>30 min</Text>
                </View>
                <View style={{ flex: 1, flexDirection: "row",gap:10, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{padding:5,backgroundColor:'#F1B000', borderRadius:7}}>
                    <Image style={{ height: 20, width: 20, resizeMode: 'contain'}} source={require('../../assets/Rectangle 16.png')} />
                    </TouchableOpacity>
                    <Text>1</Text>
                    <TouchableOpacity style={{padding:5,backgroundColor:'#F1B000', borderRadius:7}}>
                    <Image style={{ height: 20, width: 20, resizeMode: 'contain'}} source={require('../../assets/Group 14.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flex: 1.5 }}>

            </View>

            <View style={{ flex: 1 }}>

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
