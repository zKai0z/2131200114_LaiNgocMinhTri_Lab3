import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';

const Product_Add = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [rating, setRating] = useState('');
  const [stock, setStock] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState('');

  const handleSubmit = () => {
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        description,
        price: Number(price),
        discountPercentage: Number(discountPercentage),
        rating: Number(rating),
        stock: Number(stock),
        brand,
        category,
        images: images ? [images] : [],
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        Alert.alert('✅ Add Successful', `Product "${json.title}" added!`);
      })
      .catch((err) => {
        console.error(err);
        Alert.alert('❌ Error', 'Failed to add product.');
      });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Add New Product</Text>

      <Text style={styles.label}>Title</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />

      <Text style={styles.label}>Description</Text>
      <TextInput style={styles.input} value={description} onChangeText={setDescription} />

      <Text style={styles.label}>Price</Text>
      <TextInput style={styles.input} value={price} onChangeText={setPrice} keyboardType="numeric" />

      <Text style={styles.label}>Discount (%)</Text>
      <TextInput style={styles.input} value={discountPercentage} onChangeText={setDiscountPercentage} keyboardType="numeric" />

      <Text style={styles.label}>Rating</Text>
      <TextInput style={styles.input} value={rating} onChangeText={setRating} keyboardType="numeric" />

      <Text style={styles.label}>Stock</Text>
      <TextInput style={styles.input} value={stock} onChangeText={setStock} keyboardType="numeric" />

      <Text style={styles.label}>Brand</Text>
      <TextInput style={styles.input} value={brand} onChangeText={setBrand} />

      <Text style={styles.label}>Category</Text>
      <TextInput style={styles.input} value={category} onChangeText={setCategory} />

      <Text style={styles.label}>Image URL</Text>
      <TextInput style={styles.input} value={images} onChangeText={setImages} />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 15,
  },
  label: {
    marginTop: 10,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 8,
    borderRadius: 6,
    marginTop: 4,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 12,
    marginTop: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Product_Add;
