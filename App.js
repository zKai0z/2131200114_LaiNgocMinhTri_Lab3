import React, { useState } from 'react';
import ProductList from './Products/Products';
import Product_Add from './Products/Product_Add';
import ProductSearch from './Products/Product_Search';
import Product_Detail from './Products/Product_Detail';
import { BottomNavigation } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [index, setIndex] = useState(0);
  const [selectedId, setSelectedId] = useState(null);

  const [routes] = useState([
    { key: 'ProductList', title: 'Products', focusedIcon: 'folder' },
    { key: 'Product_Add', title: 'Add', focusedIcon: 'folder' },
    { key: 'ProductSearch', title: 'Search', focusedIcon: 'find' },
    { key: 'Product_Detail', title: 'Detail', focusedIcon: 'calendar' },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'ProductList':
        return (
          <ProductList
            onNavigate={(tabIndex, productId) => {
              setSelectedId(productId);
              setIndex(tabIndex);
            }}
          />
        );
      case 'Product_Add':
        return <Product_Add />;
      case 'ProductSearch':
        return <ProductSearch />;
      case 'Product_Detail':
        return <Product_Detail id={selectedId} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
  );
}