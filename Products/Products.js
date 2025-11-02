import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const Products = ({ navigation }) => {
  const [data, setData] = useState([]);
  const filePath = 'https://dummyjson.com/products';

  useEffect(() => {
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(d => {
        setData(d.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image source={{ uri: item.thumbnail }} style={styles.image} />
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Title: {item.title}</Text>
          <Text>Description: {item.description}</Text>
          <Text>Price: {item.price}</Text>
          <Text style={styles.discount}>Discount: {item.discountPercentage}% off</Text>
          <Text>Rating: {item.rating}</Text>
          <Text>Stock: {item.stock}</Text>
          <Text>Brand: {item.brand}</Text>
          <Text>Category: {item.category}</Text>
          <View style={styles.buttonContainer}>
            <Button mode="contained" style={styles.btnDetail}>DETAIL</Button>
            <Button
              mode="contained"
              style={styles.btnAdd}
              onPress={() => navigation.navigate('Add')}
            >
              ADD
            </Button>
            <Button mode="contained" style={styles.btnDelete}>DELETE</Button>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Product list</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    width: 90,
    height: 90,
    marginRight: 10,
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
  },
  discount: {
    color: 'green',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  btnDetail: { backgroundColor: '#2196F3' },
  btnAdd: { backgroundColor: '#2196F3' },
  btnDelete: { backgroundColor: '#2196F3' },
});
