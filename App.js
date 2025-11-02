import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Products from './Products/Products';
import Product_Add from './Products/Product_Add';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="Add" component={Product_Add} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
