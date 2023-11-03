import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';


export default function App() {
  const arrTemp = [
    {},
    {},
    {},
    {},
    {},
    {},
  ]
  return (
    <View style={styles.container}>

      <View style={{ flex: 3 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize:, fontWeight:, fontFamily:}}></Text>
          <Text style={{ fontSize:, fontWeight:, fontFamily:}}></Text>
        </View>

        <View style={{ flex: 1 }}>
          <TextInput placeholder='enter' />
        </View>


        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity style={{}}>
            <Text style={{ fontSize:, fontWeight:, fontFamily:}}></Text>
          </TouchableOpacity>
          <TouchableOpacity style={{}}>
            <Text style={{ fontSize:, fontWeight:, fontFamily:}}></Text>
          </TouchableOpacity>
          <TouchableOpacity style={{}}>
            <Text style={{ fontSize:, fontWeight:, fontFamily:}}></Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 9 }}>
        <FlatList
          data={arrTemp}
          numColumns={1}
          renderItem={() => {
            return (
              <View style={{ flexDirection: 'row' }}>
                <View style={{}}>
                  <Image style={{ height:, width }} source={{ uri: '' }} />
                </View>

                <View style={{}}>
                  <Text style={{ fontSize:, fontWeight:, fontFamily:}}></Text>
                  <Text style={{ fontSize:, fontWeight:, fontFamily:}}></Text>
                  <Text style={{ fontSize:, fontWeight:, fontFamily:}}></Text>
                </View>

                <View style={{}}>
                  <TouchableOpacity style={{borderTopLeftRadius:"100%"}}>
                    <Image style={{ height:, width }} source={{ uri: '' }} />
                  </TouchableOpacity>
                </View>
              </View>
            )
          }}
        ></FlatList >
      </View >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
