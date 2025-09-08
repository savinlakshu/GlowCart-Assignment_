import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProductCard({ product, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      <Text numberOfLines={1} style={styles.name}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: { backgroundColor:'#fff', borderRadius:14, padding:10, margin:8, elevation:2, width:'46%' },
  image: { height:110, borderRadius:10, marginBottom:8 },
  name: { fontWeight:'700' },
  price: { color:'#E75480', marginTop:2 }
});