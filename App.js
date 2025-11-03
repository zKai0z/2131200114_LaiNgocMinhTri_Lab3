import React, { useState } from 'react';
import ProductList from './Products/Products';
import Product_Add from './Products/Product_Add';
import ProductSearch from './Products/Product_Search';
// import ProductDetail from './Products/Product_Detail';
import { BottomNavigation } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'ProductList', title: 'Products', focusedIcon: 'folder' },
    { key: 'Product_Add', title: 'Add', focusedIcon: 'plus-box' },
    { key: 'ProductSearch', title: 'Search', focusedIcon: 'magnify' },
    // { key: 'Product_Detail', title: 'Detail', focusedIcon: 'new-box' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    ProductList: ProductList,
    Product_Add: Product_Add,
    ProductSearch: ProductSearch,
    // Product_Detail: ProductDetail,
  });

  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{ backgroundColor: '#f4f2f7' }}
      />
    </SafeAreaProvider>
  );
}
