import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

export default function Product_Detail({ id, onNavigate }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((response) => {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.json();
        })
        .then((data) => setProduct(data))
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [id]);

  if (!product) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading product details...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Title title={product.title} subtitle={product.brand} />
        <Card.Content>
          <Image source={{ uri: product.thumbnail }} style={styles.image} />
          <Text style={styles.text}>Description: {product.description}</Text>
          <Text style={styles.text}>Category: {product.category}</Text>
          <Text style={styles.text}>Price: ${product.price}</Text>
          <Text style={styles.text}>Discount: {product.discountPercentage}% off</Text>
          <Text style={styles.text}>Rating: {product.rating}</Text>
          <Text style={styles.text}>Stock: {product.stock}</Text>
        </Card.Content>

        <Card.Actions>
          <Button
            mode='contained'
            style={styles.btnBack}
          >
            Delete
          </Button>
          <Button
            mode="contained"
            style={styles.btnBack}
          >
            Cancel
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    borderRadius: 8,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    marginBottom: 16,
  },
  text: {
    marginBottom: 6,
    fontSize: 16,
  },
  btnBack: {
    marginTop: 10,
    backgroundColor: '#2196F3',
  },
});
