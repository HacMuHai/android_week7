import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, Pressable } from 'react-native';




export default function App({navigation,route}) {

  const [color, setColor] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const [dataView, setDataView] = useState([]);
  const [dataDonutPink, setDataDonutPink] = useState([]);
  const [dataDonutFloating, setDataDonutFloating] = useState([]);
  const [dataAll, setDataAll] = useState([]);
  const [hasFetchedData, setHasFetchedData] = useState(false);
  const [valueSearch, setValueSearch] = useState([]);

  const getDataFood = async () => {
    try {
      const response = await fetch('https://654439895a0b4b04436c2b82.mockapi.io/android_week7/v1/DonutPink');
      const pinkData = await response.json();
      setDataDonutPink(pinkData);

      const response1 = await fetch('https://654439895a0b4b04436c2b82.mockapi.io/android_week7/v1/DonutFloat');
      const floatingData = await response1.json();
      setDataDonutFloating(floatingData);
    } catch (error) {
      console.error(error);
    } finally {
      setHasFetchedData(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!hasFetchedData) {
      getDataFood();
    }
  }, [hasFetchedData]);


  useEffect(() => {
    const combinedData = dataDonutPink.concat(dataDonutFloating);
    const shuffledData = [...combinedData].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    setDataView(shuffledData)
    setDataAll(shuffledData)
  }, [dataDonutPink, dataDonutFloating]);

  useEffect(() => {
    if (color === 1) {
      setDataView(dataAll);
    } else if (color === 2) {
      setDataView(dataDonutPink);
    } else if (color === 3) {
      setDataView(dataDonutFloating);
    }
  }, [color]);

  function setType(value) {
    setColor(value);
  }

  function changeValueSearch(text) {
    setValueSearch(text);
    var filteredData
    if (color === 1) {
      filteredData = dataAll
    } else if (color === 2) {
      filteredData = dataDonutPink
    } else if (color === 3) {
      filteredData = dataDonutFloating
    }
    setDataView(filteredData.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    ));

  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>

      <View style={{ flex: 1, gap: 5, alignItems: 'flex-start', marginLeft: 10, marginTop: 15 }}>
        <Text style={{ fontSize: 16, fontWeight: 700, fontFamily: 'Roboto', color: '#000000A6' }}>Welcome, Jala!</Text>
        <Text style={{ fontSize: 20, fontWeight: 700, fontFamily: 'Roboto' }}>Choice you Best food</Text>
      </View>

      <View style={{ flex: 1 }}>
        <TextInput
          style={{
            textAlign: 'left', borderWidth: 1, height: 46, width: "70%", borderColor: '#C4C4C4', marginLeft: 10, marginTop: 5
            , paddingLeft: 15, fontSize: 16, fontWeight: 700, color: '#0000004D', backgroundColor: '#C4C4C41A',
          }}
          placeholder='Search food'
          value={valueSearch}
          onChangeText={(text) => changeValueSearch(text)}
        />
      </View>


      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: "flex-end", marginLeft: 10, marginRight: 10 }}>
        <TouchableOpacity
          style={[{ height: 35, width: 100, backgroundColor: '#C4C4C42B', borderWidth: 1, borderColor: '#00000033', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }, color == 1 ? { backgroundColor: '#F1B000' } : null]}
          onPress={() => setType(1)}
        >
          <Text style={{ fontSize: 14, fontWeight: 700, fontFamily: 'Roboto' }}>Donut</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[{ height: 35, width: 100, backgroundColor: '#C4C4C42B', borderWidth: 1, borderColor: '#00000033', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }, color == 2 ? { backgroundColor: '#F1B000' } : null]}
          onPress={() => setType(2)}
        >
          <Text style={{ fontSize: 14, fontWeight: 700, fontFamily: 'Roboto' }}>Pink Donut</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[{ height: 35, width: 100, backgroundColor: '#C4C4C42B', borderWidth: 1, borderColor: '#00000033', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }, color == 3 ? { backgroundColor: '#F1B000' } : null]}
          onPress={() => setType(3)}
        >
          <Text style={{ fontSize: 14, fontWeight: 700, fontFamily: 'Roboto' }}>Floating</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 9, marginTop: 10 }}>
        <FlatList
          // data={arrTemp}
          data={dataView}
          numColumns={1}
          renderItem={({ item }) => {
            return (
              <View style={{ position: 'relative', flexDirection: 'row', width: "95%", height: 115, backgroundColor: '#F4DDDD', borderRadius: 10, marginBottom: 10, marginLeft: 10, marginRight: 10 }}>
                <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                  <Image style={{ height: 100, width: 110, resizeMode: 'contain' }} source={{ uri: item.img }} />
                </View>

                <View style={{ justifyContent: 'space-around', margin: 5, marginLeft: 15 }}>
                  <Text style={{ fontSize: 22, fontWeight: 700, fontFamily: 'Roboto' }}>{item.name}</Text>
                  <Text style={{ fontSize: 16, fontWeight: 700, fontFamily: 'Roboto', color: '#0000008A' }}>{item.decs}</Text>
                  <Text style={{ fontSize: 22, fontWeight: 700, fontFamily: 'Roboto' }}>${parseInt(item.price)}</Text>
                </View>

                <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
                  <TouchableOpacity
                    style={{ borderTopLeftRadius: "100%", backgroundColor: '#F1B000', height: 45, width: 45, justifyContent: 'center', alignItems: 'flex-end' }}
                    onPress={()=>navigation.push('Screen2',item)}
                  >
                    <Image style={{ height: 22, width: 22, fontWeight: 700, marginRight: 10 }} source={require('../../assets/Group 14.png')} />
                  </TouchableOpacity>
                </View>
              </View>
            )
          }}
        />
      </View>
    </View >
  );
}
