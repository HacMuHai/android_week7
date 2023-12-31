import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, Pressable } from 'react-native';
import Form1App from './src/form1/Form1App'
import Form2App from './src/form2/Form2App'
import ChangeForm from './src/ChangeForm'
import Screen1 from './src/form1/Screen1';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ChangeForm' screenOptions={{headerShown:false}}>
        <Stack.Screen name='ChangeForm' component={ChangeForm}/>
        <Stack.Screen name='Form1App' component={Form1App} />
        <Stack.Screen name='Form2App' component={Form2App} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
