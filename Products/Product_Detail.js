import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

export default function Product_Detail({ productId }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productId) {
      fetch(`https://dummyjson.com/products/${productId}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error('Error fetching product detail:', error));
    }
  }, [productId]);

  if (!productId) {
    return (
      <View style={styles.centered}>
        <Text>Select a product from the list.</Text>
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.centered}>
        <Text>Loading product details...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Product Detail" />
        <Card.Content>
          <Image source={{ uri: product.thumbnail }} style={styles.image} />
          <Text style={styles.text}>Title: {product.title}</Text>
          <Text style={styles.text}>Description: {product.description}</Text>
          <Text style={styles.text}>Price: ${product.price}</Text>
          <Text style={styles.text}>Discount: {product.discountPercentage}%</Text>
          <Text style={styles.text}>Rating: {product.rating} stars</Text>
          <Text style={styles.text}>Stock: {product.stock} units</Text>
          <Text style={styles.text}>Brand: {product.brand}</Text>
          <Text style={styles.text}>Category: {product.category}</Text>
        </Card.Content>
        <Card.Actions style={styles.buttonRow}>
          <Button mode="contained" buttonColor="#6a1b9a" textColor="white">Delete</Button>
          <Button mode="contained" buttonColor="#6a1b9a" textColor="white">Cancel</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  card: { borderRadius: 10, elevation: 4 },
  image: { width: '100%', height: 250, borderRadius: 8, marginBottom: 16 },
  text: { fontSize: 16, marginBottom: 6 },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
