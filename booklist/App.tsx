import * as React from 'react';
import { View, Text, SafeAreaView, Image, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home/HomeScreen';
import DetailsScreen from './src/screens/Details/DetailsScreen';

const Stack = createNativeStackNavigator();

function App() {

  const HomenavigationOptions = {
    headerTitleAlign: 'center',
    headerTitleStyle: { fontWeight: 'bold' },
  };

  const navigationOptions = ({ navigation, route }) => ({
    title: route.params?.headerTitle || 'Details',
    headerTitleAlign: 'center',
    headerTitleStyle: { fontWeight: 'bold' },
    headerLeft: () => (
      <TouchableOpacity style={{ marginLeft: -5, padding: 5 }} onPress={() => navigation.goBack()}>
        <Image source={require('./src/assets/Images/backButton.png')} />
      </TouchableOpacity>
    ),
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="자유톡" component={HomeScreen} options={HomenavigationOptions} />
          <Stack.Screen name="Details" component={DetailsScreen} options={navigationOptions} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;