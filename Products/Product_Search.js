import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { Card } from 'react-native-paper';

const Product_Search = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');

  const searchProduct = () => {
    if (value.trim() === '') return;

    const filePath = `https://dummyjson.com/products/search?q=${value}`;

    fetch(filePath)
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((d) => {
        setData(d.products);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.header}>Product Detail</Text>
        <Image source={{ uri: item.thumbnail }} style={styles.image} />
        <Text style={styles.title}>Title: {item.title}</Text>
        <Text>Description: {item.description}</Text>
        <Text>Price: ${item.price}</Text>
        <Text>Discount: {item.discountPercentage}%</Text>
        <Text>Rating: {item.rating} stars</Text>
        <Text>Stock: {item.stock} units</Text>
        <Text>Brand: {item.brand}</Text>
        <Text>Category: {item.category}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titleHeader}>Search Products</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter product name"
        value={value}
        onChangeText={setValue}
      />

      <TouchableOpacity style={styles.button} onPress={searchProduct}>
        <Text style={styles.buttonText}>SEARCH</Text>
      </TouchableOpacity>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Product_Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
  },
  titleHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    marginBottom: 15,
    elevation: 2,
    borderRadius: 10,
    padding: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginVertical: 8,
  },
  title: {
    fontWeight: 'bold',
  },
});
