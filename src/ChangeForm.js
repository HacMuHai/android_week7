import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, Pressable } from 'react-native';


export default function App({ navigation }) {
  return (
    <View style={{ flex: 1,alignItems: 'center', justifyContent: 'space-around' }}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{ width: "100%", height: null, backgroundColor: '#F1B000', alignItems: 'center', borderRadius: 10 }}
          onPress={() => navigation.push('Form1App')}
        >
          <Text style={{ color: 'white', fontSize: 22 }}>Form 1</Text>
          <Image style={{ height: 150, width: 300, resizeMode: 'contain' }} source={require('../assets/form1.png')} />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{ width: "100%", height: null, backgroundColor: '#F1B000', alignItems: 'center', borderRadius: 10 }}
          onPress={() => navigation.push('Form2App')}
        >
          <Text style={{ color: 'white', fontSize: 22 }}>Form 2</Text>
          <Image style={{ height: 150, width: 300, resizeMode: 'contain' }} source={require('../assets/form2.png')} />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{ width: "100%", height: null, backgroundColor: '#F1B000', alignItems: 'center', borderRadius: 10 }}
          // onPress={() => navigation.push('Form3App')}
        >
          <Text style={{ color: 'white', fontSize: 22 }}>Form 3</Text>
          <Image style={{ height: 150, width: 300, resizeMode: 'contain' }} source={{}} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
