import { Text, View, } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Categories from './src/components/Categories/Categories';
import Home from './src/components/Home/Home';
import Cards from './src/components/Cards/Cards';
import Food from './src/components/Food/Food';


const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Categories" component={Categories} options={{ title: "Categories" }} />
        <Stack.Screen name="Cards" component={Cards} options={{ title: "Categorie Foods" }} />
        <Stack.Screen name="Food" component={Food} options={{ title: "Categorie Food" }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}




export default Router;