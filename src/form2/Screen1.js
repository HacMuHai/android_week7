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
    <View style={{ flex: 1,backgroundColor:'white' }}>

      <View style={{ flex: 1, gap: 5, alignItems: 'flex-start', marginLeft: 10, marginTop: 15 }}>
        <Text style={{ fontSize: 16, fontWeight: 700, fontFamily: 'Roboto', color: '#000000A6' }}>Welcome, Jala!</Text>
        <Text style={{ fontSize: 20, fontWeight: 700, fontFamily: 'Roboto' }}>Choice you Best food</Text>
      </View>

      <View style={{ flex: 1 }}>
        <TextInput style={{
          textAlign: 'left', borderWidth: 1, height: 46, width: "70%", borderColor: '#C4C4C4', marginLeft: 10, marginTop: 5
          , paddingLeft: 15, fontSize: 16, fontWeight: 700, color: '#0000004D', backgroundColor: '#C4C4C41A',
        }} placeholder='Search food' />
      </View>


      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: "flex-end", marginLeft: 10, marginRight: 10 }}>
        <TouchableOpacity style={{ height: 35, width: 100, backgroundColor: '#C4C4C42B', borderWidth: 1, borderColor: '#00000033', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 14, fontWeight: 700, fontFamily: 'Roboto' }}>Donut</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ height: 35, width: 100, backgroundColor: '#C4C4C42B', borderWidth: 1, borderColor: '#00000033', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 14, fontWeight: 700, fontFamily: 'Roboto' }}>Pink Donut</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ height: 35, width: 100, backgroundColor: '#C4C4C42B', borderWidth: 1, borderColor: '#00000033', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 14, fontWeight: 700, fontFamily: 'Roboto' }}>Floating</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 9, marginTop: 10 }}>
        <FlatList
          data={arrTemp}
          numColumns={1}
          renderItem={({ item }) => {
            return (
              <View style={{ position: 'relative', flexDirection: 'row', width: "95%", height: 115, backgroundColor: '#F4DDDD', borderRadius: 10, marginBottom: 10, marginLeft: 10, marginRight: 10 }}>
                <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                  <Image style={{ height: 100, width: 110, resizeMode: 'contain' }} source={item.img} />
                </View>

                <View style={{ justifyContent: 'space-around', margin: 5, marginLeft: 15 }}>
                  <Text style={{ fontSize: 22, fontWeight: 700, fontFamily: 'Roboto' }}>Tasty Donut</Text>
                  <Text style={{ fontSize: 16, fontWeight: 700, fontFamily: 'Roboto', color: '#0000008A' }}>Spicy tasty donut family</Text>
                  <Text style={{ fontSize: 22, fontWeight: 700, fontFamily: 'Roboto' }}>$10.00</Text>
                </View>

                <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
                  <TouchableOpacity style={{ borderTopLeftRadius: "100%", backgroundColor: '#F1B000', height: 45, width: 45, justifyContent: 'center', alignItems: 'flex-end' }}>
                    <Image style={{ height: 22, width: 22, fontWeight: 700, marginRight: 10 }} source={require('../../assets/Group 14.png')} />
                  </TouchableOpacity>
                </View>
              </View>
            )
          }}
        />
      </View >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1
  },
});
